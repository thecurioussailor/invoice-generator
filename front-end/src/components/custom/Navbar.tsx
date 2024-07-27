import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex fixed w-full h-[80px] justify-around items-center border-b-2">
        <div className="text-2xl"><Link to={"/"}>Invoice Generator</Link></div>
        <div>
            <ul className="flex justify-around gap-5">
              <li className="text-xl cursor-pointer"><Link to={"/demo"}>Demo</Link></li>
                <li className="text-xl cursor-pointer">About</li>
                <li className="text-xl cursor-pointer">Contact us</li>
                <li className="text-xl cursor-pointer"><Link to={"/signin"}>Sign in</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar