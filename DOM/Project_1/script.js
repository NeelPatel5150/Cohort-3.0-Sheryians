const createbtn = document.getElementById("create");
const formdiv = document.querySelector(".form");
const closebtn = document.getElementById("close");
const form = document.querySelector("form");
const productsdiv = document.querySelector(".products");

const productarray = [];
let updateindex = null;

let ui = () => {
  productsdiv.innerHTML = "";
    productarray.forEach((product, index) => {
    productsdiv.innerHTML += `
                <div class="product-card" data-index="${index}">
        <div class="img">
            <img src="${product.image}" alt="${product.productname}">
        </div>
        <div class="text">
            <h3>${product.productname}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
        </div>

        <div class="btns">
            <button type="button" id="update-btn" onclick="updateProduct(${index})">Updates</button>
            <button type="button" id="delete-btn" onclick="deleteProduct(${index})">Delete</button>
        </div>
    </div>
        `;
  });
};

createbtn.addEventListener("click", function () {
  formdiv.style.display = "flex";
});

closebtn.addEventListener("click", function () {
  formdiv.style.display = "none";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const productname = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();
   

    if(productname === "" || description === "" || price === "" || image === "") {
        alert("Please fill in all the fields");
        return;
    }

    let obj = {
        productname: productname,
        description: description,
        price: price,
        image: image
    };

    if(updateindex !== null)
    {
        productarray[updateindex] = obj;
        updateindex = null;
    }
    else{
        productarray.push(obj);
    }
    

    ui();

    form.reset();

    formdiv.style.display = "none";
}
);

const updateProduct = (index) => {
    formdiv.style.display = "flex";
    const product = productarray[index];
    document.getElementById("name").value = product.productname;
    document.getElementById("description").value = product.description;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;

    updateindex = index;
    // form.addEventListener("submit", function(event) {        event.preventDefault();
    //     product.productname = document.getElementById("name").value.trim();
    //     product.description = document.getElementById("description").value.trim();
    //     product.price = document.getElementById("price").value.trim();
    //     product.image = document.getElementById("image").value.trim();
    //     ui();
    //     form.reset();
    //     formdiv.style.display = "none";
    // });
};

const deleteProduct = (index) => {
    productarray.splice(index, 1);
    ui();
};