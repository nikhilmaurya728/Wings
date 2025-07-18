
let lastModeName = null;
let modeStack = ["fruit", "vegetable", "animalM", "cat"];
const allModeData = { fruit, vegetable, animalM, cat };
let newText = "नमस्ते! मैं एक AI Teacher हू, मै आपके HomeWork करने में मदत कर सकती हू ";






const wordMap = {
  1: ["one", "ek"],
  2: ["two", "do"],
  3: ["three", "teen"],
  4: ["four", "chaar"],
  5: ["five", "paanch"],
  6: ["six", "chhah", "chha", "chheh", "chhe", "cheh", "che"],
  7: ["seven", "sat", "saat"],
  8: ["eight", "aath"],
  9: ["nine", "nau"],
  10: ["ten", "dus"],

  11: ["eleven", "gyarah"],
  12: ["twelve", "baarah", "bara"],
  13: ["thirteen", "terah", "tera"],
  14: ["fourteen", "chaudah"],
  15: ["fifteen", "pandrah"],
  16: ["sixteen", "solah"],
  17: ["seventeen", "satrah"],
  18: ["eighteen", "atharah"],
  19: ["nineteen", "unnis"],
  20: ["twenty", "bees"],

  21: ["twenty one", "ikkees"],
  22: ["twenty two", "baees"],
  23: ["twenty three", "teyis"],
  24: ["twenty four", "chaubees"],
  25: ["twenty five", "pachis"],
  26: ["twenty six", "chhabbees"],
  27: ["twenty seven", "sattaees"],
  28: ["twenty eight", "athais"],
  29: ["twenty nine", "untis"],
  30: ["thirty", "tees"],

  31: ["thirty one", "ikattis"],
  32: ["thirty two", "battis"],
  33: ["thirty three", "taitis"],
  34: ["thirty four", "chauntis"],
  35: ["thirty five", "paintis"],
  36: ["thirty six", "chhattis"],
  37: ["thirty seven", "saintees"],
  38: ["thirty eight", "arthis"],
  39: ["thirty nine", "untalis"],
  40: ["forty", "chalis"],

  41: ["forty one", "iktalis"],
  42: ["forty two", "bayalis"],
  43: ["forty three", "taitalis"],
  44: ["forty four", "chaulis"],
  45: ["forty five", "paintalis"],
  46: ["forty six", "chhayalis"],
  47: ["forty seven", "saitalis"],
  48: ["forty eight", "arthalis"],
  49: ["forty nine", "unchaas"],
  50: ["fifty", "pachaas"],

  51: ["fifty one", "ikyaavan"],
  52: ["fifty two", "bawan"],
  53: ["fifty three", "tirpan"],
  54: ["fifty four", "chauvan"],
  55: ["fifty five", "pachpan"],
  56: ["fifty six", "chhappan"],
  57: ["fifty seven", "sattavan"],
  58: ["fifty eight", "aththavan"],
  59: ["fifty nine", "unsath"],
  60: ["sixty", "saath"],

  61: ["sixty one", "iksaath"],
  62: ["sixty two", "basaath"],
  63: ["sixty three", "tresaath"],
  64: ["sixty four", "chausath"],
  65: ["sixty five", "painsath"],
  66: ["sixty six", "chhiyasath"],
  67: ["sixty seven", "sadsath"],
  68: ["sixty eight", "arsath"],
  69: ["sixty nine", "unsattar"],
  70: ["seventy", "sattar"],

  71: ["seventy one", "ikahattar"],
  72: ["seventy two", "bahattar"],
  73: ["seventy three", "tihattar"],
  74: ["seventy four", "chauhattar"],
  75: ["seventy five", "pachattar"],
  76: ["seventy six", "chhihattar"],
  77: ["seventy seven", "sattattar"],
  78: ["seventy eight", "athhattar"],
  79: ["seventy nine", "unnasi"],
  80: ["eighty", "assi"],

  81: ["eighty one", "ikyaasi"],
  82: ["eighty two", "bayaasi"],
  83: ["eighty three", "tirasi"],
  84: ["eighty four", "chauraasi"],
  85: ["eighty five", "pachasi"],
  86: ["eighty six", "chhiyaasi"],
  87: ["eighty seven", "sattasi"],
  88: ["eighty eight", "athasi"],
  89: ["eighty nine", "navasi"],
  90: ["ninety", "nabbe"],

  91: ["ninety one", "ikyanabe"],
  92: ["ninety two", "bayanabe"],
  93: ["ninety three", "tiryanabe"],
  94: ["ninety four", "chauranabe"],
  95: ["ninety five", "pachyanabe"],
  96: ["ninety six", "chhiyanabe"],
  97: ["ninety seven", "sattayanabe"],
  98: ["ninety eight", "athyanabe"],
  99: ["ninety nine", "ninyanabe"],
  100: ["hundred", "sau"]
};


