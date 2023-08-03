import Image from "next/image";
import Arrow from "@/assets/arrow-down.svg";

type ItemMenuProps = {
	name: string;
};

export function ItemMenu({ name }: ItemMenuProps) {
	return (
		<button className="flex items-center gap-3">
			<span className="text-white font-bold">{name}</span>
			<Image src={Arrow} alt="seta para baixo" />
		</button>
	);
}
