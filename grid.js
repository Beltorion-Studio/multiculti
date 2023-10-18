let collectionGrid = document.querySelector('.category-collection-list-w')
let collectionGridItem = collectionGrid.querySelectorAll('.category-collection-item')

function arangeGrid() {
 if (collectionGridItem.length === 3) {
  elements3()
 }
 if (collectionGridItem.length === 4) {
  elements4()
 }
 if (collectionGridItem.length === 5) {
  elements5()
 }
 if (collectionGridItem.length === 6) {
  elements6()
 }
 if (collectionGridItem.length === 7) {
  elements7()
 }
 if (collectionGridItem.length === 8) {
  elements8()
 }
 if (collectionGridItem.length === 9) {
  elements9()
 }
 if (collectionGridItem.length === 10) {
  elements10()
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

arangeGrid()
