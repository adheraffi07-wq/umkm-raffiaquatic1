// produk js
const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

function filterProducts() {

    const keyword =
    searchInput.value.toLowerCase();

    const category =
    categoryFilter.value;

    const products =
    document.querySelectorAll(".product-item");

    products.forEach(product => {

        const name =
        product.querySelector(".product-name")
        .innerText
        .toLowerCase();

        const productCategory =
        product.dataset.category;

        const matchKeyword =
        name.includes(keyword);

        const matchCategory =
        category === "all" ||
        productCategory === category;

        if (
            matchKeyword &&
            matchCategory
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}

searchInput.addEventListener(
"keyup",
filterProducts
);

categoryFilter.addEventListener(
"change",
filterProducts
);