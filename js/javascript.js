
// ------------- LOOKBOOK ---------------

// Below is the lookbook lightbox script
function openlightbox() {
    document.getElementById('lightbox1').style.display = "block";
  }
  
//   This closes the lightbox
function closelightbox() {
    document.getElementById('lightbox1').style.display = "none";
  }
  
//   Slideshow functionality
var slideShow = 1;
    previewSlides(slideShow);
  
function plusSlides(n) {
    previewSlides(slideShow += n);
}
  
function currentSlide(n) {
    previewSlides(slideShow = n);
}
  
function previewSlides(n) {
    var x;
    var slides = document.getElementsByClassName("hide-lightbox");
    var dots = document.getElementsByClassName("preview");
    // once cliked next slide would show
    if (n > slides.length) {slideShow = 1}
    // once cliked previous slide would show
    if (n < 1) {slideShow = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    
    slides[slideShow-1].style.display = "block";
    dots[slideShow-1].className += " active";
}

// let items = document.getElementByClassName('item');
// console.log(items);

let cart = [
    // ( name: name, price: price,),
    // ( name: name, price: price,),
    // ( name: name, price: price,),
    // ( name: name, price: price,),
    // ( name: name, price: price,),
    // ( name: name, price: price,),
];

function addCart(name, price) {
    // create item
    let item = {
        name: name,
        price: price,
    };

    // check array if empty
    if (cart.length != 0) {
        let check = false;
        for (let cartItem in cart) {
            if (cart[cartItem].name === item.name) {
                check = true;
            }
        }

    // if check returns false, item was not found in the array
    if (!check) { cart.push(item) }

    // else push to array
    } else {
        cart.push(item);
    }

    // get cart div
    let div = document.getElementById('cart');
    // clear cart
    div.innerHTML = "";

    // show cart with updated array
    for (let value in cart) {

        // Create a <li> node
        let node = document.createElement("LI");
        // Create a text node
        let textnode = document.createTextNode(cart[value].name);

        // Append the text to <li>
        node.appendChild(textnode);

        // Append <li> to <ul> with id="myList"
        div.appendChild(node);
    }
}

// STILL TO DO
// remove an item from cart
// write a function that calculates the total of the cart
// add a quantity to cart items
// be able to increase and decrease the quantity
// REMEMBER the cart total must update as quantity changes