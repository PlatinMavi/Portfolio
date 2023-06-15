import pp from "./assets/profile.jpg"

function Profile(){
    return(
        <>
            <div className="bg-gradient-to-r p-8 h-max-xs mt-12 max-w-xs from-orange-500 to-pink-500 rounded-full lg:mx-8 md:mx-8 sm:mx-auto">
                <img src={pp} alt="" className="rounded-full object-contain" />
            </div>
        </>
    )
}
export default Profile