import Invoice from "../../assets/invoice-animated.jpg"
function Hero() {
  return (
    <div className="grid grid-cols-2">
        <div className=" ml-[15rem] mt-[5rem] flex justify-center items-center">
            <p className="text-[4rem]">
                Create your Invoice in minutes.
            </p>
        </div>
        <div className="ml-[5rem] mt-[5rem] p-10">
            <img className="w-[500px]" src={Invoice}/>
        </div>
    </div>
  )
}

export default Hero