import Layout from "@/app/components/layout";
import { CreateAchievementForm } from "./AddAchievementForm";

export default function Page() {
	return(
		<Layout>
			<Content />
		</Layout>
	);
}

function Content() {
	return(
		<>
			<CreateAchievementForm />
		</>
	);
}
