
async function getTeams() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/team/all`)
	if (!res.ok) {
		console.error("Failed to fetch data")
	}
	return res.json()
}

export default async function Page() {
	const teams = await getTeams()
	console.log(teams)

	return(
		<div>
			<h1>Teams</h1>
			<TeamCard/>
			<TeamCard/>
			<TeamCard/>
		</div>
	)
}

function TeamCard() {
	return(
		<div className="bg-white/5 rounded p-3">
			<div>
				<h1>Team Name</h1>
			</div>
			<div>
				<p>This is the team</p>
			</div>
		</div>
	)
}
