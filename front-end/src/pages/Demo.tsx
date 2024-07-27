import DemoLeft from "@/components/custom/DemoLeft"
import DemoRight from "@/components/custom/DemoRight"

function Demo() {
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