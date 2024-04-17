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
    <li>
      广场页
    </li>
    <li>
      <ul>
        <li><a href="index.html" target="_blank">大bnner和小banner</a></li>
        <li>待补充</li>
      </ul>
    </li>
  </ul>
`;
    listContent.innerHTML = listItems;
}

// Attach toggleMenu function to the icon click event
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

// Initialize the list on page load
createList();