//Note: This file runs with Node.js and does not require HTML or DOM.
// It is only used for testing the API using fetch.

//fetch is now available on Node 18+
// If you are using a lower version, you can install with:
// const fetch = require('node-fetch');

const url = 'http://localhost:3000/products';

// Get all products (GET)
async function getProducts() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error getting products');
    const products = await res.json();
    console.log('Product list:');
    products.forEach(p => {
      console.log(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}`);
    });
  } catch (error) {
    console.error('❌', error.message);
  }
}

// Function to add a product (POST)
async function addProduct(name, price) {
  if (!name || isNaN(price) || price <= 0) {
    return console.error('Invalid data to add product');
  }

  const newProduct = { name, price };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    });
    if (!res.ok) throw new Error('Error adding product');
    console.log('Product added');
    getProducts();
  } catch (error) {
    console.error('❌', error.message);
  }
}

//Modify an existing product (PUT)
async function updateProduct(id, newData) {
  if (!id || !newData.name || isNaN(newData.price) || newData.price <= 0) {
    return console.error('Invalid data to update product');
  }

  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
    if (!res.ok) throw new Error('Error updating product');
    console.log('Updated product');
    getProducts();
  } catch (error) {
    console.error('❌', error.message);
  }
}

// Remove a product by ID (DELETE)
async function removeProduct(id) {
  try {
    const res = await fetch(`${url}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Product deletion error');
    console.log('Product removed');
    getProducts();
  } catch (error) {
    console.error('❌', error.message);
  }
}
