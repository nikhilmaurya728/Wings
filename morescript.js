document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("multiplicationTable");
  let tableHead = table.querySelector("thead tr");
  let tableBody = table.querySelector("tbody");

  // 1 to 20 Headers
  for (let i = 1; i <= 30; i++) {
      let th = document.createElement("th");
      th.textContent = i;
      tableHead.appendChild(th);
  }

  // Multiplication Table Rows
  for (let i = 2; i <= 10; i++) {
      let row = document.createElement("tr");
      let firstCell = document.createElement("td");
      firstCell.innerHTML = `<b>${i}</b>`;
      row.appendChild(firstCell);

      for (let j = 2; j <= 30; j++) {
          let cell = document.createElement("td");
          cell.textContent = i * j;
          row.appendChild(cell);
      }
      tableBody.appendChild(row);
  }

  let tableContainer = document.getElementById("tableContainer");
  let toggleButton = document.getElementById("toggleScroll");
  let scrollDirection = 1;
  let isUserScrolling = false;
  let scrollSpeed = 1;
  let isScrollingEnabled = true;

  function smoothScroll() {
      if (isScrollingEnabled && !isUserScrolling) {
          tableContainer.scrollLeft += scrollDirection * scrollSpeed;

          if (tableContainer.scrollLeft + tableContainer.clientWidth >= tableContainer.scrollWidth) {
              scrollDirection = -1;
          } else if (tableContainer.scrollLeft <= 0) {
              scrollDirection = 1;
          }
      }
      requestAnimationFrame(smoothScroll);
  }

  tableContainer.addEventListener("scroll", () => {
      isUserScrolling = true;
      setTimeout(() => {
          isUserScrolling = false;
      }, 1);
  });

  toggleButton.addEventListener("click", () => {
      isScrollingEnabled = !isScrollingEnabled;
      toggleButton.textContent = isScrollingEnabled ? "Disable Scrolling" : "Enable Scrolling";
  });

  smoothScroll();
});
