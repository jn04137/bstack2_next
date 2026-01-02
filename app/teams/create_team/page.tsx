import Layout from "../../components/layout";
import { CreateTeamForm } from "./create_team_form";

export default function Page() {
	return(
		<Layout>
			<Content/>
		</Layout>
	);
}

async function Content() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/team/eseaDivisions`);
	const eseaDivisions = await res.json();

	return(
		<>
			<CreateTeamForm eseaDivisions={eseaDivisions}/>
		</>
	);
}
