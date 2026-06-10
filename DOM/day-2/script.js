// console.log(document.childNodes)

// let body = document.body;

// console.log(body.childNodes);
// console.log(body.children);

//? NodeList : ye sabhi cheez ko node me count karta hai 
// sabhi cheez jaise --> blank space , white spaces , line break (aur ye teno chezo ko text manta hai )

//? HtmlCollection : points only Elements of html 


//!EX

// <main>
//   <h1>Hello, World!</h1>
// </main>;

// NodeList(childnodes) : text , h1 , text
// Htmllist(children) : h1  

// let h1 = document.querySelector("h1");

// h1.textContent = "Hello, JavaScript!!!";

// h1.innerText = "Hello, <bold>JavaScript</bold>";

// h1.innerHTML = "Hello, <i>JavaScript</i>";

// body.style.backgroundColor = "limegreen";
// h1.style.color = "black";
// h1.style.fontSize = "50px";


//! classList : ye hume element ke class ko access karne me help karta hai

//! classList ke andar kai sare methods hote hai jaise add , remove , contains , replace etc

// const isClass = h1.classList.contains("neel");
// console.log(isClass);

//! i have to chnage or replace my class

// h1.classList.replace("neel", "neel-1");

// h1.classList.toggle("neel-2"); //? toggle method : agar class exist karti hai to remove kar dega aur agar class exist nahi karti hai to add kar dega

// h1.classList.add("neel-3");
//? agar class exist karti hai to add method kuch nahi karega aur agar class exist nahi karti hai to add method us class ko add kar dega

// h1.classList.remove("neel-3");
//? agar class exist karti hai to remove method us class ko remove kar dega aur agar class exist nahi karti hai to remove method kuch nahi karega

// Recap

//! NodeList : ye sabhi cheez ko node me count karta hai
//! HtmlCollection : points only Elements of html 
//! classList : ye hume element ke class ko access karne me help karta hai
//! classList ke andar kai sare methods hote hai jaise add , remove , contains , replace etc

//? DOM me hume kai sare methods milte hai jaise getElementById , getElementsByClassName , getElementsByTagName , querySelector , querySelectorAll etc

//! getElementById : ye method hume element ke id ke basis par element ko access karne me help karta hai

//! getElementsByClassName : ye method hume element ke class ke basis par element ko access karne me help karta hai

//! getElementsByTagName : ye method hume element ke tag ke basis par element ko access karne me help karta hai

//! querySelector : ye method hume element ke css selector ke basis par element ko access karne me help karta hai

//! querySelectorAll : ye method hume element ke css selector ke basis par sabhi element ko access karne me help karta hai

//! classList.add : ye method hume element ke class me naya class add karne me help karta hai

//! classList.remove : ye method hume element ke class me se kisi class ko remove karne me help karta hai

//! classList.contains : ye method hume element ke class me kisi class ke exist karne ya na karne ke baare me batata hai

//! classList.replace : ye method hume element ke class me se kisi class ko replace karne me help karta hai

//? DOM me hume kai sare properties milte hai jaise innerText , innerHTML , textContent , style etc

//! innerText : ye property hume element ke andar ke text ko access karne me help karta hai aur ye text ke andar ke html tags ko ignore karta hai

//! innerHTML : ye property hume element ke andar ke text ko access karne me help karta hai aur ye text ke andar ke html tags ko consider karta hai

//! textContent : ye property hume element ke andar ke text ko access karne me help karta hai aur ye text ke andar ke html tags ko ignore karta hai

//! style : ye property hume element ke style ko access karne me help karta hai aur ye property ke andar kai sare properties hote hai jaise color , fontSize , backgroundColor etc

let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

let isOn = true;

btn.addEventListener("click", function () {
    if (isOn) {
        bulb.style.backgroundColor = "yellow";
        btn.innerText = "Off";
        isOn = false;
    } else {
        bulb.style.backgroundColor = "black";
        btn.innerText = "On";
        isOn = true;
    }
});


