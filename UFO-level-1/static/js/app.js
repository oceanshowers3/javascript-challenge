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


// reference the button element
var button = d3.select("#filter-btn");

// set up function for button clicks
button.on("click", function() {

    tableBody.html("");

    // reference the input date element
    var inputDate = d3.select("#datetime");

    // reference the value property of the input date
    var inputValue = inputDate.property("value");
    
    // filter the data so it only displays data relative to input date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // for each sighting in filteredData: 
    filteredData.forEach((input) => {

        // append rows for each UFO sighting
        var tableRow = tableBody.append("tr");
        
        // for each row/sighting:
        Object.entries(input).forEach(([key, value]) => {
        
            // append info to each cell
            var tableInfo = tableRow.append("td");
            tableInfo.text(value);
        });
    });
});



