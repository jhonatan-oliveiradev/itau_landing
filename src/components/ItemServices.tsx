import Image from "next/image";

interface ItemServicesProps {
	description: string;
	icon: string;
	alt: string;
}

export function ItemServices({ alt, description, icon }: ItemServicesProps) {
	return (
		<li className="flex items-center gap-9 py-9 border-b">
			<div className="w-7 h-7 flex items-center justify-center">
				<Image src={icon} alt={alt} />
			</div>
			<p className="flex-1 text-txt-gray pr-2">{description}</p>
		</li>
	);
}
