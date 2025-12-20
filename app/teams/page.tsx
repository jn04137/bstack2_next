import Layout from "../components/layout";

interface Team {
	id: number;
	nanoId: string;
	teamName: string;
	teamDesc: string;
	createdAt: string;
	updatedAt: string;
}

async function getTeams() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/team/all`)
	if (!res.ok) {
		console.error("Failed to fetch data")
	}
	return res.json()
}

export default async function Page() {
	return(
		<Layout>
			<Content />
		</Layout>
	)
}

async function Content() {
	const teams: Team[] = await getTeams()
	console.log(teams)

	return(
		<div>
			<h1 className="text-3xl font-bold">Teams</h1>
			{ teams.map((team) => (
				<TeamCard key={team.id} team={team} />
			))}
		</div>
	)
}

function TeamCard({team}: {
	team: Team
}) {
	return(
		<div className="bg-white/5 rounded p-3 rounded">
			<div>
				<h1 className="text-2xl font-bold">{team.teamName}</h1>
			</div>
			<div>
				<p>{team.teamDesc}</p>
			</div>
		</div>
	)
}
