
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCV1ShZVpRQFIpckrwRzTBLokZH10LgH8w",
  authDomain: "business-khata-360.firebaseapp.com",
  projectId: "business-khata-360",
  storageBucket: "business-khata-360.firebasestorage.app",
  messagingSenderId: "904600080282",
  appId: "1:904600080282:web:182fde2c1ffacd0f4db423",
  measurementId: "G-X9NRDYZY1C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add New Customer
window.addCustomer = async function () {
  const phone = document.getElementById('new-customer-phone').value;
  const name = document.getElementById('new-customer-name').value;
  if (phone && name) {
    const customerRef = doc(db, "customers1", phone);
    const customerSnap = await getDoc(customerRef);
    if (!customerSnap.exists()) {
      await setDoc(customerRef, { name: name, phone: phone, transactions: {}, totalCardAmount: 0, totalIncome: 0, totalpaid: 0 });
      playLocalSound(`musics/successfull.mp3`);
      alert("Customer Added!✅✅✅ ");
      loadCustomers();
    } else {
      playLocalSound(`musics/low paid.mp3`)
      //alert("Phone Number already ❌❌ exists!");
    }
  }
};


// Load customers into dropdown
async function loadCustomers() {
  const customerDropdown = document.getElementById('customer-dropdown');
  customerDropdown.innerHTML = '<option value="" disabled selected>Select My Customer</option>';

  const querySnapshot = await getDocs(collection(db, "customers1"));
  querySnapshot.forEach((doc) => {
    const customer = doc.data();
    const option = document.createElement('option');
    option.value = doc.id;
    option.textContent = `${customer.name} - ${customer.phone}`;
    customerDropdown.appendChild(option);
  });
}
// Load Transactions for Selected Customer
window.loadCustomerTransactions = async function () {
  const phone = document.getElementById('customer-dropdown').value;
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = '';

  if (phone) {
    const customerRef = doc(db, "customers1", phone);
    const customerSnap = await getDoc(customerRef);
    if (customerSnap.exists()) {

      const customerData = customerSnap.data();
      const transactions = customerSnap.data().transactions || {};


      const totalCardAmount = customerData.totalCardAmount;
      const totalIncome = customerData.totalIncome;
      const totalpaid = customerData.totalpaid;
      console.log("Total Card Amount:", totalCardAmount);
      console.log("Total totalIncome:", totalIncome);
      console.log("Total totalpaid:", totalpaid);

      document.getElementById('total-card-amount').textContent = totalCardAmount;
      document.getElementById('total-income').textContent = totalIncome;
      document.getElementById('total-paid').textContent = totalpaid;








      const sortedTransactions = Object.entries(transactions).sort(([a], [b]) => new Date(b) - new Date(a));

      for (const [dateTime, details] of sortedTransactions) {
        
        setTimeout(() => {
          if(details.cardAmount < 0){
            var temp = "❌ उधार धन राशि";
          } else  var temp = "✅ जमा धन राशि";
            const li = document.createElement('li');
            li.textContent = `${dateTime}: Buy ${details.buyAmount}, Paid ${details.paidAmount}, OwnerPay ${details.ownerPay}, ${temp}: ${details.cardAmount} ₹`;
          

          transactionList.appendChild(li);
        }, 0);
      }
    }
  }
};


// Add Transaction

window.addTransaction = async function () {

  const phone = document.getElementById('customer-dropdown').value;
  const dateTime = document.getElementById('transaction-datetime').value;
  const buyAmount = parseFloat(document.getElementById('buy-amount').value) || 0;
  const paidAmount = parseFloat(document.getElementById('paid-amount').value) || 0;
  const ownerPay = parseFloat(document.getElementById('owner-pay').value) || 0;
  const productName = document.getElementById('product-name').value;
  const cardAmount = paidAmount + ownerPay - buyAmount;




  if (phone && dateTime) {
    const customerRef = doc(db, "customers1", phone);
    const customerSnap = await getDoc(customerRef);
    if (customerSnap.exists()) {
      const customerData = customerSnap.data();
      const transactions = customerData.transactions || {};

      let totalCardAmount = customerData.totalCardAmount + cardAmount;
      let totalIncome = customerData.totalIncome + ownerPay;
      let totalpaid = customerData.totalpaid + paidAmount;


      transactions[dateTime] = { cardAmount, buyAmount, paidAmount, ownerPay, productName };

      await updateDoc(customerRef, { transactions, totalCardAmount, totalIncome, totalpaid });
      playLocalSound(`musics/successfull.mp3`);
      alert("Transaction  ✅  ✅  Added!  ✅  ✅ ");

      loadCustomerTransactions();
    } else {
      playLocalSound(`musics/low paid.mp3`)
     // alert("Customer ❌❌ not ❌❌ found!");
    }
  } else {
    playLocalSound(`musics/low paid.mp3`)
    //alert("Customer ❌❌ not ❌❌ Selected!");
  }
};
function playLocalSound(filename) {
  const sound = new Audio(filename);
  sound.play().catch(error => console.error('Sound play failed:', error));
}

const now = new Date();
const offset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
const localTime = new Date(now - offset).toISOString().slice(0, 16);
document.getElementById('transaction-datetime').value = localTime;

//document.getElementById('owner-pay').value = 0;



// Show All customers name
let allCustomers = [];
async function loadAllCustomers() {
  const querySnapshot = await getDocs(collection(db, "customers1"));
  allCustomers = [];
  querySnapshot.forEach((doc) => {
    const customer = doc.data();
    customer.id = doc.id;  // Store doc ID
    allCustomers.push(customer);
  });
  displayCustomers(allCustomers);
}
function displayCustomers(customerList) {
  const customerListElement = document.getElementById('customer-list');
  const customerDropdown = document.getElementById('customer-dropdown');

  customerListElement.innerHTML = '';

  customerList.forEach(customer => {
    // Create list item
    const li = document.createElement('li');
    li.textContent = `${customer.name} - ${customer.phone} | Card Balance: ${customer.totalCardAmount} | Total Earning: ${customer.totalIncome} | Total Paid: ${customer.totalpaid}`;

    // Set customer ID in dataset
    li.dataset.customerId = customer.id;

    // Add click event listener
    li.addEventListener('click', () => {
      // Change dropdown selection to clicked customer
      customerDropdown.value = customer.id;
      loadCustomerTransactions();
    });

    customerListElement.appendChild(li);
  });
}


window.sortCustomers = function (criteria) {
  const sortedCustomers = [...allCustomers].sort((a, b) => b[criteria] - a[criteria]);
  displayCustomers(sortedCustomers);
}
window.onload = loadAllCustomers;






// Initial Load
loadCustomers();