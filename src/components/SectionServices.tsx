import CardIcon from "@/assets/icon-card.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionIcon from "@/assets/icon-solutions.svg";
import PhoneImage from "@/assets/phone.png";

import { Container } from "./Container";
import { ItemServices } from "./ItemServices";
import Image from "next/image";

const items = [
	{
		id: 1,
		icon: PhoneIcon,
		description:
			"Acompanhar sua conta, fazer transferências e pagamentos de onde estiver",
		alt: "Ícone de um celular"
	},
	{
		id: 2,
		icon: SolutionIcon,
		description:
			"Soluções de emprétimos e renegociação para organizar suas finanças",
		alt: "Ícone uma mão com uma cédula"
	},
	{
		id: 3,
		icon: OptionsIcon,
		description:
			"Diversas opções de investimentos, de acordo com o seu perfil de investidor",
		alt: "Ícone de um dashboard e um usuário"
	},
	{
		id: 4,
		icon: CardIcon,
		description:
			"Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual",
		alt: "Ícone de um cartão de crédito"
	}
];

export function SectionServices() {
	const renderItems = items.map((item) => (
		<ItemServices
			key={item.id}
			description={item.description}
			icon={item.icon}
			alt={item.alt}
		/>
	));

	return (
		<section className="relative w-full h-[965px]">
			<Container>
				<div className="flex-1 max-w-[594px] pt-32">
					<span className="uppercase text-primary-orange text-sm font-bold mb-9 block">
						serviços exclusivos
					</span>
					<h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
						Gerencie suas finanças sem sair de casa
					</h2>
					<p className="text-lg max-w-[554px] mb-16 text-primary-gray">
						Veja como você pode cuidar das suas finanças pelo app Itaú de forma
						segura, rápida e o melhor, no conforto da sua casa.
					</p>
					<ul>{renderItems}</ul>
				</div>
			</Container>
			<div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
				<Image
					src={PhoneImage}
					alt="Imagem de um celular com o App Itaú aberto"
					className="translate-x-[-50%]"
				/>
			</div>
		</section>
	);
}
