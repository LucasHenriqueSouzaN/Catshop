const searchElement = document.querySelector('.search-box input'); 
const dishes = document.querySelectorAll('.dish'); 
searchElement.addEventListener('input', searchDish);

function searchDish() {
    const searchText = searchElement.value.toLowerCase();
    if (searchText !== '') {
        for (let dish of dishes) { 
            let title = dish.querySelector('.dish-title'); 
            title = title.textContent.toLowerCase(); 
            
      
            if (!title.includes(searchText)) {
                dish.style.display = "none"; 
            } else {
                dish.style.display = "block"; 
            }
        }
    } else {
        for (let dish of dishes) {
            dish.style.display = "block"; 
        }
    }
}