'use strict';

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Store Total'];

var hourlyAllCookies = [];

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
});

var addStoreElement = document.getElementById('addStoreForm');
addStoreElement.addEventListener('submit', handleNewStore);

function handleNewStore(event) {
  event.preventDefault();
  alert('Thank you for your interest in our Franchise! We will crunch the numbers and see if a store at this location will be profitable!');
  var submitButton = event.target;
  var newStore = new CreateStore(submitButton.storeLocation.value, submitButton.minCust.value, submitButton.maxCust.value, submitButton.avgSale.value);
  newStore.cookiesPerHr();
  newStore.getTotal();
}

function CreateStore(storeName, minCustPerHr, maxCustPerHr, avgSalePerCust) {
  this.cookiesSoldEachHr = [];
  this.totalCookies = 0;
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgSalePerCust = avgSalePerCust;
}

CreateStore.renderTimes = function() {
  var tableElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'tableHead');
  tableElement.appendChild(tableRow);
  var headTime = document.createElement('td');
  headTime.textContent = 'Time';
  tableRow.appendChild(headTime);
  for (var i in hrsOfOperation) {
    tableElement = document.getElementById('table');
    headTime = document.createElement('td');
    headTime.textContent = hrsOfOperation[i];
    tableRow.appendChild(headTime);
  }
};

CreateStore.prototype.cookiesPerHr = function() {
  var tableRow = document.createElement('tr');
  tableElement = document.getElementById('table');
  var strName = document.createElement('td');
  strName.textContent = this.storeName;
  strName.setAttribute('class', 'stores');
  tableRow.appendChild(strName);
  tableRow.setAttribute('id', this.storeName);

  for (var i = 0; i < hrsOfOperation.length -1; i++) {
    var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
    var tableElement = document.getElementById('table');
    var randomCookies = (Math.round(numOfCustsPerHr * this.avgSalePerCust));
    this.cookiesSoldEachHr.push(randomCookies);
    hourlyAllCookies.push(randomCookies);
    this.totalCookies += randomCookies;
    tableRow.textcontent = hrsOfOperation[i];
    tableElement.appendChild(tableRow);
    var tableData = document.createElement('td');
    tableData.textContent = randomCookies;
    tableRow.appendChild(tableData);
  }
};

CreateStore.prototype.getTotal = function() {
  var tableElement = document.getElementById('table');
  var tableRow = document.getElementById(this.storeName);
  tableElement.appendChild(tableRow);
  var grandTotal = document.createElement('td');
  grandTotal.textContent = this.totalCookies;
  tableRow.appendChild(grandTotal);
};

var firstAndPike = new CreateStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new CreateStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CreateStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CreateStore('Capitol Hill', 20, 38, 2.3);
var alki = new CreateStore('Alki', 2, 16, 4.6);

CreateStore.renderTimes();
firstAndPike.cookiesPerHr();
firstAndPike.getTotal();
seaTacAirport.cookiesPerHr();
seaTacAirport.getTotal();
seattleCenter.cookiesPerHr();
seattleCenter.getTotal();
capitolHill.cookiesPerHr();
capitolHill.getTotal();
alki.cookiesPerHr();
alki.getTotal();


// Gets proper totals, but doesn't work when we add a new store. The array updates to a new length of 90, but the for loops don't account for the extra 15 items in the array for some reason. Need to try accomplishing this again with a constructor instead.

// var sixAMTotal = 0;var sevenAMTotal =0;var eightAMTotal =0;var nineAMTotal =0;var tenAMTotal =0;var elevenAMTotal =0;var twelvePMTotal =0;var onePMTotal =0;var twoPMTotal =0;var threePMTotal =0;var fourPMTotal =0;var fivePMTotal =0;var sixPMTotal =0;var sevenPMTotal =0;var eightPMTotal =0;

// for (var i = 0; i < hourlyAllCookies.length; i += 15) {
//   sixAMTotal += hourlyAllCookies[i];
// }
// for (var i = 1; i < hourlyAllCookies.length; i += 15) {
//   sevenAMTotal += hourlyAllCookies[i];
// }
// for (var i = 2; i < hourlyAllCookies.length; i += 15) {
//   eightAMTotal += hourlyAllCookies[i];
// }
// for (var i = 3; i < hourlyAllCookies.length; i += 15) {
//   nineAMTotal += hourlyAllCookies[i];
// }
// for (var i = 4; i < hourlyAllCookies.length; i += 15) {
//   tenAMTotal += hourlyAllCookies[i];
// }
// for (var i = 5; i < hourlyAllCookies.length; i += 15) {
//   elevenAMTotal += hourlyAllCookies[i];
// }
// for (var i = 6; i < hourlyAllCookies.length; i += 15) {
//   twelvePMTotal += hourlyAllCookies[i];
// }
// for (var i = 7; i < hourlyAllCookies.length; i += 15) {
//   onePMTotal += hourlyAllCookies[i];
// }
// for (var i = 8; i < hourlyAllCookies.length; i += 15) {
//   twoPMTotal += hourlyAllCookies[i];
// }
// for (var i = 9; i < hourlyAllCookies.length; i += 15) {
//   threePMTotal += hourlyAllCookies[i];
// }
// for (var i = 10; i < hourlyAllCookies.length; i += 15) {
//   fourPMTotal += hourlyAllCookies[i];
// }
// for (var i = 11; i < hourlyAllCookies.length; i += 15) {
//   fivePMTotal += hourlyAllCookies[i];
// }
// for (var i = 12; i < hourlyAllCookies.length; i += 15) {
//   sixPMTotal += hourlyAllCookies[i];
// }
// for (var i = 13; i < hourlyAllCookies.length; i += 15) {
//   sevenPMTotal += hourlyAllCookies[i];
// }
// for (var i = 14; i < hourlyAllCookies.length; i += 15) {
//   eightPMTotal += hourlyAllCookies[i];
// }