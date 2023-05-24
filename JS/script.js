"use strict"

// ARRAY
let shopping = ['Latte', 'Uova', 'Pasta', 'Pizza', 'Salame', 'Mortadella', 'Pane', 'Insalata'];

// COSTANTE
const shopping_list= document.getElementById('shopping-list');

// VARIABILE
let i= 0;

// CICLO WHILE
while(i<shopping.length){
    let item= shopping[i];
    i++;

    let list_item= document.createElement('li');
    list_item.innerText= item
    shopping_list.append(list_item);
}


