import Link from "next/link"
import { ReactNode } from "react"

export default function Layout({ children }: {
	children: ReactNode
}) {
	return(
		<div className="flex justify-center">
            <div className="flex flex-col min-h-screen px-8 justify-between lg:w-3/5 2xl:w-2/3 w-full">
				<Navbar />
				<main className="flex-grow pt-2">{children}</main>
				<Footer />
			</div>
		</div>
	)
}

function Navbar() {
	return(
		<div className="flex justify-between py-2 items-center">
			<h1 className="text-2xl font-bold"><Link href="/">bstack</Link></h1>
			<ul className="flex space-x-3 font-semibold">
				<li>
					<Link href="/">
					Home
					</Link>
				</li>
				<li>
					<Link href="/teams">
						Teams
					</Link>
				</li>
				<li>
					<Link href="/players">
						Players
					</Link>
				</li>
			</ul>
		</div>
	)
}

function Footer() {
	return(
		<div>footer</div>
	)
}
