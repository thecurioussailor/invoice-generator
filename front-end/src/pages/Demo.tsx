import DemoLeft from "@/components/custom/DemoLeft"
import DemoRight from "@/components/custom/DemoRight"
import { useState } from "react";

function Demo() {

    const [logo, setLogo] = useState();
    const [gstin, setGstin] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [website, setWebsite] = useState();
    const [invoiceNo, setInvoiceNo] = useState();
    const [acHolder, setAcHolder] = useState();
    const [acNo, setAcNo] = useState();
    const [ifscCode, setIfscCode] = useState();
  return (
    <div className="grid grid-cols-2 h-screen">
        <div>
            <DemoLeft/>
        </div>
        <div>
            <DemoRight/>
        </div>
    </div>
  )
}

export default Demo