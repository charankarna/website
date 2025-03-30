// Get Elements
const mainButton = document.getElementById('mainButton');
const subsetButtons = document.getElementById('subsetButtons');

// Toggle Subset Buttons
mainButton.addEventListener('click', () => {
  subsetButtons.classList.toggle('active');
});