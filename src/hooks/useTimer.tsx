import { useEffect, useState } from "react";

interface IUseTimer {
	min: number;
	sec: number;
}

export const useTimer = ({ min, sec }: IUseTimer) => {
	const [seconds, setSeconds] = useState(sec);
	const [minutes, setMinutes] = useState(min);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds((prevSec) => {
				if (prevSec > 0) {
					return prevSec - 1;
				} else {
					if (minutes > 0) {
						setMinutes((prevMin) => prevMin - 1);
						return 59;
					} else {
						clearInterval(timer);
						return 0;
					}
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [minutes]);
	return { seconds, minutes };
};
