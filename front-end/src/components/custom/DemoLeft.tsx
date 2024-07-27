import { Input } from "../ui/input"
import { InputFile } from "../ui/InputFile"
import InputBox from "./InputBox"

function DemoLeft() {
  return (
    <div className="flex justify-center h-[80vh] mt-[100px] overflow-y-scroll">
        <div>
            <div>
                <InputFile/>
            </div>
            <div>
                <InputBox Tag={"GSTIN"}/>
                <InputBox Tag={"Phone"}/>
                <InputBox Tag={"Email"}/>
                <InputBox Tag={"Website"}/>
                <InputBox Tag={"Invoice No"}/>
            </div>
            <div>
                <InputBox Tag={"A/C Holder"}/>
                <InputBox Tag={"A/C No"}/>
                <InputBox Tag={"IFSC Code"}/>
            </div>
            <div className="mt-10">
                <p className="text-2xl">Billing Details</p>
                <InputBox Tag={"Invoice To"}/>
            </div>
            <div className="mx-2 mt-5">
                <table className="w-[500px]">
                    <tr>
                        <th className="w-[150px] p-1">Particular</th>
                        <th className="w-[100px] p-1">Price</th>
                        <th className="w-[50px] p-1">QTY</th>
                        <th className="w-[100px] p-1">Amount</th>
                    </tr>
                    <tr>
                        <td className="w-[150px] p-1"><Input/></td>
                        <td className="w-[100px] p-1"><Input/></td>
                        <td className="w-[50px] p-1"><Input/></td>
                        <td className="w-[100px] p-1"><Input/></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DemoLeft