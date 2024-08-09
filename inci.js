fetch('https://api.opencage.com/geocode/v1/json?q=' + lat + ',' + lon + '&key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data.results[0].formatted));
