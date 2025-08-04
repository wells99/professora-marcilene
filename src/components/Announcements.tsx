
const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className='flex justify-between items-center '>
                <h1 className="text-xl font-semibold">Anuncios</h1>
                <p className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">Ver todos</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSkyLigth rounded-mf p-4">
                    <div className="flex items-center justify-between">
                        <p className="font-meium ">Primeiro</p>
                        <span className="text-xs text-gra-400 bg-white rounded-md p-1">20-08-2025</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum debitis, 
                        laudantium
                    </p>
                </div>

                 <div className="bg-lamaPurpleLigth rounded-mf p-4">
                    <div className="flex items-center justify-between">
                        <p className="font-meium ">Segundo</p>
                        <span className="text-xs text-gra-400 bg-white rounded-md p-1">20-08-2025</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                        Ipsum debitis ullam distinctio , 
                        laudantium autem illum? Ullam laboriosam temporibus sequi iste harum.
                    </p>
                </div>

                 <div className="bg-lamaYellowLigth rounded-mf p-4">
                    <div className="flex items-center justify-between">
                        <p className="font-meium ">Terceiro</p>
                        <span className="text-xs text-gra-400 bg-white rounded-md p-1">20-08-2025</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       incidunt mollitia expedita optio at dolores, 
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Announcements