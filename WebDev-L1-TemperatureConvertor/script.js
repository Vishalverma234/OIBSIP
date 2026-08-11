
function convertTemperature() {

    const input = document.getElementById("temperature").value;

    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    const celsiusOutput = document.getElementById("celsius");

    const fahrenheitOutput = document.getElementById("fahrenheit");

    const kelvinOutput = document.getElementById("kelvin");


    // Clear previous error
    error.textContent = "";


    // Check empty input
    if (input === "") {

        error.textContent = "Please enter a temperature.";

        clearResults();

        return;
    }


    const temperature = Number(input);


    // Check invalid number
    if (isNaN(temperature)) {

        error.textContent = "Please enter a valid number.";

        clearResults();

        return;
    }


    let celsius;


    // Celsius
    if (unit === "celsius") {

        celsius = temperature;

    }


    // Fahrenheit
    else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    }


    // Kelvin
    else if (unit === "kelvin") {

        celsius = temperature - 273.15;

    }


    // Absolute zero
    if (celsius < -273.15) {

        error.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        clearResults();

        return;
    }


    // Convert Celsius to Fahrenheit
    const fahrenheit =
        (celsius * 9 / 5) + 32;


    // Convert Celsius to Kelvin
    const kelvin =
        celsius + 273.15;


    // Display results
    celsiusOutput.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitOutput.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinOutput.textContent =
        kelvin.toFixed(2) + " K";
}


function clearResults() {

    document.getElementById("celsius").textContent = "--";

    document.getElementById("fahrenheit").textContent = "--";

    document.getElementById("kelvin").textContent = "--";
}
