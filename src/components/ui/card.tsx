import { cn } from "@/utils/cn";

interface ICardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export const Card = ({ children, className, ...props }: ICardProps) => {
	return (
		<div className={cn("border-2 rounded-[40px] border-[#484D4E] text-white p-10 bg-[#313637]", className)} {...props}>
			{children}
		</div>
	);
};
