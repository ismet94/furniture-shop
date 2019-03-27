// ------------- SHOP PAGE ---------------


// document.getElementById("showing-result1").innerHTML = "Showing Results 1-4 out of 12";



function shopProducts(img, title, price, description) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.description = description;
  }
  
    let chair4 = new shopProducts( '<img src="images/lookbook-images/future-chair4.jpg">', "Hexa-Chair", "R4000", "The Hexa-Chair is a popular demand, it has soft memory foam padding and a tungsten steel copper structure making it basically indestructible. A well use of cow hide is used for the cover and comes in three different shades, either saturn black, royal blue or lavish gray.");
  
        document.getElementById("image1").innerHTML = chair4.img;  
        document.getElementById("title1").innerHTML = chair4.title;
        document.getElementById("price1").innerHTML = chair4.price;
        document.getElementById("description1").innerHTML = chair4.description;
  
    let bed5 = new shopProducts( '<img src="images/lookbook-images/future-bed5.jpg">', "Memo-Bed", "R17000", "A bed that has a self waking up system by vibrating on users settings. Simply connect to the bed via wifi with your handset and control your comfort. Memo-Bed allows you to adjust the height and has an in-built heating and airflow system. We can supply to any colour you desire.");
  
        document.getElementById("image2").innerHTML = bed5.img;  
        document.getElementById("title2").innerHTML = bed5.title;
        document.getElementById("price2").innerHTML = bed5.price;
        document.getElementById("description2").innerHTML = bed5.description;

    let coffeetable2 = new shopProducts( '<img src="images/lookbook-images/future-coffee-table2.jpg">', "Halo Coffee Table", "R7500", "Taken from the rings of Jupiter the Halo Coffee Table is sure to let your space feel more sublte and relaxed. Perfect for your lounge the rings are carved from a one piece pine wood moulded to a marble bottom. The glass is a dual layer shatter proof substance. Colours may vary due to limited stock.");
  
        document.getElementById("image3").innerHTML = coffeetable2.img;  
        document.getElementById("title3").innerHTML = coffeetable2.title;
        document.getElementById("price3").innerHTML = coffeetable2.price;
        document.getElementById("description3").innerHTML = coffeetable2.description;

    let couch2 = new shopProducts( '<img src="images/lookbook-images/future-couch2.jpg">', "Retro Style II", "R13500", "Retro Styled Sofa set, the second version which includes a one seater. Made from Moonrock plastic compound and the padding designed from our famous memory foam and bull hide. The seating has a self heating or cooling function depending on the mood and has an auto feature set to room tempreture.");
  
        document.getElementById("image4").innerHTML = couch2.img;  
        document.getElementById("title4").innerHTML = couch2.title;
        document.getElementById("price4").innerHTML = couch2.price;
        document.getElementById("description4").innerHTML = couch2.description;





$(document).function();

$(function() {
  $('.like')
    .bind('click', function(event) {
      $(".like").toggleClass("liked");
    })
});

// let items = document.getElementByClassName('item');
// console.log(items)


// let cart = [
//     // ( name: Hexa-Chair, price: R4000,),
//     // ( name: name, price: price,),
//     // ( name: name, price: price,),
//     // ( name: name, price: price,),
//     // ( name: name, price: price,),
//     // ( name: name, price: price,),
// ];


// function addCart(name, price) {
//     // create item
//     let item = {
//         name: name,
//         price: price,
//     };

//     // check array if empty
//     if (cart.length != 0) {
//         let check = false;
//         for (let cartItem in cart) {
//             if (cart[cartItem].name === item.name) {
//                 check = true;
//             }
//         }

//     // if check returns false, item was not found in the array
//     if (!check) { cart.push(item) }

//     // else push to array
//     } else {
//         cart.push(item);
//     }

//     // get cart div
//     let div = document.getElementById('cart');
//     // clear cart
//     div.innerHTML = "";

//     // show cart with updated array
//     for (let value in cart) {

//         // Create a <li> node
//         let node = document.createElement("LI");
//         // Create a text node
//         let textnode = document.createTextNode(cart[value].name);

//         // Append the text to <li>
//         node.appendChild(textnode);

//         // Append <li> to <ul> with id="myList"
//         div.appendChild(node);
//     }
// }

// // STILL TO DO
// // remove an item from cart
// // write a function that calculates the total of the cart
// // add a quantity to cart items
// // be able to increase and decrease the quantity
// // REMEMBER the cart total must update as quantity changes

