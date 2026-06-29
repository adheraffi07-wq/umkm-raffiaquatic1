let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const summary =
document.getElementById(
"order-summary"
);

const totalEl =
document.getElementById(
"order-total"
);

let total = 0;

cart.forEach(item => {

    total += item.price;

    summary.innerHTML += `

    <div class="mb-3">

        <strong>
            ${item.name}
        </strong>

        <br>

        Rp${item.price.toLocaleString()}

    </div>

    `;

});

totalEl.innerHTML =
"Rp" + total.toLocaleString();

function kirimWhatsApp() {

    const nama =
    document.getElementById("nama").value;

    const wa =
    document.getElementById("wa").value;

    const alamat =
    document.getElementById("alamat").value;

    let pesan =
`Halo Raffi Aquatic

Saya ingin memesan:

`;

    cart.forEach(item => {

        pesan +=
`${item.name}
Rp${item.price}

`;

    });

    pesan +=

`Nama : ${nama}

No WA : ${wa}

Alamat :
${alamat}

Total :
Rp${total.toLocaleString()}
`;

    const nomorToko =
    "6285783248648";

    window.open(

    `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`,

    "_blank"

    );

}