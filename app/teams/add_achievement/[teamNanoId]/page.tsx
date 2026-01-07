import Layout from "../../../components/layout";
import { CreateAchievementForm } from "./AddAchievementForm";

export default async function Page({params}: {
    params: Promise<{ teamNanoId: string }>
}) {
    const {teamNanoId} = await params
	return(
		<Layout>
			<Content teamNanoId={teamNanoId}/>
		</Layout>
	);
}

function Content({teamNanoId}: {
    teamNanoId: string
}) {
	return(
		<>
			<CreateAchievementForm teamNanoId={teamNanoId}/>
		</>
	);
}
