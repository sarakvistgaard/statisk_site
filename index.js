"use strict";
// tjekker om der er hul igennem
console.log("hello world");

// definerer min url (altså linket som indeholder min data - de ingredienser jeg skal bruge)
const productUrl = "https://kea-alt-del.dk/t7/api/seasons";

// hiver fat i det html jeg skal bruge (altså den "kasse" mit indhold skal ind i, og laver en konstant så jeg kan bruge den i min funktion)
const categories = document.querySelector("#index_kategorier");

// vi definerer funktionen (altså hvad er det vi skal gøre)
// fetch er en metode til at hente data (indbygget i js)
// den fetcher fra productUrl, og det result er vores json fil (med vores ingredienser i), og de ingredienser siger vi skal ende ud i vores funktion som hedder showData
// funktionen er vores opskrift og de parametre der ligger inde i (altså dataen fra json filen) er vores ingredienser
// catch((error)) siger at hvis det ikke lykkes at fetche, så vil den skrive "could not fetch seasons" i min console.log
function getData() {
  fetch(productUrl)
    .then((result) => result.json())
    .then((data) => showData(data))
    .catch((error) => console.error("Could not fetch seasons", error));
}

// nu skal jeg definere hvad vores funktion skal gøre med de parametre vi har sat ind i den (altså hvad skal den gøre med det data den har fetchet)
function showData(data) {
  console.log("DATA", data);

  //   vi laver en variabel som vi kalder myInnerHtml, og her laver vi en datatype (vi skal sige hvilken slags data vores indhold er), og her siger vi den skal være en string ("") fordi html som default er string
  let myInnerHtml = "";

  // jeg går ind i min data og hver datapunkt finder den season og "spytter" den ud
  //   vi skriver season.season fordi den første er den "mappe" eller "kategori" vi skal ind i, og den anden er indholdet af den kategori
  // så i princippet står der season.summer, season.winter osv.
  data.forEach((season) => {
    myInnerHtml += `
      <div>
      <a href="produktliste.html">${season.season}</a>
      </div>
      `;
  });

  //   til sidst siger vi at den const vi kaldte categories (som er vores kasse vi gerne vil putte indhold i) er et html element (ved at sige innerHtml)
  // og i den kasse vil vi gerne putte det indhold ind som vi har defineret da vi lavede forEach
  categories.innerHTML = myInnerHtml;
}

// til sidst kalder jeg getData funktionen, som min showData ligger indeni
getData();
