'use strict';


console.log('hi');

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var firstAndPike = {
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgSalePerCust: 6.3,
  cookiesSoldEachHr: [],
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (65 - 23) + 23);
      var ulItemElement = document.getElementById('firstAndPike');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  }
};

firstAndPike.calcCookiesPerHr();

var seaTacAirport = {
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgSalePerCust: 1.2,
  cookiesSoldEachHr: [],
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (24 - 3) + 3);
      var ulItemElement = document.getElementById('seaTacAirport');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  }
};

seaTacAirport.calcCookiesPerHr();


// var seattleCenter = {
//   minCustPerHr: 11,
//   maxCustPerHr: 38,
//   avgSalePerCust: 3.7
//   cookiesSoldEachHr: [],
//   avgCustsPerHr: Math.random() * (38 - 11) + 11,
//   avgCookiesPerHour: avgCustsPerHr * avgSalePerCust,
// };

// var capitolHill = {
//   minCustPerHr: 20,
//   maxCustPerHr: 38,
//   avgSalePerCust: 2.3
//   cookiesSoldEachHr: [],
//   avgCustsPerHr: Math.random() * (38 - 20) + 20,
//   avgCookiesPerHour: avgCustsPerHr * avgSalePerCust,
// };

// var alki = {
//   minCustPerHr: 2,
//   maxCustPerHr: 16,
//   avgSalePerCust: 4.6
//   cookiesSoldEachHr: [],
//   avgCustsPerHr: Math.random() * (16 - 2) + 2,
//   avgCookiesPerHour: avgCustsPerHr * avgSalePerCust,
// }
