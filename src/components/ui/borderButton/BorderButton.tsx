

export default function BorderButton() {
    return (
        <div className="group relative inline-block mb-2 mr-2">
            <div className="border-2 border-purplePaths-100 py-4 md:px-7 px-4 rounded-full inline-block 
                            transition-all duration-300 ease-in-out 
                            group-hover:bg-purple-600 group-hover:border-white">
                <h2 className="font-semibold 3xl:text-xl md:text-base text-sm text-black uppercase 
                                transition-all duration-300 ease-in-out 
                                group-hover:text-white">
                    Produção de Eventos
                </h2>
            </div>
        </div>
    );
}