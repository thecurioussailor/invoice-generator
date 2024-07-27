import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FC } from "react";

interface InputBoxProps {
    Tag: string
}

const InputBox:FC<InputBoxProps> = ({Tag}) => {
  return (
    <div className="flex w-full items-center mt-4">
      <Label className="w-[120px]" htmlFor="email">{Tag}</Label>
      <Input type="text" id="text" placeholder={Tag} />
    </div>
  )
}

export default InputBox