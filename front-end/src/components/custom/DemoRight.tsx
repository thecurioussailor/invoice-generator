import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function DemoRight() {
  return (
    <div className="flex justify-center mt-[100px]">
        <div className="w-[650px]">
            <div className="grid grid-cols-2">
                <div>
                    <img/>
                </div>
                <div>
                    <p>GSTIN</p>
                    <p>GSTIN</p>
                    <p>GSTIN</p>
                    <p>GSTIN</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <p>Invoice No:</p>
                    <p>Date:</p>
                </div>
                <div>
                    <p>Invoice To: LE TRAVENUES TECHNOLOGY LIMITED</p>
                </div>
            </div>
            <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">SI</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            </div>
            <div>
                <p className="font-bold">Payment Information</p>
            </div>
            <div>
                <p className="font-bold">Payment Terms and Condition</p>
                <p className="text-slate-500 text-sm"> The stated cost not cover taxes ,GST will be added on top
                    40% advance of total amount. After advance payment your shoot will be confirmed. 50% of total amount on shoot 
                    day after shoot10% of total amount after you have received all the mentioned services. 
                    For the convenience of both parties, we kindly request that all payments be made on the specified due dates. Please 
                    note that postponement of payments is not permitted.
                </p>
            </div>
        </div>
    </div>
  )
}

export default DemoRight