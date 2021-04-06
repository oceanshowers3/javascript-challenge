// from data.js
var tableData = data;

// reference table body element
var tableBody = d3.select("tbody");

// for each UFO sighting:
tableData.forEach((ufoSighting) => {

    // append row for each sighting
    var tableRow = tableBody.append("tr");

    // for each row/sighting:
    Object.entries(ufoSighting).forEach(([key, value]) => {
        
      // append info to each cell
        var tableInfo = tableRow.append("td");
        tableInfo.text(value);
    });
});


// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");

// @TODO : Create said buttons for new said var inputs
// var inputFieldState = d3.select("#state");
// var inputFieldCountry = d3.select("#country");
// var inputFieldShape = d3.select("shape");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
// console.log(columns);



// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// set up function for button clicks
button.on("click", () => {    

    d3.event.preventDefault();
	
	// Business rule: use the first text box w a value as only search term:
	
	// 1. Get what the user searched for:
    var inputDate = searchDate.property("value");
    var inputCity = searchCity.property("value").toLowerCase();
    var inputState = searchState.property("value").toLowerCase();
    var inputCountry = searchCountry.property("value").toLowerCase();
    var inputShape = searchShape.property("value").toLowerCase();
		
	