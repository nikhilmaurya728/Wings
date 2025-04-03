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

window.addCustomer = async function () {
  const phone = document.getElementById('new-customer-phone').value;
  const name = document.getElementById('new-customer-name').value;
  if (phone && name) {
    const customerRef = doc(db, "customers1", phone);
    const customerSnap = await getDoc(customerRef);
    if (!customerSnap.exists()) {
      await setDoc(customerRef, { name: name, phone: phone, transactions: {}, totalCardAmount: 0, totalIncome: 0, totalpaid: 0 });
      speakMessage("ग्राहक सफलतापूर्वक जोड़ा गया, फिर से सुनो, ग्राहक सफलतापूर्वक जोड़ा गया");
      alert("Customer Added!✅✅✅ ");
      loadCustomers();
    } else {
      speakMessage("ये ग्राहक पहले से मौजूद है, फिर से सुनो,ग्राहक पहले से मौजूद हैं-");
      alert("Phone Number already ❌❌ exists!");
    }
  }
};

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

function ownerPayMessage(ownerPay) {
  return ownerPay !== 0 ? ` Payed by Owner is ${ownerPay}₹💲, ` : ' ';
}

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
      var totalCardAmount = customerData.totalCardAmount;
      var totalIncome = customerData.totalIncome;
      var totalpaid = customerData.totalpaid;

      document.getElementById('headerName').textContent = customerData.name; //// add address
      
      console.log("Total Card Amount:", totalCardAmount);
      console.log("Total totalIncome:", totalIncome);
      console.log("Total totalpaid:", totalpaid);

      document.getElementById('total-card-amount').textContent = totalCardAmount;
      document.getElementById('total-income').textContent = totalIncome;
      document.getElementById('total-paid').textContent = totalpaid;
      const sortedTransactions = Object.entries(transactions).sort(([a], [b]) => new Date(b) - new Date(a));
      for (const [dateTime, details] of sortedTransactions) {
        setTimeout(() => {

          if (details.cardAmount < 0) {
            var temp = "Now उधार धन राशि 🔻";
          } else var temp = "Now जमा धन राशि 💹";

          let formatedDateTime = formatDateTime(dateTime);
          let ownerPay = ownerPayMessage(details.ownerPay);

          const li = document.createElement('li');
          li.textContent = `${formatedDateTime}: Total Cost ${details.buyAmount}₹💸, Paid Amount ${details.paidAmount}₹💰, ${ownerPay} ${temp}: ${details.cardAmount}₹ `;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = `Delete`;
          deleteButton.addEventListener('click', async () => {
            if (confirm("Transaction ✅✅ Added! ✅✅")) {
              speakMessage('Transaction लिस्ट से, लेन-देन  मिटाया गया');
              try {
                li.remove();
                delete transactions[dateTime];
                totalCardAmount = totalCardAmount - (details.paidAmount + details.ownerPay - details.buyAmount);
                totalIncome = totalIncome - details.ownerPay;
                totalpaid = totalpaid - details.paidAmount;
                await updateDoc(customerRef, { transactions, totalCardAmount, totalIncome, totalpaid });
                //re-render the list.
                loadCustomerTransactions();
              } catch (error) {
                console.error("Error deleting transaction:", error);
              }
            } else {
              console.error("Cancel deleting transaction");
              speakMessage('लेन-देन, मिटाया नहीं जा सका,Try once again');
            }
          });
          li.appendChild(deleteButton);
          transactionList.appendChild(li);
        }, 0);
      }
    }
  }
};
window.addTransaction = async function () {
  const saveTransactionBTN = document.getElementById('saveTransactionBTN')
  saveTransactionBTN.disabled = true;
  saveTransactionBTN.style.opacity = "0.5";
  console.log("Transaction Added ✅");//
  const phone = document.getElementById('customer-dropdown').value;
  const dateTime = document.getElementById('transaction-datetime').value;
  const buyAmount = parseFloat(document.getElementById('buy-amount').value) || 0;
  const paidAmount = parseFloat(document.getElementById('paid-amount').value) || 0;
  const ownerPay = parseFloat(document.getElementById('owner-pay').value) || 0;
  const productName = document.getElementById('product-name').value;
  const cardAmount = paidAmount + ownerPay - buyAmount;
  document.getElementById('buy-amount').value = "";
  document.getElementById('paid-amount').value = "";
  document.getElementById('owner-pay').value = "";
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
      if (buyAmount > ownerPay + paidAmount) {
        speakMessage(`"लेन-देन सफलतापूर्वक लिखा गया, Please, ${buyAmount - ownerPay - paidAmount} रुपया का उधार ना करें"`);
      } else
        speakMessage(`'Thank you, लेन-देन सफलतापूर्वक लिखा गया, आपके कार्ड मे ${ownerPay + paidAmount - buyAmount} रुपया जोड़ा गया'`);
      alert("Transaction  ✅  ✅  Added!  ✅  ✅ ");
      loadCustomerTransactions();
      setTimeout(() => {
        saveTransactionBTN.disabled = false;
        saveTransactionBTN.style.opacity = "1";
      }, 2000);
    } else {
      speakMessage('Customer not found!, Please, listen, Customer not found!'); alert("Customer ❌❌ not ❌❌ found!");
    }
  } else {
    speakMessage('Customer not found!,Please, listen, Customer not found!');
    alert("Customer ❌❌ not ❌❌ Selected!");
  }
};
function updateDateTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localTime = new Date(now - offset).toISOString().slice(0, 19).replace(" ", " ");
  document.getElementById('transaction-datetime').value = localTime;



  document.getElementById('datetime').innerText = formatDateTime(localTime);
}
function formatDateTime(isoString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let date = new Date(isoString);

  let day = String(date.getDate()).padStart(2, '0'); // 01 से 31 तक
  let month = months[date.getMonth()]; // महीना (Jan, Feb...)
  let year = date.getFullYear(); // साल (2025)

  let hours = date.getHours();
  let minutes = String(date.getMinutes()).padStart(2, '0'); // 00 से 59 तक
  let ampm = hours >= 12 ? 'PM' : 'AM'; // AM या PM
  hours = hours % 12 || 12; // 12-घंटे का फॉर्मेट
  //document.getElementById("time").innerHTML = `${day} ${month} ${year}  ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  return `${day} ${month} ${year}  ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);

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
let previousSelected = document.getElementById('myProductList');//
function displayCustomers(customerList) {
  const customerListElement = document.getElementById('customer-list');
  const customerDropdown = document.getElementById('customer-dropdown');
  customerListElement.innerHTML = '';
  customerList.forEach(customer => {
    const li = document.createElement('li');
    li.textContent = ` ${customer.name} - ${customer.phone} | Card Balance: ${customer.totalCardAmount} | Total Earning: ${customer.totalIncome} | Total Paid: ${customer.totalpaid}`;
    li.dataset.customerId = customer.id;
    li.addEventListener('click', () => {
      previousSelected.style.color = '#00af00';
      previousSelected = li;
      li.style.color = '#fa0000';
      speakMessage(`"${customer.name} को सेलेक्ट किया गया"`);
      customerDropdown.value = customer.id;
      loadCustomerTransactions();
      document.getElementById('ScrollIntoView').scrollIntoView({ behavior: "smooth", block: "start" });
    });
    customerListElement.appendChild(li);
  });
}
window.sortCustomers = function (criteria) {
  const sortedCustomers = [...allCustomers].sort((a, b) => b[criteria] - a[criteria]);
  displayCustomers(sortedCustomers);
}
window.onload = loadAllCustomers;

loadCustomers();