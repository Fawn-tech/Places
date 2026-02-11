# Places You've Been

This project tracks places you've visited, using JavaScript objects with constructors and prototypes.

## Business Logic

The `Place` object represents a destination with properties: location, landmarks, timeOfYear, notes.

### Constructor
```javascript
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
```

### Prototype Methods
- `getSummary()`: Returns a summary string of the place.

## Tests (TDD)

### Test 1: Constructor creates object with properties
- Input: new Place("Paris", ["Eiffel Tower"], "Summer", "Great food")
- Expected: object with location: "Paris", etc.

### Test 2: getSummary method
- Input: place.getSummary()
- Expected: "Paris: Eiffel Tower, Summer, Great food"

### Test 3: Multiple places
- Create two places, ensure they are separate objects.

## User Interface
- Add places via form.
- Click on place name to show details.
