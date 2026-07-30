import { useState } from 'react';
import { menu } from './datos';
import Header from './components/Header';
import Categorias from './components/Categorias';
import PlatoCard from './components/PlatoCard';

const todasLasCategorias = ['todos', ...new Set(menu.map(item => item.categoria))];

export default function App() {
  const [itemsMenu, setItemsMenu] = useState(menu);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const filtrarCategoria = (categoria) => {
    setCategoriaActiva(categoria);
    if (categoria === 'todos') {
      setItemsMenu(menu);
      return;
    }
    const platosFiltrados = menu.filter(item => item.categoria === categoria);
    setItemsMenu(platosFiltrados);
  };


  return (  
    <div className="min-h-screen bg-gray-600 text-white font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header  />
        <Categorias
        categorias={todasLasCategorias}
        categoriaActiva={categoriaActiva}
        filtrarCategoria={filtrarCategoria}
        />
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsMenu.map((plato) => (
            <PlatoCard key={plato.id} plato={plato} />
          ))}
        </main>
      </div>
    </div>
  );
}