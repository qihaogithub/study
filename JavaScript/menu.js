// JavaScript function to toggle icons and display layer
function toggleMenu() {
    var icon = document.getElementById('menu-icon');
    var layer = document.getElementById('menu-layer');
    var isIconMenu = icon.getAttribute('name') === 'application-menu';

    // Toggle the icon name attribute
    if (isIconMenu) {
        icon.setAttribute('name', 'close'); // Assuming 'close' is the name of the other icon
        layer.style.display = 'block';
    } else {
        icon.setAttribute('name', 'application-menu');
        layer.style.display = 'none';
    }

    // Create list dynamically if not already created
    if (!layer.querySelector('dl')) {
        createList();
    }
}

// Function to create the list dynamically
function createList() {
    var listContent = document.getElementById('listContent');
    var listItems = `
<ul>
    <li><a href="https://www.bidianer.com/" target="_blank">第一项 </a></li>
    <li>第二项</li>
    <li>第三项</li>
</ul>
`;
    listContent.innerHTML = listItems;
}

// Attach toggleMenu function to the icon click event
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

// Initialize the list on page load
createList();