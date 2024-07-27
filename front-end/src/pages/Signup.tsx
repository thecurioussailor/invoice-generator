import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-[400px]">
      <div>
        <p className="text-2xl font-bold mb-[50px]">Sign Up</p>
      </div>
      <div className="flex justify-center flex-row items-center mb-[20px]">
        <label className="mr-[48px]">Email</label>
        <Input/>
      </div>
      <div className="flex justify-center flex-row items-center mb-[10px]">
        <label className="mr-5">Password</label>
        <Input/>
      </div>
      <p className="mb-4 text-slate-400 text-[15px]">Already have an account? <Link className="underline pl-2" to={"/signin"}>Sign In</Link></p>
      <Button>Sign up</Button>

      </div>
      
    </div>
  )
}

export default Signup