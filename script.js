let places = [];

document.getElementById('place-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const location = document.getElementById('location').value;
  const landmarks = document.getElementById('landmarks').value.split(',').map(s => s.trim());
  const timeOfYear = document.getElementById('timeOfYear').value;
  const notes = document.getElementById('notes').value;

  const place = new Place(location, landmarks, timeOfYear, notes);
  places.push(place);
  displayPlaces();
  document.getElementById('place-form').reset();
});

function displayPlaces() {
  const list = document.getElementById('places-list');
  list.innerHTML = '';
  places.forEach((place, index) => {
    const li = document.createElement('li');
    li.textContent = place.location;
    li.addEventListener('click', () => showDetails(index));
    list.appendChild(li);
  });
}

function showDetails(index) {
  const place = places[index];
  const details = document.getElementById('place-details');
  details.innerHTML = `
    <h2>${place.location}</h2>
    <p><strong>Landmarks:</strong> ${place.landmarks.join(', ')}</p>
    <p><strong>Time of Year:</strong> ${place.timeOfYear}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;
  details.style.display = 'block';
}
