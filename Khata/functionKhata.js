function capitalizeText(text) {
  return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function speakInnerText(value) {
  let text = 'hello';
  let selectedId = document.getElementById(value);
  if (value == 'total-card-amount') {
    text = 'आपके कार्ड में कुल मिलाकर' + selectedId.textContent + 'rupees बचा';
  } else if (value == 'total-income') {
    text = 'आपने, एक्स्ट्रा इनकम भी, किया है जोकि है ' + selectedId.textContent + ' rupees';
  } else if (value == 'total-paid') {
    text = 'Total Paid Amount is ' + selectedId.textContent + ' rupees';
  }
  speakMessage(text);
}

function speakMessage(text) {
  window.speechSynthesis.cancel();
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN"; // भाषा सेट करो (English)
  speech.rate = 1; // स्पीड नॉर्मल रखो
  window.speechSynthesis.speak(speech);
}

function toggleSlide() {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const button = document.querySelector('.button');
  const btnClass = document.querySelector('.btnClass');

  if (left.style.width === '100%' || left.style.width === '') {
    left.style.width = '0%';
    right.style.width = '100%';
    btnClass.style.backgroundColor = '#8ec1ffb9';
    // right.style.display = 'block';
    button.style.left = '0%';
    button.textContent = '📋 New Transaction';
    speakMessage('न्यू Customer Add करें');
  } else {
    left.style.width = '100%';
    right.style.width = '0%';
    //right.style.display = 'none';
    button.style.left = '91%';
    btnClass.style.backgroundColor = '#fbd1a1b7';
    button.textContent = '🤵🏻 New Customer';
    speakMessage('न्यू Transaction Add करें');
  }
}

function checkInternetSpeed() {
  const statusDiv = document.getElementById('internet-status');

  // Try to fetch a small file (can be anything light and fast)
  const startTime = new Date().getTime();
  fetch("https://www.google.com/favicon.ico", { method: 'HEAD', mode: 'no-cors', cache: 'no-store' })
    .then(() => {
      const endTime = new Date().getTime();
      const duration = endTime - startTime;

      // If it takes more than 1500ms, assume slow
      if (duration > 1500) {
        statusDiv.textContent = "⚠️ Internet is slow!";
        statusDiv.style.display = "block";

      } else {
        statusDiv.style.display = "none";
      }
    })
    .catch(() => {
      statusDiv.textContent = "❌ No Internet Connection!";
      statusDiv.style.display = "block";

    });
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
  return `${day} ${month} ${year}  ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
}

function updateDateTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localTime = new Date(now - offset).toISOString().slice(0, 19).replace(" ", " ");
  document.getElementById('transaction-datetime').value = localTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);

setInterval(checkInternetSpeed, 5000);
checkInternetSpeed();
