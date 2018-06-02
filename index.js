// references to the tbody element, input field, and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");

// event listener for the search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// set filteredAddresses to data initally
var filteredAddresses = data;

function renderTable() {
    $tbody.innerHTML="";

    for (var i = 0; i < filteredAddresses.length; i++) {

        var address = filteredAddresses[i];
        var fields = Object.keys(address);

        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

function handleSearchButtonClick() {
    var filterState = $stateInput.value.trim().toLowerCase();

    filteredAddresses = data.filter(function(address) {
        var addressData = address.state.toLowerCase();

        return addressData === filterState;
    });
    renderTable();
}
renderTable();