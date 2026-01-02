import Layout from "../components/layout";

export default async function Page() {
	return(
		<Layout>
			<Content />
		</Layout>
	);
}

function Content() {
	return(
		<div>Players page</div>
	);
}
