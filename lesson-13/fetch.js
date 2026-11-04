console.log("Before fetch");

const weatherFetch = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
  })
  .catch((err) => console.log(err));