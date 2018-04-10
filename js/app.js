'use strict';

var hrsOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var firstAndPike = {
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgSalePerCust: 6.3,
  cookiesSoldEachHr: [],
  totalCookies: 0,
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length -1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (65 - 23) + 23);
      var ulItemElement = document.getElementById('firstAndPike');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      this.totalCookies += this.cookiesSoldEachHr[i];
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  },
  calcTotalCookies: function() {
    var ulItemElement = document.getElementById('firstAndPike');
    var listItemElement = document.createElement('li');
    listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
    ulItemElement.appendChild(listItemElement);
  }
};


var seaTacAirport = {
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgSalePerCust: 1.2,
  cookiesSoldEachHr: [],
  totalCookies: 0,
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (24 - 3) + 3);
      var ulItemElement = document.getElementById('seaTacAirport');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      this.totalCookies += this.cookiesSoldEachHr[i];
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  },
  calcTotalCookies: function() {
    var ulItemElement = document.getElementById('seaTacAirport');
    var listItemElement = document.createElement('li');
    listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
    ulItemElement.appendChild(listItemElement);
  }
};

var seattleCenter = {
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgSalePerCust: 3.7,
  cookiesSoldEachHr: [],
  totalCookies: 0,
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (38 - 11) + 11);
      var ulItemElement = document.getElementById('seattleCenter');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      this.totalCookies += this.cookiesSoldEachHr[i];
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  },
  calcTotalCookies: function() {
    var ulItemElement = document.getElementById('seattleCenter');
    var listItemElement = document.createElement('li');
    listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
    ulItemElement.appendChild(listItemElement);
  }
};

var capitolHill = {
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgSalePerCust: 2.3,
  cookiesSoldEachHr: [],
  totalCookies: 0,
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (38 - 20) + 20);
      var ulItemElement = document.getElementById('capitolHill');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      this.totalCookies += this.cookiesSoldEachHr[i];
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  },
  calcTotalCookies: function() {
    var ulItemElement = document.getElementById('capitolHill');
    var listItemElement = document.createElement('li');
    listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
    ulItemElement.appendChild(listItemElement);
  }
};


var alki = {
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgSalePerCust: 4.6,
  cookiesSoldEachHr: [],
  totalCookies: 0,
  calcCookiesPerHr: function() {
    for (var i = 0; i < hrsOfOperation.length - 1; i++) {
      var numOfCustsPerHr = Math.round(Math.random() * (16 - 2) + 2);
      var ulItemElement = document.getElementById('alki');
      this.cookiesSoldEachHr[i] = Math.round(numOfCustsPerHr * this.avgSalePerCust);
      this.totalCookies += this.cookiesSoldEachHr[i];
      var listItemElement = document.createElement('li');
      listItemElement.textContent = hrsOfOperation[i] + ': ' + this.cookiesSoldEachHr[i];
      ulItemElement.appendChild(listItemElement);
    }
  },
  calcTotalCookies: function() {
    var ulItemElement = document.getElementById('alki');
    var listItemElement = document.createElement('li');
    listItemElement.textContent = hrsOfOperation[15] + ': ' + this.totalCookies;
    ulItemElement.appendChild(listItemElement);
  }
};

firstAndPike.calcCookiesPerHr();
firstAndPike.calcTotalCookies();
seaTacAirport.calcCookiesPerHr();
seaTacAirport.calcTotalCookies();
seattleCenter.calcCookiesPerHr();
seattleCenter.calcTotalCookies();
capitolHill.calcCookiesPerHr();
capitolHill.calcTotalCookies();
alki.calcCookiesPerHr();
alki.calcTotalCookies();