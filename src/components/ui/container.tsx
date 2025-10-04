import { cn } from "@/utils/cn";

interface IContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
}

export const Container = ({ children, ...props }: IContainerProps) => {
	return (
		<div {...props} className={cn("max-w-[1248px] px-4 w-full mx-auto", props.className)}>
			{children}
		</div>
	);
};
