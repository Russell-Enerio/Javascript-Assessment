const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img")

//buttons

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

//Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

//BTN Listeners

nextBtn.addEventListener("click", ()=>{
    if(counter >= carouselImages.length -1 ) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out"
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out"
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});



// PRODUCTS

let products = 
    // {
    //     product: 
        [   
            {
                "id": 0,
                "name": "PUBG",
                "description": "First Person Shooter",
                "price": "200",
                "image": "images/pubgLogo.png"
            },
            {
                "id": 1,
                "name": "Fifa 22",
                "description": "Football",
                "price": "220",
                "image": "images/fifa22Logo.jpg"
            },
            {
                "id": 2,
                "name": "Dota 2",
                "description": "Mass Online Battle Arena",
                "price": "120",
                "image": "images/dota2Logo.jpg"
            },
            {
                "id": 3,
                "name": "Valorant",
                "description": "First Person Shooter",
                "price": "110",
                "image": "images/valorantLogo.png"
            },
            {
                "id": 4,
                "name": "Call of Duty Warzone",
                "description": "First Person Shooter",
                "price": "60",
                "image": "images/warzoneLogo.png"
            }
        ]
    // }


let numberOfProd = products.length
let productList = document.querySelector("#product-container")
let modalBody = document.querySelector("#modal-body")

for (let i = 0; i < numberOfProd; i++) {
    
    console.log(products[i].name)
    let prodName = products[i].name
    let prodPrice = products[i].price
    let prodDescription = products[i].description
    let prodImage = products[i].image
    let prodId = products[i].id
    productList.innerHTML +=   
        `
        
        <div class="product">
            
            <img src="${prodImage}" alt="Image" id="product-image">   
            <h4 class="productName ${prodName}" id="productName">${prodName}</h4>
            <h4 class="productPrice">$${prodPrice}</h5>
            <h4 class="productDescription">${prodDescription}</h4>
            <button class="addToCart" onclick="addToCart(${prodId})" id="toCart">Add to Cart</button>
            
        </div>
       
        `   
         
// To iterate for loop and create new div depending on the length of the array, use " += "

}



// Add to Cart Functionality and Modal




// MODAL

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let orders = [];
let numberOfOrders =  orders.length;

function addToCart(id){
    const item = products.find((products) => products.id === id)   
    orders.push({...item})
    console.log(orders)
    
    updateCart();

}

function updateCart(){
    renderCartItems();
}


function renderCartItems(){
    modalBody.innerHTML = ""; //prevents adding of previously added items
    orders.forEach((item) => {
        modalBody.innerHTML += 

            `
            <div id="modal-body">
            <ul>
                <li>
                    <div class="cart-item">
                        <img src="${item.image}" alt="Valo">
                        <h3 class="cart-item-name">${item.name}</h3>
                        <h3 class="cart-item-price">${item.price}</h3>
                    </div>
                </li>
            </ul>      
            </div>  
            `
    })
    
}







    


