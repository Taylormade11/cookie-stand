'use strict';

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

function CreateStore(storeName, minCustPerHr, maxCustPerHr, avgSalePerCust) {
  this.cookiesSoldEachHr = [];
  this.totalCookies = 0;
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgSalePerCust = avgSalePerCust;
}

CreateStore.prototype.renderHeader = function() {
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

firstAndPike.renderHeader();
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


// var firstAndPike = {
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   avgSalePerCust: 6.3,
//   cookiesSoldEachHr: [],
//   totalCookies: 0,
// calcCookiesPerHr: function() {
//   for (var i = 0; i < hrsOfOperation.length -1; i++) {
//     var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
//     var ulItemElement = document.getElementById('firstAndPike');
//     this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
//     this.totalCookies += this.cookiesSoldEachHr[i];
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
//     ulItemElement.appendChild(listItemElement);
//   }
// },
//   calcTotalCookies: function(targetStore) {
//     var ulItemElement = document.getElementById(listOfStores[targetStore]);
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
//     ulItemElement.appendChild(listItemElement);
//   }
// };


// var seaTacAirport = {
//   minCustPerHr: 3,
//   maxCustPerHr: 24,
//   avgSalePerCust: 1.2,
//   cookiesSoldEachHr: [],
//   totalCookies: 0,
//   calcCookiesPerHr: function() {
//     for (var i = 0; i < hrsOfOperation.length - 1; i++) {
//       var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
//       var ulItemElement = document.getElementById('seaTacAirport');
//       this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
//       this.totalCookies += this.cookiesSoldEachHr[i];
//       var listItemElement = document.createElement('li');
//       listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
//       ulItemElement.appendChild(listItemElement);
//     }
//   },
//   calcTotalCookies: function() {
//     var ulItemElement = document.getElementById('seaTacAirport');
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
//     ulItemElement.appendChild(listItemElement);
//   }
// };

// var seattleCenter = {
//   minCustPerHr: 11,
//   maxCustPerHr: 38,
//   avgSalePerCust: 3.7,
//   cookiesSoldEachHr: [],
//   totalCookies: 0,
//   calcCookiesPerHr: function() {
//     for (var i = 0; i < hrsOfOperation.length - 1; i++) {
//       var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
//       var ulItemElement = document.getElementById('seattleCenter');
//       this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
//       this.totalCookies += this.cookiesSoldEachHr[i];
//       var listItemElement = document.createElement('li');
//       listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
//       ulItemElement.appendChild(listItemElement);
//     }
//   },
//   calcTotalCookies: function() {
//     var ulItemElement = document.getElementById('seattleCenter');
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
//     ulItemElement.appendChild(listItemElement);
//   }
// };

// var capitolHill = {
//   minCustPerHr: 20,
//   maxCustPerHr: 38,
//   avgSalePerCust: 2.3,
//   cookiesSoldEachHr: [],
//   totalCookies: 0,
//   calcCookiesPerHr: function() {
//     for (var i = 0; i < hrsOfOperation.length - 1; i++) {
//       var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
//       var ulItemElement = document.getElementById('capitolHill');
//       this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
//       this.totalCookies += this.cookiesSoldEachHr[i];
//       var listItemElement = document.createElement('li');
//       listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
//       ulItemElement.appendChild(listItemElement);
//     }
//   },
//   calcTotalCookies: function() {
//     var ulItemElement = document.getElementById('capitolHill');
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
//     ulItemElement.appendChild(listItemElement);
//   }
// };


// var alki = {
//   minCustPerHr: 2,
//   maxCustPerHr: 16,
//   avgSalePerCust: 4.6,
//   cookiesSoldEachHr: [],
//   totalCookies: 0,
//   calcCookiesPerHr: function() {
//     for (var i = 0; i < hrsOfOperation.length - 1; i++) {
//       var numOfCustsPerHr = Math.round(Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr);
//       var ulItemElement = document.getElementById('alki');
//       this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
//       this.totalCookies += this.cookiesSoldEachHr[i];
//       var listItemElement = document.createElement('li');
//       listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
//       ulItemElement.appendChild(listItemElement);
//     }
//   },
//   calcTotalCookies: function() {
//     var ulItemElement = document.getElementById('alki');
//     var listItemElement = document.createElement('li');
//     listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
//     ulItemElement.appendChild(listItemElement);
//   }
// };

// firstAndPike.calcCookiesPerHr();
// firstAndPike.calcTotalCookies(0);
// seaTacAirport.calcCookiesPerHr();
// seaTacAirport.calcTotalCookies();
// seattleCenter.calcCookiesPerHr();
// seattleCenter.calcTotalCookies();
// capitolHill.calcCookiesPerHr();
// capitolHill.calcTotalCookies();
// alki.calcCookiesPerHr();
// alki.calcTotalCookies();