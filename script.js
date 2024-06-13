// ------------------------------add-items-in-cart-----------------------
//select all the "Add to cart" buttons
const addToCartButtons=document.querySelectorAll('.images a');

//select the cart icon in the top nav bar
const cartIcon=document.querySelector('.topnavbar .icons a i');

let cartCount=0; // Initialize a variable to keep count of the cart

addToCartButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        cartCount++; //Increment the cartCount
        cartIcon.textContent=cartCount; //update the cart icon text with the new count
    });
});

// -------------------------------------change-items-------------------
//select all the images in the footer
const footerImages=document.querySelectorAll('.footer .images img');

//select the image in the foodbar
const foodbarImage=document.querySelector('.foodbar img');

//Add a click event Listener to each footer image
footerImages.forEach(image => {
    image.addEventListener('click',()=>{
        //update the source of the fodbar image
        foodbarImage.src=image.src;
    });
});

// -------------------remove-animation------------------------------
const itemImages=document.querySelectorAll('.item-img');

itemImages.forEach(img =>{
    img.addEventListener('click',()=>{
        //Remove the animation class from all the images
        itemImages.forEach(img => img.classList.remove('animated'));

        //Add the animated class to the clicked image
        img.classList.add('animated')
    })
})

// -----------------toggle-light-dark-mode-----------------------
const themeSwitch=document.getElementById('theme-switch');
const body=document.body;

themeSwitch.addEventListener('change',function(){
    body.classList.toggle('dark-mode');
});