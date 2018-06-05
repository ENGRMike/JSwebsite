// references to the tbody element, input field, and button
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#searchBtn");
var $searchDate = document.querySelector("#datetime");
var $searchCity = document.querySelector("#city");
var $searchState = document.querySelector("#state");
var $searchCountry = document.querySelector("#country");
var $searchShape = document.querySelector("#shape")

// event listener for the search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// set filteredAliens to data initially
var filteredAliens = data;

function renderTable() {
    $tbody.innerHTML="";

    for (var i = 0; i < filteredAliens.length; i++) {

        var aliens = filteredAliens[i];
        var fields = Object.keys(aliens);
        var row = $tbody.insertRow(i);

        for (var j = 0; j < fields.length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = aliens[fields[j]];
        }
    }
}

function handleSearchButtonClick(event) {
    event.preventDefault();
    
    var filterDate = $searchDate.value.trim().toLowerCase();
    var filterCity = $searchCity.value.trim().toLowerCase();
    var filterState = $searchState.value.trim().toLowerCase();
    var filterCountry = $searchCountry.value.trim().toLowerCase();
    var filterShape = $searchShape.value.trim().toLowerCase();

    filteredAliens = data.filter(function(aliens) {
        var alienDate = aliens.datetime.substring(0, filterDate.length).toLowerCase();
        var alienCity = aliens.city.substring(0, filterCity.length).toLowerCase();
        var alienState = aliens.state.substring(0, filterState.length).toLowerCase();
        var alienCountry = aliens.country.substring(0, filterCountry.length).toLowerCase();
        var alienShape = aliens.shape.substring(0, filterShape.length).toLowerCase();

        if (alienDate === filterDate && alienCity === filterCity && alienState === filterState && alienCountry === filterCountry && alienShape === filterShape) {
            return true;
        }
        return false;
    });
    renderTable();
}
renderTable();
