export default function Header() {
    return(
        <header className="text-center py-8 space-y-2">
            <div className="flex items-center justify-center gap-3 ">
                <img
                    src="./src/assets/img/logoN.png" 
                    alt="Logo NaailongFood"
                    className="w-14 h-14 md:w-24 md:h-24 object-contain"
                />
                 <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400
                    tracking-wiide">
                    NailongFood
                </h1>
            </div> 
            <p className="text-slate-400 text-sm ms:text-base">
                Tan rico que hasta Nailong repite.
            </p>
            <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mt-4"></div>
        </header>
    );
}