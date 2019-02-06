var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  console.log(e);
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm delete float-right';
  deleteButton.innerText = 'X';
  li.appendChild(deleteButton);
  itemList.appendChild(li);
};

itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to remove ' + e.target.parentElement.firstChild.textContent + '?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

filter.addEventListener('keyup', filterInput);

function filterInput(e) {
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByClassName('list-group-item');
  Array.from(items).forEach(function (item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  );
}
