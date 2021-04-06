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
        
      // append info about each sighting
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

    // for each 
    filteredData.forEach(function(selections) {

        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});



