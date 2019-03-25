$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);
		/*
		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 */
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});
});


$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
});

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