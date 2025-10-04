import { cn } from "@/utils/cn";

interface IButtonProps {
	children?: React.ReactNode;
	className?: string;
}

export const Button = ({ children, className }: IButtonProps) => {
	return <button className={cn("rounded-[20px] bg-orange text-dark py-5 px-7 font-bold text-[20px] max-w-[352px] w-full animate-pulse", className)}>{children}</button>;
};
