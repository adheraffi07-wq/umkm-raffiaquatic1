let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartItems =
document.getElementById("cart-items");

const grandTotal =
document.getElementById("grand-total");

function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        if (!item.qty) {
            item.qty = 1;
        }

        let subtotal =
        item.price * item.qty;

        total += subtotal;

        cartItems.innerHTML += `

        <tr>

            <td>

                <div class="d-flex align-items-center">

                    <img
                    src="${item.image}"
                    width="80"
                    class="me-3 rounded">

                    <div>

                        <strong>
                        ${item.name}
                        </strong>

                    </div>

                </div>

            </td>

            <td>
                Rp${item.price.toLocaleString()}
            </td>

            <td>

                <button
                class="btn btn-sm btn-danger"
                onclick="kurangQty(${index})">

                -

                </button>

                <span class="mx-2">

                ${item.qty}

                </span>

                <button
                class="btn btn-sm btn-success"
                onclick="tambahQty(${index})">

                +

                </button>

            </td>

            <td>

                Rp${subtotal.toLocaleString()}

            </td>

            <td>

                <button
                class="btn btn-danger btn-sm"
                onclick="hapusItem(${index})">

                Hapus

                </button>

            </td>

        </tr>

        `;
    });

    grandTotal.innerHTML =
    "Rp" + total.toLocaleString();

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function tambahQty(index){

    cart[index].qty++;

    renderCart();
}

function kurangQty(index){

    if(cart[index].qty > 1){

        cart[index].qty--;

        renderCart();
    }
}

function hapusItem(index){

    cart.splice(index,1);

    renderCart();
}

function kosongkanKeranjang(){

    localStorage.removeItem("cart");

    cart = [];

    renderCart();
}

renderCart();