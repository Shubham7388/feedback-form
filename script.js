document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateAndSubmit();
});

document.querySelector('.reset').addEventListener('click', function () {
    document.getElementById('surveyForm').reset();
});

function validateAndSubmit() {
    // Perform necessary validations here

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const genderArray = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
    const genderLabels = genderArray.map(checkbox => {
        const label = Array.from(checkbox.parentElement.childNodes)
            .find(node => node.nodeType === Node.TEXT_NODE);
        return label.textContent.trim();
    });
    const gender = genderLabels.join(', ');

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Display the values in the popup
    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById('popupContent').innerHTML = popupContent;

    // Display the popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    // Close the popup
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';

    // Reset the form
    document.getElementById('surveyForm').reset();
}
