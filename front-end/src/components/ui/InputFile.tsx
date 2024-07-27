import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export function InputFile() {
  return (
    <div className="flex justify-start w-full items-center">
      <Label className="w-[120px]" htmlFor="picture">Upload Logo</Label>
      <Input id="picture" type="file" />
    </div>
  )
}