import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Banco Itaú | Feito com você",
	description:
		"Inspirado por você, o Itaú muda todo dia. O Itaú é feito com você!"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={lato.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
