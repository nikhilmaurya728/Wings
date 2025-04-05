
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "business-khata-360.firebaseapp.com",
    projectId: "business-khata-360",
    storageBucket: "business-khata-360.firebasestorage.app",
    messagingSenderId: "904600080282",
    appId: "1:904600080282:web:182fde2c1ffacd0f4db423",
    measurementId: "G-X9NRDYZY1C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsRef = collection(db, "Products");

async function addProduct() {
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const link1 = document.getElementById("link1").value;
    const link2 = document.getElementById("link2").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const minPrice = document.getElementById("minPrice").value;
    const bestPrice = document.getElementById("bestPrice").value;

    if (name && link1) {
        await setDoc(doc(productsRef, name), {
            name, image, link1, link2, maxPrice, minPrice, bestPrice
        });
        loadProducts();
    }
}

async function loadProducts() {
    const querySnapshot = await getDocs(productsRef);
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${data.image}" width="100"></br> ${data.name}</td>
            
            <td>${data.maxPrice}₹-${data.minPrice}₹</td>
            <td>${data.bestPrice}₹
                </br><button onclick="updateProduct('${doc.id}')">✎</button>
                <button onclick="deleteProduct('${doc.id}')">🗑️</button>
            </td>
            <td><a href="#" onclick="openInIframe('${data.link1}'); toggleSlide(); return false;">See Price🏃‍♀️</a></br></br><a href="#" onclick="openInIframe('${data.link2}'); toggleSlide(); return false;">See Price🏃‍♀️</a></td>
        `;
        productList.appendChild(row);
    });
}

async function deleteProduct(id) {
    await deleteDoc(doc(productsRef, id));
    loadProducts();
}

async function updateProduct(id) {
    const newPrice = prompt("Enter new Best Price:");
    if (newPrice) {
        await updateDoc(doc(productsRef, id), { bestPrice: newPrice });
        loadProducts();
    }
}

window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.updateProduct = updateProduct;
window.onload = loadProducts;