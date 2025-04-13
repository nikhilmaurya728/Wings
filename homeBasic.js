songs = ["audio/chapter1.mp3", "song2.mp3", "song3.mp3"];
var data = {
  "Mathematics": {
    "Table 0 to 30": '<div class="page"> <div class="a4page"><div class="tablediv"><h2> Learn 0 to 30 Table </h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Tables0To30,\'#table2\')">Show Table</button></div></div></div></div>',
  },

  "Synonyms": {
    " ": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Synonyms,\'#table1\')">Show Table</button></div></div></div></div>',

    "पर्यायवाची": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Synonyms पर्यायवाची शब्द</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(SynonymsHindi,\'#table2\')">Show Table</button></div></div></div></div>',
  },
  

  "Antonyms": {
    "": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Antonyms विलोम शब्द</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Antonyms,\'#table1\')">Show Table</button></div></div></div></div>',

    "विलोम शब्द": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Antonyms विलोम शब्द</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(AntonymsHindi,\'#table2\')">Show Table</button></div></div></div></div>',
  },




  "Idioms": {
    "": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Idioms</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Idioms,\'#table1\')">Show Table</button></div></div></div></div>',

    "मुहावरे": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Idioms मुहावरे</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(IdiomsHindi,\'#table2\')">Show Table</button></div></div></div></div>',
  },
  

  "Homophones होमोफोन्स": {
    " ": '',
    "समध्वनिक शब्द": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Homophones होमोफोन्स</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(Homophones,\'#table1\')">Show Table</button></div></div></div></div>',
  },



  
  "One Word Substitution": {
    "": '',
    "वाक्य के लिए एक शब्द": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>वाक्य के लिए एक शब्द</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(OneWordSubstitution,\'#table2\')">Show Table</button></div></div></div></div>',
  },




  "Multiple Meaning": {
    " ": '',
    "अनेकार्थी शब्द": '',
  },

  
};

generateSidebar();