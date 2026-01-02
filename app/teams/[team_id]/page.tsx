
import Link from "next/link";
import Layout from "../../components/layout";

export default async function Page({params}: {
	params: Promise<{ team_id: string }>
}) {
	const {team_id} = await params 

	return(
		<Layout>
			<Content teamId={team_id} />
		</Layout>
	)
}

const sectionTitleStyle = "text-sm italic pb-1.5";

function Content({teamId}: {
	teamId: string
}) {
	return(
		<div className="space-y-5">
			<div className="flex space-x-2">
				<TeamName teamName={"Turtle Squad"} />
			</div>
			<TeamDesc teamDesc={"Here to win"} />
			<Players />
			<Achievements />
			<CommentSection />
		</div>
	);
}

function TeamName({teamName}: {
	teamName: string
}) {
	return(
		<div className="flex-1">
			<h2 className={sectionTitleStyle}>team</h2>
			<h1 className="text-3xl font-bold bg-white/5 rounded p-3">{teamName}</h1>
		</div>
	);
}

function TeamDesc({teamDesc}: {
	teamDesc: string
}) {
	return(
		<div className="flex-1">
			<h2 className={sectionTitleStyle}>description</h2>
			<h1 className="text-lg bg-white/5 rounded p-3">{teamDesc}</h1>
		</div>
	);
}

function Players() {
	return(
		<div>
			<h2 className={sectionTitleStyle}>players</h2>
			<div className="flex justify-between space-x-2">
				<PlayerCard/>
				<PlayerCard/>
				<PlayerCard/>
				<PlayerCard/>
				<PlayerCard/>
			</div>
		</div>
	);
}

function PlayerCard() {
	return(
		<div className="bg-white/5 rounded p-3 grow">
			<h2>Donatelo</h2>
		</div>
	);
}

function Achievements() {
	return(
		<div>
			<h2 className={sectionTitleStyle}>achievements</h2>
			<div className="space-y-3">
				<AchievementCard/>
				<AchievementCard/>
				<AchievementCard/>
				<AchievementCard/>
				<AchievementCard/>
				<AchievementCard/>
				<AddAchivementButton/>
			</div>
		</div>
	);
}

function AddAchivementButton() {
	return(
		<div>
			<Link href="/teams/add_achievement">
				<button className="text-sm w-full border border-white/5 rounded py-1.5 hover:cursor-pointer bg-white/5">Add Achievement</button>
			</Link>
		</div>
	);
}

function AchievementCard() {
	return(
		<div className="flex justify-between bg-white/5 rounded p-3" >
			<div>
				<h1>Fragadelphia Saint Louis</h1>
			</div>
			<div>
				<h1>3rd</h1>
			</div>
			<div>
				<h1>2022</h1>
			</div>
		</div>
	);
}

function CommentSection() {
	return(
		<div className="space-y-2">
			<h2 className={sectionTitleStyle}>comments</h2>
			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />
		</div>
	);
}

function CommentCard() {
	return(
		<div>
			<p className="bg-white/5 rounded p-3">This team is stinky</p>
		</div>
	);
}

