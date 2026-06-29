function addToCart(
name,
price,
image
){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const existing =
cart.find(
item => item.name === name
);

if(existing){

    existing.qty++;

}else{

    cart.push({

        name:name,
        price:price,
        image:image,
        qty:1

    });

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(
"Produk berhasil ditambahkan"
);

}