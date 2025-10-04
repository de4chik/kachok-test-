"use client";
import { useGetProductsQuery } from "@/api/getproduct";
import { ProductCard } from "@/components/entities/productCard";
import { Header } from "@/components/shared/header";
import { SceletonProduct } from "@/components/shared/sceletonProduct";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Container } from "@/components/ui/container";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const { data, isLoading } = useGetProductsQuery("");
	const [active, setActive] = useState<null | number>(null);
	return (
		<>
			<Header />
			<Container className="pt-[50px]">
				<h1 className={cn("font-bold text-[40px] text-white")}>
					Выбери подходящий для себя <span className="text-orange">тариф</span>
				</h1>
				<div className="flex pt-[110px] gap-[87px] max-xl:gap-0 max-xl:flex-col max-xl:pt-5">
					<div className="flex-1 relative h-max">
						<Image
							src={"/man.png"}
							alt="man"
							width={380}
							height={767}
							className="max-xl:h-[250px] max-xl:w-[124px] max-xl:mx-auto"
						/>
						<div className="absolute w-full h-20 bg-linear-to-b from-transparent to-dark bottom-0 left-0"></div>
					</div>
					<div className="flex-2">
						<div className="grid grid-cols-3 gap-[14px] max-lg:grid-cols-1">
							{!isLoading ? (
								data &&
								[...data]
									.reverse()
									.map(({ full_price, is_best, period, price, text }, i) => (
										<ProductCard
											fullPrice={full_price}
											isBest={is_best}
											period={period}
											price={price}
											text={text}
											key={i}
											select={active !== null ? active === i : is_best}
											onClick={() => setActive(i)}
										/>
									))
							) : (
								<>
									<SceletonProduct className="col-span-3 h-40 max-lg:col-span-1 max-lg:h-64" />
									<SceletonProduct className="h-64" />
									<SceletonProduct className="h-64" />
									<SceletonProduct className="h-64" />
								</>
							)}
						</div>
						<label className="text-white flex gap-3 mt-[30px]">
							<Checkbox />
							<p>
								Я согласен с{" "}
								<span className="underline">офертой рекуррентных платежей</span>{" "}
								и
								<span className="underline">
									Политикой <br /> конфиденциальности
								</span>
							</p>
						</label>
						<Button className="mt-4 max-lg:max-w-full">Купить</Button>
						<p className="block mt-[14px] text-light text-sm">
							Нажимая кнопку «Купить», Пользователь соглашается на разовое
							списание денежных средств для получения пожизненного доступа к
							приложению. Пользователь соглашается, что данные
							кредитной/дебетовой карты будут сохранены для осуществления
							покупок дополнительных услуг сервиса в случае желания
							пользователя.
						</p>
					</div>
				</div>
				<Card className="p-5 bg-[none] my-[66px]">
					<Card className="px-[30px] pb-[18px] pt-[16px] w-fit text-[28px] leading-[120%] rounded-[30px] bg-[#2D3233] border-[#81FE95] text-[#81FE95] max-lg:text-lg">
						гарантия возврата 30 дней
					</Card>
					<p className="block mt-[30px] text-2xl leading-[130%] text-[#DCDCDC] max-lg:text-sm">
						Мы уверены, что наш план сработает для тебя и ты увидишь видимые
						результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
						деньги в течение 30 дней с момента покупки, если ты не получишь
						видимых результатов.
					</p>
				</Card>
			</Container>
		</>
	);
}
