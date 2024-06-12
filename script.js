// Set up the map
const map = L.map('map').setView([40.7128, -74.0060], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Define the size of the blocks
const blockSize = 0.001; // Adjust as needed

// Function to create a block
function createBlock(lat, lng, id) {
    const bounds = [
        [lat, lng],
        [lat + blockSize, lng + blockSize]
    ];
    const block = L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);
    block.on('click', () => handleBlockClick(id));
}

// Function to handle block click
function handleBlockClick(id) {
    alert(`Block ID: ${id} clicked.`);
}

// Create blocks in a grid pattern over New York City
let id = 1;
for (let lat = 40.70; lat < 40.75; lat += blockSize) {
    for (let lng = -74.02; lng < -73.97; lng += blockSize) {
        createBlock(lat, lng, id);
        id++;
    }
}