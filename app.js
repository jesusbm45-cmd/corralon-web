// RENDERIZAR PRODUCTOS Y FILTRAR (ESTILO OBLAK / BOUTIQUE)
function renderProducts(filterCategory = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  const filtered = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => `
    <div class="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 rounded-sm">
      
      <!-- Contenedor de imagen (Vertical, limpio y con zoom al hacer hover) -->
      <div class="relative h-80 w-full bg-white p-6 overflow-hidden flex items-center justify-center">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out">
      </div>
      
      <!-- Información y Botón -->
      <div class="p-6 flex flex-col flex-grow bg-white border-t border-gray-50 z-10 relative">
        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">${p.category.replace('-', ' ')}</p>
        <h3 class="font-bold text-gray-900 text-lg leading-snug mb-6 flex-grow">${p.name}</h3>
        
        <!-- Botón Minimalista (Fondo transparente, borde negro. Al hover: Fondo negro, texto amarillo) -->
        <button onclick="addToCart(${p.id})" class="w-full bg-transparent hover:bg-black text-black hover:text-[#FFFF00] border-2 border-black font-bold py-3 rounded-sm transition-colors duration-300 flex items-center justify-center">
          <span class="text-sm uppercase tracking-wide">Sumar a la lista</span>
        </button>
      </div>
    </div>
  `).join('');
}