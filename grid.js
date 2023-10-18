let collectionGrid = document.querySelector('.category-collection-list-w')
let collectionGridItem = collectionGrid.querySelectorAll('.category-collection-item')

collectionGridItem.forEach((item, index) => {
 item.classList.add(`item${index + 1}`)
})