function getNumberFromWords(message) {
  message = message.toLowerCase();
  for (let num in wordMap) {
    if (wordMap[num].some(word => message.includes(word))) {
      return parseInt(num);
    }
  }
  return null;
}



let recognition;
let isRecognitionRunning = false;

function startListening() {
  document.getElementById('stopLis').style.display = 'block';
  document.getElementById('startLis').style.display = 'none';

  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN";
  recognition.continuous = true; // ✅ यह हमेशा सुनते रहेगा
  recognition.interimResults = false;

  recognition.start();
  isRecognitionRunning = true;

  recognition.onresult = (e) => {
    const lastResultIndex = e.results.length - 1;
    const msg = e.results[lastResultIndex][0].transcript.toLowerCase();
    document.getElementById("userQuestion").value = msg;
    document.getElementById("output").innerText = `🎧 You said: "${msg}"`;
    handleVoice(msg);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    stopListening(); // Optional: Error आने पर बंद करो
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
    if (isRecognitionRunning) {
      // 🔁 Restart if user hasn't clicked Stop
      recognition.start();
      console.log("Restarting recognition...");
    }
  };
}

function stopListening() {
  document.getElementById('stopLis').style.display = 'none';
  document.getElementById('startLis').style.display = 'block';

  if (recognition && isRecognitionRunning) {
    isRecognitionRunning = false;
    recognition.stop();
    console.log("Stopped listening.");
  }
}














function handleTypedInput() {
  const userMessage = document.getElementById("userQuestion").value.trim();
  if (userMessage.length > 0) {
    handleVoice(userMessage.toLowerCase());
    document.getElementById("userQuestion").value = "";
  } else {

    newText = "Please type something.";
     
  }
}


function handleVoice(message) {
  let count = 5;

  const digitMatch = message.match(/\d+/);
  if (digitMatch) {
    count = parseInt(digitMatch[0]);
  } else {
    const wordNumber = getNumberFromWords(message);
    if (wordNumber) count = wordNumber;
  }

  for (let modeName of modeStack) {
    const modeArray = allModeData[modeName];
    if (!modeArray) continue;

    for (let item of modeArray) {
      const match = item.keywords.every(group => group.some(k => message.includes(k)));
      if (match) {
        reorderModes(modeName);
        item.action(count);
        return;
      }
    }
  }


  const genericWords = ["name", "names", "list", "give", "show", "print"];
  const hasGeneric = genericWords.some(word => message.includes(word));

  if (hasGeneric && lastModeName && allModeData[lastModeName]) {
    const modeArray = allModeData[lastModeName];
    for (let item of modeArray) {
      if (typeof item.action === "function") {
        reorderModes(lastModeName);
        item.action(count);
        return;
      }
    }
  }


  answerShow(" 🤷‍♂️ माफ करना, मुझे इसके बारे में पता नहीं है।");


}


function reorderModes(modeName) {
  answerHide()

  modeStack = modeStack.filter(name => name !== modeName);
  modeStack.unshift(modeName);
  updateModeListDisplay();
}

function updateModeListDisplay() {
  const list = document.getElementById("modeList");
  list.innerHTML = "";
  modeStack.forEach(name => {
    const chip = document.createElement("div");
    chip.innerText = name.toUpperCase();
    chip.className = "modeChip";
    list.appendChild(chip);
  });
}

function answerHide() {
  document.getElementById("output1").innerHTML = "";
  document.getElementById("output2").innerHTML = "";
  document.getElementById("output3").innerHTML = "";
  document.getElementById("output4").innerHTML = "";
  document.getElementById("output5").innerHTML = "";
}


function answerShow(text) {
  document.getElementById("output1").innerHTML = `<div style="font-size:18px">💬 ${text}</div>`;
  //speak(text);

  newText = text;
   
}


