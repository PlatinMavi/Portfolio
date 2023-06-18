import coding from "./assets/coding.png"
import pho from "./assets/moon.jpg"
import billard from "./assets/billard.jpg"

function Section2(){
    const hobbies = [
        {title:"Coding", desc:"I just open my editor whenever i am free to. Its fun i swear, dont be afraid.", image:coding ,subdesc:"*intensive coding*"},
        {title:"Photography", desc:"Yeah let me pull out my camera, just 1 second. And Cheese (just took the most ugliest photo)", image:pho ,subdesc:"-yes i took it"},
        {title:"Billards", desc:"Does Billards count as a Sport ? Oh i can also do backflips on ski :D", image:billard ,subdesc:'"act cool..."'}
    ]

    return(
        <>
            <div className="wrapper-section1 container mx-auto text-left">
                <h3 className="text-6xl font-bold p-4">While we are talking about hobbys,</h3>
                <div className="anihr from-orange-600 via-pink-600 to-purple-600 bg-gradient-to-r h-2" ></div>
                <p className="text-2xl text-right pr-2">wait, what happened to the line?</p>
                <h3 className="text-4xl font-bold p-4">My Main Hobbies:</h3>
                <div className="grid grid-cols-1 gap-12 mx-auto text-center md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                    {hobbies.map((hobby, index)=>{
                        return(
                            <div key={index} className="mb-12">
                                <h2 className="text-4xl text-center p-2">{hobby.title}</h2>
                                <p className="text-lg text-slate-200 px-8">{hobby.desc}</p>
                                <div className="p-12 sm:p-24 md:12 lg:12">
                                    <img className=" rounded-2xl hover:scale-125 transition duration-500 cursor-pointer" src={hobby.image} alt="" />
                                </div>
                                
                                <p className="text-gray-300 italic text-center">{hobby.subdesc}</p>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Section2