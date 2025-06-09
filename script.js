var myCarousel = document.querySelector('#photoCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, 
    ride: 'carousel'
});

function showMessage() {
    // Get the message element
    const message = document.getElementById('message');

    // Set the message content and style
    message.classList.remove('d-none', 'alert-danger', 'alert-success');
    message.classList.add('alert-success'); // Change to 'alert-danger' for error
    message.textContent = 'Form submitted successfully!';

    // Optionally, hide the message after a few seconds
    setTimeout(() => {
        message.classList.add('d-none');
    }, 3000);
}

function showPaymentPhoto() {
    const dropdown = document.getElementById('paymentDropdown');
    const paymentPhoto = document.getElementById('paymentPhoto');

    if (dropdown.value) {
        paymentPhoto.classList.remove('d-none'); // Show the photo
    } else {
        paymentPhoto.classList.add('d-none'); // Hide the photo
    }
    console.log("Dropdown value:", dropdown.value);
}



