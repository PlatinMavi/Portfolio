function Section4(){
    const projects = [
        {t:"Portfolio Site",l:"https://github.com/PlatinMavi/Portfolio"},
        {t:"AI reinforced Cervivular Canser Detection (Contestant of TUBITAK)",l:"https://github.com/PlatinMavi/as"},
        {t:"MUN Event Website",l:"dermun.com.tr"},
        {t:"MangaBridge(In Progress) My Biggest Project",l:"https://github.com/PlatinMavi/MangaBridge2.0"},
        {t:"Login with Passport JS",l:"https://github.com/PlatinMavi/NodeJS-Authenticate"},
    ]

    return(
        <>
            <div className="wrapper-section1 container mx-auto text-left">
                <h3 className="text-4xl font-bold p-4">Check My Github For Projects!</h3>
                <div className="anihr from-black to-red-600 bg-gradient-to-r h-2" ></div>
                <p className="text-2xl text-right pr-2">cannon event ? (line arc expanding)</p>
                
                
  
                <div className=" mx-auto mt-8 w-max">
                    <a href="https://github.com/PlatinMavi"  className="  bg-red-600 hover:bg-red-500 font-medium rounded-lg text-sm px-32 py-4 text-center mr-2 ">My Github Here !</a>
                </div>
            </div>
            
        </>
    )
}
export default Section4