
    const synth = window.speechSynthesis;
    let modeStack = [];
    let lastMode = null; // 🔁 to remember recent mode

    // Master Arrays
    const Fruits = [
      ["𓆩⚝𓆪", "Fruit Name", "Meaning", "Pronunciation"],
      ["1", "Mango", "आम", "मैंगो"],
      ["2", "Banana", "केला", "बनाना"],
      ["3", "Apple", "सेब", "एप्पल"],
      ["4", "Orange", "संतरा", "ऑरेंज"],
      ["5", "Guava", "अमरूद", "ग्वावा"],
      ["6", "Pineapple", "अनानास", "पाइनएप्पल"],
      ["7", "Papaya", "पपीता", "पपाया"],
      ["8", "Watermelon", "तरबूज", "वॉटरमेलन"],
      ["9", "Muskmelon", "खरबूजा", "मस्कमेलन"],
      ["10", "Litchi", "लीची", "लीची"]
    ];

    const Vegetables = [
      ["𓆩⚝𓆪", "Vegetable Name", "Meaning", "Pronunciation"],
      ["1", "Carrot", "गाजर", "कैरेट"],
      ["2", "Potato", "आलू", "पोटैटो"],
      ["3", "Tomato", "टमाटर", "टोमेटो"],
      ["4", "Onion", "प्याज", "अनियन"],
      ["5", "Cabbage", "पत्ता गोभी", "कैबेज"],
      ["6", "Spinach", "पालक", "स्पिनच"],
      ["7", "Peas", "मटर", "पीज"],
      ["8", "Cauliflower", "फूलगोभी", "कॉलीफ्लावर"],
      ["9", "Radish", "मूली", "रैडिश"],
      ["10", "Brinjal", "बैंगन", "ब्रिंजल"]
    ];

    const fruitMode = [
      {
        keywords: [["fruit", "fruits", "fal"], ["means", "kya hota", "ke baare me", "kaisa hota hai", "what is"]],
        action: (count = 10) => answerShow("Fruits is a thing that.........")
      },
      {
        keywords: [["what is", "kya hota", "ke baare me", "kaisa hota hai",], ["mango", "aam", "am"]],
        action: (count = 10) => answerShow("Mango means 'आम' is a Fruits that is.........")
      },
    ];


    const allModes = [
      {
        name: "fruit",
        keywords: [["fruit", "fruits", "fal"], ["name", "list", "show", "print"]],
        action: (count = 10) => printTable("Fruits", Fruits, count)
      },
      {
        name: "vegetable",
        keywords: [["vegetable", "vegetables", "sabji"], ["name", "list", "show", "print"]],
        action: (count = 10) => printTable("Vegetables", Vegetables, count)
      }
    ];



function handleTypedInput() {
  const userMessage = document.getElementById("userQuestion").value.trim();
  if (userMessage.length > 0) {
    handleVoice(userMessage.toLowerCase());
    document.getElementById("userQuestion").value = "";
  } else {
    speak("Please type something.");
  }
}





    let recognition = null;
    let isRecognitionRunning = false;
    let isStop = false;
    function startListening() {
      if (isRecognitionRunning) return; // 🔁 already running, don't restart

      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-IN";
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.start();
      isRecognitionRunning = true;

      recognition.onresult = (e) => {
        const msg = e.results[e.results.length - 1][0].transcript.toLowerCase();
        document.getElementById("userQuestion").value = msg;
        document.getElementById("output").innerText = `🎧 You said: "${msg}"`;
        handleVoice(msg);
      };

      recognition.onerror = (e) => {
        console.error("Recognition error:", e.error);
        speak("कुछ गड़बड़ हो गई, फिर से कोशिश कर रहा हूँ...");
        recognition.stop();
        isRecognitionRunning = false;
        setTimeout(() => startListening(), 1000);
      };

      recognition.onend = () => {
        console.log("Speech recognition ended.");
        isRecognitionRunning = false;
        if (recognition && !isStop) {
          setTimeout(() => startListening(), 1000);
        }
      };
    }

    function stopListening() {
      isStop = true;
      if (recognition && isRecognitionRunning) {
        isRecognitionRunning = false;
        recognition.stop();
        console.log("Stopped listening.");
        speak("माइक बंद कर दिया गया है।");
      }
    }



    // Handle voice command
    function handleVoice(message) {
      document.getElementById("output").innerText = `🎧 You said: "${message}"`;

      // 🔢 number finder
      let count = 10;
      const digitMatch = message.match(/\d+/);
      if (digitMatch) {
        count = parseInt(digitMatch[0]);
      } else {
        const wordMap = {
          one: 1, two: 2, three: 3, four: 4, five: 5,
          six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
          eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15
        };
        const found = Object.keys(wordMap).find(w => message.includes(w));
        if (found) count = wordMap[found];
      }

      // 🧠 Try match with exact mode
      let matchedMode = null;

      for (let mode of allModes) {
        const match = mode.keywords.every(keywordSet =>
          keywordSet.some(k => message.includes(k))
        );
        if (match) {
          matchedMode = mode;
          lastMode = mode; // ✅ Save as last mode
          break;
        }
      }

      // 🤔 if no mode matched, but still contains generic request
      const genericWords = ["name", "names", "list", "give", "show", "print"];
      const hasGeneric = genericWords.some(word => message.includes(word));

      if (!matchedMode && hasGeneric && lastMode) {
        matchedMode = lastMode;
      }

      if (matchedMode) {
        reorderModes(matchedMode.name);
        matchedMode.action(count);
      } else {
        speak("Sorry, I didn't understand.");
        document.getElementById("output").innerHTML = "❌ No match found.";
      }
    }



    // Match keywords
    function matchKeywords(mode, msg) {
      const match = mode.keywords.every(keywordSet =>
        keywordSet.some(k => msg.includes(k))
      );
      return match ? mode : null;
    }

    // Reorder mode stack
    function reorderModes(modeName) {
      const found = allModes.find(m => m.name === modeName);
      const oldTop = modeStack[0];
      modeStack = modeStack.filter(m => m.name !== modeName);

      const newStack = [found];
      if (oldTop && oldTop.name !== modeName) newStack.push(oldTop);

      for (let m of allModes) {
        if (!newStack.find(n => n.name === m.name)) newStack.push(m);
      }

      modeStack = newStack;
      updateModeListDisplay();
    }

    // Display table output
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
      box.innerHTML = tableHTML;
      box.style.marginBottom = "15px";
      box.style.border = "1px solid #ccc";
      box.style.padding = "10px";
      box.style.borderRadius = "10px";
      box.style.background = "#f9f9f9";

      document.getElementById("output").innerHTML = "";
      document.getElementById("output").appendChild(box);

      const speakList = arr.slice(1, count + 1).map(row => row[1]).join(", ");
      speak(`${title} are: ${speakList}`);
    }




    // Text to Speech
    function speak(text) {
      const utter = new SpeechSynthesisUtterance(text);
      synth.speak(utter);
    }

    // Show mode chips
    function updateModeListDisplay() {
      const modeListDiv = document.getElementById("modeList");
      modeListDiv.innerHTML = "";
      modeStack.forEach(mode => {
        const chip = document.createElement("div");
        chip.innerText = mode.name.toUpperCase();
        chip.className = "modeChip";
        modeListDiv.appendChild(chip);
      });
    }

    // Initial mode load
    reorderModes("fruit");