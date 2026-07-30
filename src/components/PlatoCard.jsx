export default function PlatoCard({plato}) {
    return (
        <article className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden
        shadow-xl hover:-trasnlate-y-1 transition-transform duration-300 flex flex-col">
            <img
            src={plato.imagen}
            alt={plato.nombre}
            className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="font-bold text-lg text-white">{plato.nombre}</h3>
                        <span className="text-amber-400 font-extrabold text-md bg-amber-400/10
                        px-2 py-1 rounded-lg border border-amber-400/20 ">
                            S/{plato.precio.toFixed(2)}
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {plato.descripcion}
                    </p>
                </div>
                <button className="w-full bg-slate-700 hover:bg-amber-400 hover:text-slate-900
                text-amber-400 font-semibold py-2 rounded-xl transition-colors duration-200
                text-sm cursor-pointer mt-auto">
                    Ordenar Platillo
                </button>
            </div>
        </article>
    );
}