function toggleMenu() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
function filterCoffee() {
    var selectedType = document.getElementById("coffeeType").value;
    var hotCoffeeItems = document.querySelectorAll(".hot-coffee");
    var coldCoffeeItems = document.querySelectorAll(".cold-coffee");

    
    if (selectedType === "hot") {
        hotCoffeeItems.forEach(function(item) {
            item.style.display = "block";
        });
        coldCoffeeItems.forEach(function(item) {
            item.style.display = "none";
        });
    } else if (selectedType === "cold") {
        coldCoffeeItems.forEach(function(item) {
            item.style.display = "block";
        });
        hotCoffeeItems.forEach(function(item) {
            item.style.display = "none";
        });
    } else {
        hotCoffeeItems.forEach(function(item) {
            item.style.display = "block";
        });
        coldCoffeeItems.forEach(function(item) {
            item.style.display = "block";
        });
    }

    
    var visibleItems = document.querySelectorAll(".coffee-item[style*='display: block']");
    document.getElementById("totalCount").textContent = visibleItems.length;
}
filterCoffee();