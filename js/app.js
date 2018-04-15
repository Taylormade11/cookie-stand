'use strict';

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Store Total'];

var hrlyValues = [];
var storeTotals = [];
var stores = [];


var addStoreForm = document.getElementById('submit');
addStoreForm.addEventListener('click', function() {
});

var addStoreElement = document.getElementById('addStoreForm');
addStoreElement.addEventListener('submit', handleNewStore);

function handleNewStore(event) {
  event.preventDefault();
  alert('Thank you for your interest in our Franchise! We will crunch the numbers and see if a store at this location will be profitable!');
  var addStoreForm = event.target;
  var newStore = new CreateStore(
    addStoreForm.storeLocation.value,
    parseInt(addStoreForm.minCust.value),
    parseInt(addStoreForm.maxCust.value),
    parseFloat(addStoreForm.avgSale.value));
  newStore.cookiesPerHr();
}

function CreateStore(storeName, minCustPerHr, maxCustPerHr, avgSalePerCust) {
  this.cookiesSoldEachHr = [];
  this.totalCookies = 0;
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgSalePerCust = avgSalePerCust;
  stores.push(this.storeName);
}

// Renders time header - Called once
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
    hrlyValues.push(randomCookies);
    this.totalCookies += randomCookies;
    tableRow.textcontent = hrsOfOperation[i];
    var tableData = document.createElement('td');
    tableData.textContent = randomCookies;
    tableRow.appendChild(tableData);
  }
  var strTotal = document.createElement('td');
  strTotal.textContent = this.totalCookies;
  tableRow.appendChild(strTotal);
  tableElement.appendChild(tableRow);
  storeTotals.push(this.totalCookies);
};

var firstAndPike = new CreateStore('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new CreateStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CreateStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CreateStore('Capitol Hill', 20, 38, 2.3);
var alki = new CreateStore('Alki', 2, 16, 4.6);

CreateStore.renderFooter = function() {
  var tableFooter = document.getElementById('tfoot');
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'hrTotals');
  tableFooter.appendChild(tableRow);
  var timeTotal = document.createElement('td');
  timeTotal.textContent = 'Hourly Totals';
  tableRow.appendChild(timeTotal);
  var startingPoint = 0;
  var grandTotal =0;
  for (var i = 0; i < hrsOfOperation.length - 1; i ++) {
    var strtPoint = startingPoint;
    var hrTotal = 0;
    for (var j = 0; j < stores.length; j ++) {
      var hr = 0;
      hr = hrlyValues[strtPoint];
      strtPoint += 15;
      hrTotal += hr;
    }
    timeTotal = document.createElement('td');
    timeTotal.textContent = hrTotal;
    tableRow.appendChild(timeTotal);
    startingPoint += 1;
  }
  for (var total of storeTotals) {
    grandTotal += total;
  }
  timeTotal = document.createElement('td');
  timeTotal.textContent = grandTotal;
  tableRow.appendChild(timeTotal);
};

CreateStore.renderTimes();
firstAndPike.cookiesPerHr();
seaTacAirport.cookiesPerHr();
seattleCenter.cookiesPerHr();
capitolHill.cookiesPerHr();
alki.cookiesPerHr();
CreateStore.renderFooter();