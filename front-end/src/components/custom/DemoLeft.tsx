import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { InputFile } from "../ui/InputFile"
import { ScrollArea } from "../ui/scroll-area"
import InputBox from "./InputBox"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const billArray = [
    {
        SI: 1,
        Particular: "Camera",
        Price: 120,
        QTY: "1",
        Amount: "120",
    },
    {
        SI: 2,
        Particular: "Camera",
        Price: 120,
        QTY: "1",
        Amount: "120",
    },
    {
        SI: 3,
        Particular: "Camera",
        Price: 120,
        QTY: "1",
        Amount: "120",
    },
    {
        SI: 4,
        Particular: "Camera",
        Price: 120,
        QTY: "1",
        Amount: "120",
    },
]

function DemoLeft({}) {

    
  return (
    <div className="flex justify-center mt-[100px]">
    <ScrollArea className="h-[80vh] w-[90%] rounded-md border p-4">
        <div className="px-4">
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
                <Table>
                    <TableCaption>Order Summary</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Particular</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>QTY</TableHead>
                        <TableHead>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium"><Input/></TableCell>
                        <TableCell><Input/></TableCell>
                        <TableCell><Input/></TableCell>
                        <TableCell><Input/></TableCell>
                        <TableCell className="text-right"><Button>Add</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">SI</TableHead>
                        <TableHead>Particular</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>QTY</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        billArray.map((item) => (
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">{item.SI}</TableCell>
                                    <TableCell>{item.Particular}</TableCell>
                                    <TableCell>{item.Price}</TableCell>
                                    <TableCell>{item.QTY}</TableCell>
                                    <TableCell className="text-right">{item.Amount}</TableCell>
                                </TableRow>
                            </TableBody>
                        ))
                    }
                    <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium"></TableCell>
                                    <TableCell className="font-medium"></TableCell>
                                    <TableCell className="font-medium">Total</TableCell>
                                    <TableCell className="font-medium">12</TableCell>
                                    <TableCell className="text-right font-medium">120</TableCell>
                                </TableRow>
                            </TableBody>
                </Table>

            </div>
        </div>
</ScrollArea>

        
    </div>
  )
}

export default DemoLeft