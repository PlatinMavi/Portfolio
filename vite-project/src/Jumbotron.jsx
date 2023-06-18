function Jumbotron(){

    return(
        
        <section className=" bg-[url('./assets/phs.png')] min-h-screen bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-8xl">Hi, I'm <span className="ty from-orange-600 via-pink-600 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent">Alper Gezer</span></h1>
                <p className="mb-8 mt-8 text-xl font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Your Web Developer On Board <br /> <span className="italic text-lg font-semibold">(I am still on highschool btw.)</span></p>
            </div>
        </section>

    )
}
export default Jumbotron