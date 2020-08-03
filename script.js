// Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
const colors = ['yellow', 'blue', 'red', 'orange'];

//Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
let i = 0
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
for (let a = 0; a < colors.length; a++) {
    console.log(colors[a]);
}


//Gebruik de forEach array method, om alle items in je array te loggen naar de console */
colors.forEach(myColor => console.log(myColor));



/* 
1.	Hoeveel regels neemt mijn for loop in beslag? 3
    En mijn while loop? 4

2.	Hoeveel regels neemt mijn forEach method in beslag? 1

3.	Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
    * Er is geen teller-variabele meer
    * De naam spreekt meer voor zich

    Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    forEach, deze is korter en de naam spreekt voor zich

4.	Kun je een array method gebruiken op een object? Nee. 
    Stel je hebt een object met 45 properties.
    Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop:
    Looping through the properties of an object:
    Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. 
    Ben je nu aan het itereren? Ja */

const family = {
    mother: "Marli",
    father: "Tonny",
    sister: "Emma",
    brother: "Jan",
    uncle: "Bob",
};

for (x in family) {
    console.log(family[x]);
}






