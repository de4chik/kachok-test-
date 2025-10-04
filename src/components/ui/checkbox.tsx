"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

interface ICheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string;
}

export const Checkbox = ({ className, ...props }: ICheckboxProps) => {
	const [check, setCheck] = useState(false);
	return (
		<label>
			<input checked={check} className={cn("w-0 h-0 absolute", className)} onChange={() => setCheck(!check)} {...props} type="checkbox" />
			<div className="w-8 h-8 rounded-sm border border-[#606566] flex justify-center items-center">{check && <Image src={"/galochka.svg"} alt="galochka" width={20} height={14} />}</div>
		</label>
	);
};
