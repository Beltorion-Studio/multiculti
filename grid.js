let collectionGrid = document.querySelector('.category-collection-list-w');
let collectionGridItem = collectionGrid.querySelectorAll(
  '.category-collection-item'
);

function arangeGrid() {
  if (collectionGridItem.length === 3) {
    elements3();
  }
  if (collectionGridItem.length === 4) {
    elements4();
  }
  if (collectionGridItem.length === 5) {
    elements5();
  }
  if (collectionGridItem.length === 6) {
    elements6();
  }
  if (collectionGridItem.length === 7) {
    elements7();
  }
  if (collectionGridItem.length === 8) {
    elements8();
  }
  if (collectionGridItem.length === 9) {
    elements9();
  }
  if (collectionGridItem.length === 10) {
    elements10();
  }
}

function elements3() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2) {
      item.style.setProperty('grid-column', 'span 6', 'important');
      item.style.setProperty('aspect-ratio', '3 / 1', 'important');
    }
  });
}

function elements4() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1 || index === 2) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 3) {
      item.style.setProperty('grid-column', 'span 6', 'important');
      item.style.setProperty('aspect-ratio', '3 / 1', 'important');
    }
  });
}

function elements5() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2 || index === 3 || index === 4) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
  });
}

function elements6() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2) {
      item.style.setProperty('grid-column', 'span 6', 'important');
      item.style.setProperty('aspect-ratio', '3 / 1', 'important');
    }
    if (index === 3 || index === 4 || index === 5) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
  });
}

function elements7() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2 || index === 3 || index === 4) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 5 || index === 6) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
  });
}

function elements8() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2) {
      item.style.setProperty('grid-column', 'span 6', 'important');
      item.style.setProperty('aspect-ratio', '3 / 1', 'important');
    }
    if (index === 3 || index === 4 || index === 5) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 6 || index === 7) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
  });
}

function elements9() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1 || index === 2) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 3) {
      item.style.setProperty('grid-column', 'span 6', 'important');
      item.style.setProperty('aspect-ratio', '3 / 1', 'important');
    }
    if (index === 4 || index === 5 || index === 6) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 7 || index === 8) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
  });
}

function elements10() {
  collectionGridItem.forEach((item, index) => {
    if (index === 0 || index === 1) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 2 || index === 3 || index === 4) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
    if (index === 5 || index === 6) {
      item.style.setProperty('grid-column', 'span 3', 'important');
      item.style.setProperty('aspect-ratio', '3 / 2', 'important');
    }
    if (index === 7 || index === 8 || index === 9) {
      item.style.setProperty('grid-column', 'span 2', 'important');
      item.style.setProperty('aspect-ratio', '1 / 1', 'important');
    }
  });
}

arangeGrid();
