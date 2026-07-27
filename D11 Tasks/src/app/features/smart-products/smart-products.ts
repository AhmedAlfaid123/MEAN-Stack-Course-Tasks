import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-products',
  templateUrl: './smart-products.html',
  styleUrls: ['./smart-products.css'],
  imports: [FormsModule]
})
export class SmartProducts {

  isLoggedIn = false;
  userName = 'Ahmed';
  searchText = '';
  status: 'loading' | 'success' | 'error' | 'idle' = 'idle';
  
  products = [
    { id: 1, name: 'Wireless Mouse', price: 250, category: 'Accessories', inStock: true },
    { id: 2, name: 'Mechanical Keyboard', price: 1200, category: 'Accessories', inStock: true },
    { id: 3, name: 'USB-C Hub', price: 600, category: 'Accessories', inStock: false },
    { id: 4, name: '27 Monitor', price: 4500, category: 'Displays', inStock: true }
  ];

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  clearProducts() {
    this.products = [];
  }

  get filteredProducts() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(q));
  }

  setStatus(newStatus: 'loading' | 'success' | 'error' | 'idle') {
    this.status = newStatus;
  }
}
