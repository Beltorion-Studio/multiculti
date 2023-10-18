let collectionGrid = document.querySelector('.category-collection-list-w')
let collectionGridItem = collectionGrid.querySelectorAll('.category-collection-item')

function arangeGrid() {
 if (collectionGridItem.length === 6) {
  elements6()
 }
 if (collectionGridItem.length === 4) {
  elements4()
 }
}

function elements6() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   item.style.setProperty('grid-column', 'span 3', 'important')
   item.style.setProperty('aspect-ratio', '3 / 2', 'important')
  }
  if (index === 2) {
   item.style.setProperty('grid-column', 'span 6', 'important')
   item.style.setProperty('aspect-ratio', '3 / 1', 'important')
  }
  if (index === 3 || index === 4 || index === 5) {
   item.style.setProperty('grid-column', 'span 2', 'important')
   item.style.setProperty('aspect-ratio', '1 / 1', 'important')
  }
 })
}

function elements4() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1 || index === 2) {
   item.style.setProperty('grid-column', 'span 2', 'important')
   item.style.setProperty('aspect-ratio', '1 / 1', 'important')
  }
  if (index === 3) {
   item.style.setProperty('grid-column', 'span 6', 'important')
   item.style.setProperty('aspect-ratio', '3 / 1', 'important')
  }
 })
}

arangeGrid()
