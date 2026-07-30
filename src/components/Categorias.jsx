export default function Categorias({categorias, categoriaActiva, filtrarCategoria}){
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categorias.map((cat, index) => (
                <button
                    key={index}
                    onClick={() => filtrarCategoria(cat)}
                    className={`px-4 py-2 rounded-xl font-semibold capitalize 
                    transition-all duration-200 cursor-pointer text-sm border ${
                    categoriaActiva === cat
                    ? `bg-amber-400 text-slate-900 border-amber-400 shadow-lg shadow-amber-400/20`
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-amber-400/50'
                    }`}>
                        {cat}
                </button>       
            ))}
        </div>
    );
}