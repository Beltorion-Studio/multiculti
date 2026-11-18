// Step 1: Retrieve all grid elements
const gridElements = document.querySelectorAll(".grid-element");

// Step 2: Determine the number of rows
const numRows = Math.ceil(gridElements.length / 6);

// Step 3: Clear the existing grid
const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML = "";

// Step 4 and 5: Arrange and append grid elements back to the grid
gridElements.forEach((element, index) => {
  // If it's the first element, make it span all 6 columns
  if (index === 0) {
    element.style.gridColumn = "span 6";
  } else {
    // For subsequent elements
    let gridColumnSpan;

    // Try to span 2 columns
    if (index % 2 === 0) {
      gridColumnSpan = 3;
    }
    // If not possible, try to span 3 columns
    else if (index % 3 === 0) {
      gridColumnSpan = 3;
    }
    // If both attempts fail, use a 4-2 or 2-4 pattern
    else {
      gridColumnSpan = (index / 3) % 2 === 0 ? 4 : 2;
    }

    // Set grid column span and row
    element.style.gridColumn = `span ${gridColumnSpan}`;
    // Limit the row span to either 1 or 2 based on the gridColumnSpan
    element.style.gridRow = `span ${Math.min(
      numRows,
      gridColumnSpan === 6 ? 1 : 2
    )}`;
  }

  // Append the grid element back to the grid container
  gridContainer.appendChild(element);
});
