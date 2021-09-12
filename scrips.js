let form = document.getElementById('addForm');
let itemList = document.getElementById('items'); // the ul
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Detele event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault(); // in order for the normal submission of the form to not happen

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let li = document.createElement('li');
  // Add a class (the same we have on the other li)
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create 'del' button element
  let deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to the li (the button is inside the li)
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li); // append the li to the ul
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // get the filter text and convert it to lowercase
  let text = e.target.value.toLowerCase();
  // Get all the li
  let items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(item => {
    let itemName = item.firstChild.textContent;
    //compare the itemName with the item on the list and look for a match (if it's not a match it's gonna be = -1)
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
