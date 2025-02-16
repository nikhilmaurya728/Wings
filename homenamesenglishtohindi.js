songs = ["audio/chapter1.mp3", "song2.mp3", "song3.mp3"];
var data = {
  
  "Ch 1: Parts of Speech": {
    "Noun": '<div class="page"> <h1>English Grammar Notes & Paper</h1> <div class="a4page"><h2>Auto Scroll Multiplication Table (1 to 20)</h2> <div style="width: 100%; overflow-x: auto; white-space: nowrap; border: 0px solid black; scroll-behavior: smooth; margin: 10px auto; padding: 10px;" id="tableContainer"> <table style="border-collapse: collapse; width: 100%; min-width: 800px; text-align: center;"> <tr> <!-- Table Headers (1 to 30) --> <script> for (let i = 1; i <= 30; i++) { document.write("<th>" + i + "</th>"); } </script> </tr> <!-- Table Rows (1 to 10) --> <script> for (let i = 2; i <= 10; i++) { document.write("<tr><td><b>" + i + "</b></td>"); for (let j = 2; j <= 30; j++) { document.write("<td>" + (i * j) + "</td>"); } document.write("</tr>"); } </script> </table> </div><button id="toggleScroll">Disable Scrolling</button> <script src="morescript.js"> </script> </div> </div>'
  }
};

generateSidebar();