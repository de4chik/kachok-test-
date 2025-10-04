"use client";
import { Star } from "@/assets/star";
import { useTimer } from "@/hooks/useTimer";
import { cn } from "@/utils/cn";

export const Header = () => {
	const { minutes, seconds } = useTimer({ min: 2, sec: 59 });

	return (
		<header className={cn("text-center bg-dark-green py-2 text-white font-semibold flex flex-col text-2xl")}>
			<span>Успейте открыть пробную неделю</span>
			<div className={cn("flex items-center mx-auto gap-2")}>
				<Star className={cn('fill-[#FFBB00]',minutes < 1 && seconds <= 30 && "fill-[#FF4E4E] animate-pulse", seconds == 0 && minutes == 0 && "fill-white animate-none")} />
				<span className={cn("font-bold text-[40px] font-Raleway leading-[110%] uppercase lining-nums text-[#FFBB00]", minutes < 1 && seconds <= 30 && "text-[#FF4E4E] animate-pulse", seconds == 0 && minutes == 0 && "text-white animate-none")}>
					{minutes}:{seconds.toString().padStart(2, "0")}
				</span>
				<Star className={cn('fill-[#FFBB00]',minutes < 1 && seconds <= 30 && "fill-[#FF4E4E] animate-pulse", seconds == 0 && minutes == 0 && "fill-white animate-none")} />
			</div>
		</header>
	);
};
