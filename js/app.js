'use strict';

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Store Total'];

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