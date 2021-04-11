// from data.js
var tableData = data;

// referencess for html elements
var tableBody = d3.select("tbody");
var buttonSearch = d3.select("#filter-btn");
var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");


// for each UFO sighting:
var tableLoad = ((defaultTable) => { 
	// reset table data
    tableBody.html("");

	// for each UFO sighting
	defaultTable.forEach((ufoSighting) => {

		// append row for each sighting
		var tableRow = tableBody.append("tr");

		// for each row/sighting:
		Object.entries(ufoSighting).forEach(([key, value]) => {
			
		// append info to each cell
			var tableInfo = tableRow.append("td");
			tableInfo.text(value);
		});
	});
});

// call the tableLoad function to display default table
tableLoad(tableData)

// set up function for search button clicks
buttonSearch.on("click", () => {    

	d3.event.preventDefault();
    
	// reference what was entered into input fields
    var inputDate = searchDate.property("value");
    var inputCity = searchCity.property("value").toLowerCase();
    var inputState = searchState.property("value").toLowerCase();
    var inputCountry = searchCountry.property("value").toLowerCase();
    var inputShape = searchShape.property("value").toLowerCase();
	
    // if the user enters a date:
	if(inputDate){
		// filter the data
		var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
	
		// load the filtered data
		if(filteredData.length !== 0) {
			tableLoad(filteredData);
		}
		else { // if no rows matched search
			// reset table body
			tableBody.html("");
			
			// display no data message
			tableBody.append("tr").append("td").text("There are no sightings that match your search. Please try again.");
		}
	}

    // if the user enters a city:
	else if(inputCity) {
		// filter the data
		var filteredData = tableData.filter(sighting => sighting.city === inputCity);
	
		// load the filtered data
		if(filteredData.length !== 0) {
			tableLoad(filteredData);
		}
		else { // if no rows matched search
            // reset table body
            tableBody.html("");
                
            // display no data message
            tableBody.append("tr").append("td").text("There are no sightings that match your search. Please try again.");
		}
	}

    // if the user enters a state:
	else if(inputState) {
		// filter the data
		var filteredData = tableData.filter(sighting => sighting.state === inputState);
	
		// load the filtered data
		if(filteredData.length !== 0) {
			tableLoad(filteredData);
		}
		else { // if no rows matched search
			// reset table body
			tableBody.html("");
			
			// display no data message
			tableBody.append("tr").append("td").text("There are no sightings that match your search. Please try again.");
		}
	}

    // if the user enters a country:
	else if(inputCountry) {
		// filter the data
		var filteredData = tableData.filter(sighting => sighting.country === inputCountry);
	
		// load the filtered data
		if(filteredData.length !== 0) {
			tableLoad(filteredData);
		}
		else { // if no rows matched search
			// reset table body
			tableBody.html("");
			
			// display no data message
			tableBody.append("tr").append("td").text("There are no sightings that match your search. Please try again.");
		}
	}

    // if the user enters a shape:
	else { 
		// filter the data
		var filteredData = tableData.filter(sighting => sighting.shape === inputShape);
	
		// load the filtered data
		if(filteredData.length !== 0) {
			tableLoad(filteredData);
		}
		else { // if no rows matched search
			// reset table body
			tableBody.html("");
			
			// display no data message
			tableBody.append("tr").append("td").text("There are no sightings that match your search. Please try again.");
		}
	}
})