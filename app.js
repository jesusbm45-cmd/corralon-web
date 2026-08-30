let cart = [];

// RENDERIZAR PRODUCTOS Y FILTRAR
function renderProducts(filterCategory = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  const filtered = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => `
    <div class="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover border-b">
      <div class="p-4 flex flex-col flex-grow">
        <p class="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">${p.category.replace('-', ' ')}</p>
        <h3 class="font-bold text-gray-800 text-lg leading-tight mb-4 flex-grow">${p.name}</h3>
        <button onclick="addToCart(${p.id})" class="w-full bg-gray-900 hover:bg-amber-600 text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <span>Agregar a la lista</span>
        </button>
      </div>
    </div>
  `).join('');
}

// AGREGAR AL CARRITO CON NOTIFICACIÓN
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const itemInCart = cart.find(item => item.id === productId);

  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartUI();
  showToast();
  
  // Animar el contador
  const countBadge = document.getElementById('cart-count');
  countBadge.classList.remove('animate-pop');
  void countBadge.offsetWidth; // Forzar reflow
  countBadge.classList.add('animate-pop');
}

// ACTUALIZAR INTERFAZ DEL CARRITO
function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.innerText = totalItems;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-gray-400 space-y-4 pt-10">
        <i data-lucide="package-open" class="w-16 h-16"></i>
        <p class="text-center">Aún no agregaste materiales a tu lista.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center border-b pb-3">
      <div class="flex-1 pr-4">
        <h4 class="font-bold text-sm text-gray-800 leading-tight">${item.name}</h4>
        <span class="text-xs text-gray-500 uppercase">${item.unit}</span>
      </div>
      <div class="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
        <button onclick="changeQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded font-bold transition shadow-sm">-</button>
        <span class="font-bold text-sm w-4 text-center">${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded font-bold transition shadow-sm">+</button>
      </div>
    </div>
  `).join('');
}

// CAMBIAR CANTIDAD
function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  updateCartUI();
}

// MOSTRAR NOTIFICACIÓN (TOAST)
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.remove('opacity-0');
  setTimeout(() => {
    toast.classList.add('opacity-0');
  }, 2000);
}

// ENVIAR MENSAJE A WHATSAPP
function sendWhatsAppQuote() {
  if (cart.length === 0) return;

  const phone = "5493874452416"; 
  let message = "¡Hola Corralón Don Coco! 👋\nQuiero solicitar cotización y disponibilidad para los siguientes materiales:\n\n";

  cart.forEach(item => {
    message += `🔸 *${item.quantity}x* ${item.name}\n`;
  });

  message += "\n📍 *Zona de entrega / Obra:* (Escribí tu barrio o zona aquí)\n";
  message += "¿Me podrán confirmar stock, precio final y costo de envío? ¡Gracias!";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// INICIAR AL CARGAR
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
});