function printTable(title, arr, count = 10) {
  const limited = [arr[0], ...arr.slice(1, count + 1)];
  let rows = "";

  for (let i = 0; i < limited.length; i++) {
    const cols = limited[i];
    if (Array.isArray(cols)) {
      const row = `<tr>${cols.map(col => `<td>${col}</td>`).join('')}</tr>`;
      rows += row;
    }
  }

  const tableHTML = `
    <h3>${title} List (${count})</h3>
    <table border="1" cellpadding="8" style="margin:auto; border-collapse: collapse;">
      ${rows}
    </table>`;

  const box = document.createElement("div");
  box.innerHTML = `<div style="overflow-x: auto;">${tableHTML}</div>`;

  box.style.marginBottom = "15px";
  box.style.border = "1px solid #ccc";
  box.style.padding = "10px";
  box.style.borderRadius = "10px";
  box.style.background = "#f9f9f9";

  document.getElementById("output2").innerHTML = "";
  document.getElementById("output2").appendChild(box);

  const speakList = arr.slice(1, count + 1).map(row => row[1]).join(", ");
  //speak(`${title} are: ${speakList}`);
  newText = `${title} are: ${speakList}`;
   
}

function imageShow(title, imgUrl) {
  document.getElementById("output3").innerHTML = `
        <h3>${title}</h3>
        <img src="${imgUrl}" alt="${title}" style="max-width:90%; border-radius:10px; box-shadow:0 0 10px #aaa;" />
      `;
  //speak(title);

   newText = title;
   
}



// yt video
function showYoutubeVideo(description, videoId) {
  fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('output4');
      container.innerHTML = `
        <div class="video-containerYT">
          <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
            allowfullscreen 
            frameborder="0"
            style=" border-radius: 10px; box-shadow: 0 0 10px #aaa;">
          </iframe>
          <p style="font-size: 1.2rem; font-weight: bold; margin-top: 10px;"><span style="font-size: 0.9rem; color: #555;">👤 ${data.author_name} -</span> 🎬 ${data.title}</p>
          <p style="font-size: 1rem; color: #333;">📜 ${description}</p>
        
          
        </div>
      `;
      //speak(description); // बोलेगा custom message
      newText = description;
   
    })
    .catch(() => {
      document.getElementById("output").innerHTML = `
        <p style="color:red;">❌ Sorry, video not found.</p>
      `;
      //speak("Sorry, video not found");
       newText = "Sorry, video not found";
   
    });
}




// Text to Speech 1
 const synth = window.speechSynthesis;
  let availableVoices = [];

  // ✅ ये जरूर डालो वरना voice नहीं मिलेंगी
  window.speechSynthesis.onvoiceschanged = () => {
    availableVoices = synth.getVoices();
    console.log("Loaded voices:", availableVoices);
  };

  // ✅ Normal/default voice function
  function speak() {
    let text = newText; // make sure newText is defined globally!
    const msg = new SpeechSynthesisUtterance(text);
    synth.speak(msg);
  }

  // ✅ Female Hindi voice function
  function speakHi() {
    let text = newText;
    let plainText = text.replace(/<[^>]+>/g, '');

    // don't read emoji
    plainText = plainText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2600-\u26FF])/g, '');

    const msg = new SpeechSynthesisUtterance(plainText);

    // ✅ Female Hindi voice खोजो
    const femaleHindi = availableVoices.find(
      (v) => v.lang === "hi-IN" && v.name.toLowerCase().includes("female")
    );

    if (femaleHindi) {
      msg.voice = femaleHindi;
    } else {
      const anyHindi = availableVoices.find(v => v.lang === "hi-IN");
      if (anyHindi) msg.voice = anyHindi;
    }

    synth.speak(msg); // 🔥 Corrected here
  }
  
// Text to Speech 2
/*

const synth = window.speechSynthesis;
let availableVoices = [];
document.getElementById("output5").textContent = "checkPoint";
let a = 0;

function getVoices() {
 a++;
  document.getElementById("output5").textContent = a +"checkPoint";
 
  // Try getting voices multiple times if empty
  availableVoices = synth.getVoices();
  if (availableVoices.length === 0) {
    setTimeout(getVoices, 100); // Retry after 100ms
  }
}

getVoices(); // Call on load


function speak() {
  let text = newText;
  let plainText = text.replace(/<[^>]+>/g, '');

  // don't read emoji
  plainText = plainText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2600-\u26FF])/g, '');


  const voices = availableVoices;

  const femaleVoice = voices.find(v =>
    (v.lang === "hi-IN" || v.lang.includes("hi")) &&
    (v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("neural") || v.name.toLowerCase().includes("google"))
  ) || voices.find(v => v.lang === "hi-IN") || voices[0];

  if (!femaleVoice) {
    console.warn("No suitable voice found. Using default.");
    return;
  }

  const msg = new SpeechSynthesisUtterance(plainText);
  msg.voice = femaleVoice;
  msg.lang = femaleVoice.lang || 'hi-IN';

  window.speechSynthesis.speak(msg);
}*/


reorderModes("fruit");