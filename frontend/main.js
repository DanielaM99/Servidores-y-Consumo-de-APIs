//Base URL of the mock API (JSON Server)
const apiUrl = 'http://localhost:3000/products';

//Selecting DOM elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const showProductsBtn = document.getElementById('show-products');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const BodyProductstable = document.getElementById('product-table');
const deleteSelectedBtn = document.getElementById('delete-selected');

//Create a new product (POST)
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid name and price');
    return;
  }

  const newProduct = { name, price };

  // Send product to the API (POST)
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });

    if (!response.ok) throw new Error('Error adding product');

    form.reset();
    loadProducts();
  } catch (error) {
    console.error(error.message);
  }
});

//Load existing products (GET)
async function loadProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Error getting products');
    
    const products = await response.json();
    BodyProductstable.innerHTML = '';

    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="checkbox" class="select" value="${product.id}"></td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
      `;
      BodyProductstable.appendChild(row);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Delete selected products
deleteSelectedBtn.addEventListener('click', async () => {
  const selected = document.querySelectorAll('.select:checked');

  if (selected.length === 0) {
    alert('Select at least one product to remove');
    return;
  }

  if (!confirm('Are you sure you want to delete the selected products?')) return;

  for (const checkbox of selected) {
    const id = checkbox.value;
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(`Error deleting product with ID ${id}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  loadProducts();
});

// Show and hide the modal
showProductsBtn.addEventListener('click', () => {
  loadProducts();
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
