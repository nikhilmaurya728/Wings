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


      var totalCardAmount = customerData.totalCardAmount;
      var totalIncome = customerData.totalIncome;
      var totalpaid = customerData.totalpaid;
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
            var temp = "❌ उधार धन राशि";
          } else var temp = "✅ जमा धन राशि";

          const li = document.createElement('li');
          li.textContent = `${dateTime}: Buy ${details.buyAmount}, Paid ${details.paidAmount}, OwnerPay ${details.ownerPay}, ${temp}: ${details.cardAmount} ₹`;


          const deleteButton = document.createElement('button');
          deleteButton.textContent = `Delete ${dateTime}`;
          deleteButton.addEventListener('click', async () => {
            if (confirm("Transaction ✅✅ Added! ✅✅")) {
              speakMessage('Transaction लिस्ट से, लेन-देन  मिटाया गया');
              try {
                // Remove the list item from the DOM
                li.remove();

                // Remove the transaction from the 'transactions' object
                delete transactions[dateTime];

                totalCardAmount = totalCardAmount - (details.paidAmount + details.ownerPay - details.buyAmount);
                totalIncome = totalIncome - details.ownerPay;
                totalpaid = totalpaid - details.paidAmount;

                // Update the database
                await updateDoc(customerRef, { transactions, totalCardAmount, totalIncome, totalpaid });
                //re-render the list.
                loadCustomerTransactions();

              } catch (error) {
                console.error("Error deleting transaction:", error);
                // Handle the error appropriately (e.g., show an error message)
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



// Example: Call function with different messages
//speakMessage("Transaction Successful");
//speakMessage("Customer successfully added");
//speakMessage("Customer selected");
//speakMessage("Delete customer");
//speakMessage("Transaction deleted");
//speakMessage("Delete transaction canceled");


// Add Transaction

window.addTransaction = async function () {

  const saveTransactionBTN = document.getElementById('saveTransactionBTN')

  saveTransactionBTN.disabled = true; // बटन को डिसेबल कर दो
  saveTransactionBTN.style.opacity = "0.5"; // यूजर को लगे कि बटन इनएक्टिव है

  // यहाँ तुम्हारा async कोड चलेगा
  console.log("Transaction Added ✅");


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
      if(buyAmount < ownerPay+paidAmount){
        speakMessage(`'Thank you, लेन-देन सफलतापूर्वक लिखा गया, आपके कार्ड मे ${ownerPay + paidAmount - buyAmount} रुपया जोड़ा गया'`);
      }else  speakMessage(`"लेन-देन सफलतापूर्वक लिखा गया, Please, ${buyAmount-ownerPay-paidAmount} रुपया का उधार ना करें"`);
      
      alert("Transaction  ✅  ✅  Added!  ✅  ✅ ");
      loadCustomerTransactions();


      setTimeout(() => {
        saveTransactionBTN.disabled = false;
        saveTransactionBTN.style.opacity = "1"; // बटन फिर से एक्टिव दिखे
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
}

// Call the function initially to set the value on load
updateDateTime();

// Update every second (1000 ms)
setInterval(updateDateTime, 1000);


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