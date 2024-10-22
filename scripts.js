// This function will be called when a tab is clicked
function openTab(tabName) {
    var i, tabcontent;

    // Get all elements with the class 'tabcontent' (all sections)
    tabcontent = document.getElementsByClassName("tabcontent");

    // Loop through all tabcontent elements and hide them
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all sections
    }

    // Show the current tab (based on which tab was clicked)
    document.getElementById(tabName).style.display = "block";
}

// This ensures that the 'About' section is displayed when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about").style.display = "block"; // Show the 'About' tab by default
});
// Data for Stock Market Trend (example data)
var stockData = {
    x: ['2021-01-01', '2021-02-01', '2021-03-01'], // Dates
    y: [150, 200, 250], // Stock Prices
    type: 'scatter' // Scatter plot type
};

var layout = {
    title: 'Stock Market Trend',
    xaxis: { title: 'Date' },
    yaxis: { title: 'Stock Price' }
};

// Create the plot in the 'stock-chart' div
Plotly.newPlot('stock-chart', [stockData], layout);