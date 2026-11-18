let collectionGrid = document.querySelector('.category-collection-list-w')
let collectionGridItem = collectionGrid.querySelectorAll('.category-collection-item')

arrangeGridElements(collectionGridItem)

function arrangeGridElements(gridElements) {
 const rowCount = gridElements.length / 6
 let rowIndex = 0
 let layoutPattern = 1 // Start with 1 * 6 layout

 for (let i = 0; i < rowCount; i++) {
  const rowElements = []

  for (let j = 0; j < 6; j++) {
   const element = gridElements[rowIndex * 6 + j]
   rowElements.push(element)
  }

  // Update layout pattern for next row
  if (layoutPattern === 1) {
   layoutPattern = 2
  } else if (layoutPattern === 2) {
   layoutPattern = 3
  } else {
   layoutPattern = 1
  }

  // Adjust element spans based on layout pattern
  switch (layoutPattern) {
   case 1:
    rowElements[0].setAttribute('colspan', '6')
    break
   case 2:
    rowElements[0].setAttribute('colspan', '3')
    rowElements[3].setAttribute('colspan', '3')
    break
   case 3:
    rowElements[0].setAttribute('colspan', '2')
    rowElements[2].setAttribute('colspan', '2')
    rowElements[4].setAttribute('colspan', '2')
    break
  }

  rowIndex++
 }
}
