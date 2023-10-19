// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);

    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }

    myStudentId.textContent = 'Student ID: 200542631'; // Replace with your actual student ID
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomInput = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomInput; // Set the random number to the input
    changeCustomColor(); // Reuse the existing function to handle color change
}

// Function to generate options for select list
function addList() {
    // Replace this array with the actual image source locations
    const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg', 'image5.jpg'];

    // Clear existing options
    imageSelect.innerHTML = '<option value="">Please choose…</option>';

    // Add options from the array
    imageSources.forEach((source, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Image ${index + 1}`;
        imageSelect.appendChild(option);
    });
}

// Function to change image
function changeImage() {
    const selectedIndex = imageSelect.value;
    // Replace this array with the actual image source locations
    const imageSources = ['img1.jpg', 'img2.jpg', 'img3.jpg','img4.jpg', 'img5.jpg'];

    if (selectedIndex >= 0 && selectedIndex < imageSources.length) {
        const selectedImage = imageSources[selectedIndex];
        images.src = 'img/' + selectedImage; // Assuming images are in the 'img' folder
        images.alt = 'Selected Image';
    } else {
        // Handle invalid selection
        images.src = '';
        images.alt = '';
    }
}

// Event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);
imageSelect.addEventListener('change', changeImage);
