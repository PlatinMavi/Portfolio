function Navbar(){

    return(
        <>
            <nav className="bg-black sticky top-0">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center ">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 className="font-bold text-2xl">Alper Gezer</h1>
                            </div>
                        </div>
                    </div>
                    <hr className="color-white" />
                </div>
            </nav>
        </>
    )
}
export default Navbar