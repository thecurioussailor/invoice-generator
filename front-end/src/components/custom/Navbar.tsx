function Navbar() {
  return (
    <div className="flex justify-around mt-10">
        <div className="text-2xl">Invoice Generator</div>
        <div>
            <ul className="flex justify-around gap-5">
                <li className="text-xl cursor-pointer">About</li>
                <li className="text-xl cursor-pointer">Contact us</li>
                <li className="text-xl cursor-pointer">Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar