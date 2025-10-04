import { cn } from "@/utils/cn";
import { Card } from "../ui/card";

export const SceletonProduct = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return <Card className={cn("animate-pulse",className)}>{children}</Card>;
};
