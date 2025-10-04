import { cn } from "@/utils/cn";
import { Card } from "../ui/card";

interface IProductCardProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	isBest: boolean;
	price: number;
	fullPrice: number;
	period: string;
	text: string;
	select: boolean;
	onClick?: () => void;
}

export const ProductCard = ({
	fullPrice,
	isBest,
	price,
	period,
	text,
	select,
	...props
}: IProductCardProps) => {
	return (
		<Card
			{...props}
			className={cn(
				"relative px-[18px] max-lg:px-[30px] max-lg:flex max-lg:gap-[50px]",
				isBest &&
					"col-span-3 max-lg:col-span-1 relative pl-[122px] pr-[80px] pt-[34px] pb-[30px] max-lg:px-[30px]",
				select && "border-orange"
			)}
		>
			<div className="px-2 py-[5px] rounded-b-lg bg-[#FD5656] w-fit absolute top-0 min-lg:left-[50px] max-lg:right-[62px]">
				-{Math.floor(100 - (price / fullPrice) * 100)}%
			</div>
			{isBest && (
				<div className="absolute top-[10px] right-5 text-orange text-[22px] max-lg:right-[14px] max-lg:top-[6px]">
					хит!
				</div>
			)}

			<div
				className={cn(
					"flex flex-col max-lg:flex-row max-lg:gap-10",
					isBest && "flex-row gap-10"
				)}
			>
				<div className={cn("flex flex-col w-fit mx-auto", isBest && "mx-0")}>
					<span
						className={cn(
							"text-center font-medium text-[26px] max-lg:text-lg pb-[30px] max-lg:text-start max-lg:pb-0",
							isBest && "pb-0"
						)}
					>
						{period}
					</span>
					<span
						className={cn(
							"font-semibold text-[50px] max-lg:text-[36px] leading-[100%] text-nowrap text-center",
							isBest && "text-orange"
						)}
					>
						{price} ₽
					</span>
					<span className="text-end line-through text-[#919191] text-2xl leading-[120%]">
						{fullPrice} ₽
					</span>
				</div>
				<span className="block leading-[130%] mt-[40px]">{text}</span>
			</div>
		</Card>
	);
};
