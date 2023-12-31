document.addEventListener('DOMContentLoaded', function () {
 // Initial execution on page load
 if (window.innerWidth > 768) {
  arrangeGrid()
 }

 //window.addEventListener('resize', handleResize)
})

let collectionGrid = document.querySelector('.category-collection-list-w')
let collectionGridItem = collectionGrid.querySelectorAll('.category-collection-item')

function handleResize() {
 if (window.innerWidth <= 768) {
  removeGridArrangement()
 }
}

function removeGridArrangement() {
 console.log('remove grid arrangament')
 collectionGridItem.forEach((item, index) => {
  item.style.setProperty('grid-column', 'span 6', 'important')
  item.style.setProperty('aspect-ratio', '3 / 2', 'important')
 })
}

function arrangeGrid() {
 const gridFunctions = {
  3: elements3,
  4: elements4,
  5: elements5,
  6: elements6,
  7: elements7,
  8: elements8,
  9: elements9,
  10: elements10,
  11: elements11,
  12: elements12,
  13: elements13,
  14: elements14,
  15: elements15,
 }

 const length = collectionGridItem.length
 if (gridFunctions[length]) {
  gridFunctions[length]()
 }
}

function elements3() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2) {
   oneCollumn(item)
  }
 })
}

function elements4() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1 || index === 2) {
   threeCollumns(item)
  }
  if (index === 3) {
   oneCollumn(item)
  }
 })
}

function elements5() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2 || index === 3 || index === 4) {
   threeCollumns(item)
  }
 })
}

function elements6() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2) {
   oneCollumn(item)
  }
  if (index === 3 || index === 4 || index === 5) {
   threeCollumns(item)
  }
 })
}

function elements7() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2 || index === 3 || index === 4) {
   threeCollumns(item)
  }
  if (index === 5 || index === 6) {
   twoCollumns(item)
  }
 })
}

function elements8() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2) {
   oneCollumn(item)
  }
  if (index === 3 || index === 4 || index === 5) {
   threeCollumns(item)
  }
  if (index === 6 || index === 7) {
   twoCollumns(item)
  }
 })
}

function elements9() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1 || index === 2) {
   threeCollumns(item)
  }
  if (index === 3) {
   oneCollumn(item)
  }
  if (index === 4 || index === 5 || index === 6) {
   threeCollumns(item)
  }
  if (index === 7 || index === 8) {
   twoCollumns(item)
  }
 })
}

function elements10() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2 || index === 3 || index === 4) {
   threeCollumns(item)
  }
  if (index === 5 || index === 6) {
   twoCollumns(item)
  }
  if (index === 7 || index === 8 || index === 9) {
   threeCollumns(item)
  }
 })
}

function elements11() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2) {
   oneCollumn(item)
  }
  if (index === 3 || index === 4 || index === 5) {
   threeCollumns(item)
  }
  if (index === 6 || index === 7) {
   twoCollumns(item)
  }
  if (index === 8 || index === 9 || index === 10) {
   threeCollumns(item)
  }
 })
}

function elements12() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1 || index === 2) {
   threeCollumns(item)
  }
  if (index === 3) {
   oneCollumn(item)
  }
  if (index === 4 || index === 5 || index === 6) {
   threeCollumns(item)
  }
  if (index === 7 || index === 8) {
   twoCollumns(item)
  }
  if (index === 9 || index === 10 || index === 11) {
   threeCollumns(item)
  }
 })
}

function elements13() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1 || index === 2) {
   threeCollumns(item)
  }
  if (index === 3) {
   oneCollumn(item)
  }
  if (index === 4 || index === 5 || index === 6) {
   threeCollumns(item)
  }
  if (index === 7 || index === 8) {
   twoCollumns(item)
  }
  if (index === 9 || index === 10 || index === 11) {
   threeCollumns(item)
  }
  if (index === 12) {
   oneCollumn(item)
  }
 })
}

function elements14() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2) {
   oneCollumn(item)
  }
  if (index === 3 || index === 4 || index === 5) {
   threeCollumns(item)
  }
  if (index === 6 || index === 7) {
   twoCollumns(item)
  }
  if (index === 8 || index === 9 || index === 10) {
   threeCollumns(item)
  }
  if (index === 11 || index === 12) {
   twoCollumns(item)
  }
  if (index === 13) {
   oneCollumn(item)
  }
 })
}

function elements15() {
 collectionGridItem.forEach((item, index) => {
  if (index === 0 || index === 1) {
   twoCollumns(item)
  }
  if (index === 2 || index === 3 || index === 4) {
   threeCollumns(item)
  }
  if (index === 5 || index === 6) {
   twoCollumns(item)
  }
  if (index === 7 || index === 8 || index === 9) {
   threeCollumns(item)
  }
  if (index === 10 || index === 11) {
   twoCollumns(item)
  }
  if (index === 12 || index === 13 || index === 14) {
   threeCollumns(item)
  }
 })
}

function oneCollumn(item) {
 item.style.setProperty('grid-column', 'span 6', 'important')
 item.style.setProperty('aspect-ratio', '3 / 1', 'important')
}

function twoCollumns(item) {
 item.style.setProperty('grid-column', 'span 3', 'important')
 item.style.setProperty('aspect-ratio', '3 / 2', 'important')
}
function threeCollumns(item) {
 item.style.setProperty('grid-column', 'span 2', 'important')
 item.style.setProperty('aspect-ratio', '1 / 1', 'important')
}
