function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
    }
    //Prototype method
    places.prototype.getSummary=function(){
    return `${this.location} is a great place to visit during ${this.timeOfYear}. It has landmarks such as ${this.landmarks.join(', ')}. Notes: ${this.notes}`;
    };

