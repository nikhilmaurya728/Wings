songs = ["song4.mp3", "song2.mp3", "song3.mp3"];
var data = {
  "English Reading ": {
    "Reading Rules": '<div class="page"> <div class="a4page"><div class="tablediv"></div></div></div>',

    "Common Words": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Some Comman Words</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(commonWords,\'#table2\')"> </button></div></div></div></div>',

    "1,2 and 3 Letter": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>1,2 and 3 Letter Words</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(words123,\'#table3\')"> </button></div></div></div></div>',
  },


  "Basic Words": {
    "Question Words": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Some Important Question Words</h2><div id="table1" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(questionWords,\'#table1\')"> </button></div></div></div></div>',

    "Time Date": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Time And Date Related Words</h2><div id="table2" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(timeAndDays,\'#table2\')"> </button></div></div></div></div>',

    "Emotions": '<div class="page"> <div class="a4page"><div class="tablediv"><h2>Emotions Related Words</h2><div id="table3" class="tablediv"><button class= "auto-click-btn" onclick="generateTable(emotions,\'#table3\')"> </button></div></div></div></div>',
  },


};

generateSidebar();