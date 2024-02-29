//Get all the countries from Asia continent /region using Filter function
let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let asianCountries = countriesData.filter(
        (country) => country.region === "Asia"
      );
      console.log(asianCountries);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();

// Get all the countries with a population of less than 2 lakhs using Filter function
let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let below2lacks = countriesData.filter(
        (country) =>Number(country.population) < 200000
      );
      console.log(below2lacks);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();

// Get all the countries with a population of less than 2 lakhs using Filter function 

let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let showdetials = countriesData.forEach((country) => {
         let obj = {
            name: JSON.stringify(country.name),
          capital: country.capital,
          flag: country.flag,
         };
         resarray.push(obj);
      });
        
      console.log(resarray);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();


 //Print the total population of countries using reduce function
 
 let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let asianCountries = countriesdata.map((data) => data.population);
     let totalpopulation = showdetails.reduce((prev,next) => {
         return prev + next;
     });
      console.log(totalpopulation);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();

// Print the country that uses US dollars as currency
let countriesData;
const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

const url = "https://restcountries.com/v3.1/all";

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      countriesData = JSON.parse(xhr.responseText);
      let usdCountries = countriesData.filter((country) => {
         if (country?.currencies?.hasOwnProperty("USD")) {
           return JSON.stringify(country);
         }
       });
      console.log(Usdcountries);
    } else {
      console.error(`Request failed with status ${xhr.status}`);
    }
  }
};

xhr.open("GET", url, true);
xhr.send();