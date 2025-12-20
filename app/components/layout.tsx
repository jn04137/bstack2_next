import { ReactNode } from "react"

export default function Layout({ children }: {
	children: ReactNode
}) {
	return(
		<div className="flex justify-center">
			<div className="flex flex-col px-5 justify-between w-2/3">
				<Navbar />
				<main className="pt-2">{children}</main>
				<Footer />
			</div>
		</div>
	)
}

function Navbar() {
	return(
		<div className="flex justify-between py-2">
			<h1>bstack</h1>
			<ul className="flex space-x-3">
				<li>Home</li>
				<li>Teams</li>
				<li>Players</li>
			</ul>
		</div>
	)
}

function Footer() {
	return(
		<div>footer</div>
	)
}
