'use client'

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { eseaDivision, Team } from "@/models.types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function CreateTeamForm({eseaDivisions}: {
	eseaDivisions: eseaDivision[]
}) {
	const router = useRouter();
	const divisionMap = new Map(eseaDivisions.map((eseaDivision: eseaDivision) => [eseaDivision.id, eseaDivision.divisionName]));

	const [teamData, setTeamData] = useState<Team>({
		teamName: '',
		teamDesc: '',
		eseaDivision: {
			id: 6,
			divisionName: divisionMap.get(6)!
		}
	});

	function handleTeamDataChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e.target;
		setTeamData({
			...teamData,
			[name]: value,
		});
	}

	function handleEseaDivisionChange(e: ChangeEvent<HTMLSelectElement>) {
		const { name, value } = e.target;
		const selectedDivisionName  = divisionMap.get(parseInt(value))

		setTeamData({
			...teamData,
			eseaDivision: {
				...teamData.eseaDivision,
				[name]: parseInt(value),
				divisionName: selectedDivisionName!
			}
		});
	}

	return(
		<form className="flex flex-col rounded bg-white/5 p-3 space-y-3">
			<h1 className="text-xl font-bold">Create Team</h1>
			<div className="flex flex-col space-y-1">
				<label className="text-sm">Team Name</label>
				<input name="teamName" className="bg-white/5 p-2" onChange={e => handleTeamDataChange(e)}/>
			</div>
			<div className="flex flex-col space-y-1">
				<label className="text-sm">Team Description</label>
				<textarea name="teamDesc" className="bg-white/5 rounded p-2" rows={5} onChange={e => handleTeamDataChange(e)}></textarea>
			</div>
			<div className="flex flex-col space-y-1">
				<label className="text-sm">ESEA Division</label>
				<select name="id" className="appearance-none p-2 bg-white/5 rounded" onChange={e => handleEseaDivisionChange(e)}>
					{ eseaDivisions.map((eseaDivision: eseaDivision) => {
						return <option key={eseaDivision.id} value={eseaDivision.id}>{eseaDivision.divisionName}</option>
					})}
				</select>
			</div>
			<div className="flex justify-end space-x-1">
				<button 
					onClick={e => createTeam(e, teamData, router)}
					className="bg-blue-500 rounded py-0.5 px-2 hover:cursor-pointer">
					Submit
				</button>
				<Link href="/teams">
					<button className="bg-gray-500 rounded px-2 py-0.5 hover:cursor-pointer">Cancel</button>
				</Link>
			</div>
		</form>
	)
}

async function createTeam(e: React.SyntheticEvent, team: Team, router: AppRouterInstance) {
	e.preventDefault();

	try {
		await fetch(`${process.env.NEXT_PUBLIC_SERVER}/team/create`, {
			method: "POST",
			body: JSON.stringify(team)
		});
		router.push("/teams/")

	} catch(err) {
		console.error("Error creating new team", err);
	}
}
