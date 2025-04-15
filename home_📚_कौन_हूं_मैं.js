songs = ["song4.mp3", "song2.mp3", "song3.mp3"];
var data = {

  "🧮Mathematics": {
    "🟢 Basic": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(mathBasicQNA,\'#table1\')">Show Table</button></div></div></div></div>',

    "🟡 Medium":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(mathMediumQNA,\'#table2\')">Show Table</button></div></div></div></div>',

    "🔴 Advanced":'<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(mathAdvancedQNA,\'#table3\')">Show Table</button></div></div></div></div>',
  },

  "🔬 Science": {
    "🟢 Basic": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(mathBasicQNA,\'#table1\')">Show Table</button></div></div></div></div>',


    "🟡 Medium": '<div class="table2"><button class= "auto-click-btn" onclick="generateTable(words1,\'.table2\')">Show Table</button></div>',


    "🔴 Advanced": '<div class="table3"><button class= "auto-click-btn" onclick="generateTable(words1,\'.table3\')">Show Table</button></div>',
  },
  "🌍 Social Science": {
    "🟢 Basic": '<div class="table1"><button class= "auto-click-btn" onclick="generateTable(words1,\'.table1\')">Show Table</button></div>',
    "🟡 Medium": '<div class="table2"><button class= "auto-click-btn" onclick="generateTable(words1,\'.table2\')">Show Table</button></div>',
    "🔴 Advanced": '<div class="table3"><button class= "auto-click-btn" onclick="generateTable(words1,\'.table3\')">Show Table</button></div>',
  },
  "🧠 GK": {
    "🟢 Basic": '',
    "🟡 Medium": '',
    "🔴 Advanced": '',
  },
  "📖 English": {
    "🟢 Basic": '',
    "🟡 Medium": '',
    "🔴 Advanced": '',
  },
  "📝 Hindi": {
    "🟢 Basic": '',
    "🟡 Medium": '',
    "🔴 Advanced": '',
  },

/* बिलकुल! यहाँ अलग-अलग सब्जेक्ट्स के लिए सिंबल दिए हैं: 📚  

- 🧮 **Math** (गणित)  
- 📝 **Hindi** (हिंदी)  
- 🔬 **Science** (विज्ञान)  
- 🌍 **Social Studies** (सामाजिक अध्ययन)  
- 📖 **English** (अंग्रेज़ी)  
- 🧠 **General Knowledge (GK)** (सामान्य ज्ञान)  
- 💻 **Computer** (कंप्यूटर)  
- 🎨 **Art & Craft** (कला और शिल्प)  
- 🎵 **Music** (संगीत)  
- ⚽ **Physical Education (PE)** (शारीरिक शिक्षा)  
- 🧪 **Chemistry** (रसायन विज्ञान)  
- 🔭 **Physics** (भौतिकी)  
- 🌱 **Biology** (जीव विज्ञान)  
- 🗺️ **Geography** (भूगोल)  
- 📜 **History** (इतिहास)  
- 📊 **Economics** (अर्थशास्त्र)  
- ⚖️ **Civics** (नागरिक शास्त्र)  
- 🏆 **Moral Science** (नैतिक शिक्षा)  
- 🏫 **Environmental Studies (EVS)** (पर्यावरण अध्ययन)  
- 💬 **Languages** (भाषाएँ)  

अगर आप इन्हें किसी चार्ट में लगाना चाहते हैं या और कोई बदलाव चाहिए, तो बताइए! 🌟 */


};

generateSidebar();