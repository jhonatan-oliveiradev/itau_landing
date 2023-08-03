import IconSearch from "@/assets/icon-search.svg";
import Image from "next/image";

export function Search() {
	return (
		<div className="flex tiems-center gap-4">
			<Image src={IconSearch} alt="Ícone de pesquisa" />
			<input
				type="text"
				className="bg-transparent outline-none pr-4 text-white placeholder:text-white"
				placeholder="Buscar"
			/>
		</div>
	);
}
