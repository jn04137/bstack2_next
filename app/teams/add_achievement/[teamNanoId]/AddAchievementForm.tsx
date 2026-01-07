'use client';

import { TeamAchievement } from "@/models.types";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export function CreateAchievementForm({teamNanoId}: {
	teamNanoId: string
}) {
    const [teamAchievement, setTeamAchievement] = useState<TeamAchievement>({
        teamNanoId: teamNanoId,
        event: '',
        placement: '',
        details: '',
        date: new Date()
    });

    function handleAchievementChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target;
        setTeamAchievement({
            ...teamAchievement,
            [name]:value,
        });
    }

	return(
		<form className="flex flex-col w-full bg-white/5 p-3 space-y-3">
			<h1 className="text-xl font-bold">Add Achievement</h1>
			<div className="flex flex-col space-y-1">
				<label>Event</label>
                <input className="bg-white/5 p-2 rounded" type="text" name="event" onChange={e => handleAchievementChange(e)}/>
			</div>
			<div className="flex flex-col space-y-1">
				<label>Placement</label>
                <input className="bg-white/5 p-2 rounded" type="text" name="placement" onChange={e => handleAchievementChange(e)}/>
			</div>
			<div className="flex flex-col space-y-1">
				<label>Details</label>
                <textarea className="bg-white/5 p-2 rounded" name="details" rows={4} onChange={e => handleAchievementChange(e)}></textarea>
			</div>
			<div className="flex flex-col space-y-1">
				<label>Date</label>
                <input className="bg-white/5 p-2 rounded" type="date" name="date" onChange={e => handleAchievementChange}/>
			</div>
			<div className="flex justify-end space-x-1">
				<button className="bg-blue-500 rounded py-0.5 px-2 hover:cursor-pointer">Submit</button>
				<Link href={`/teams/${teamNanoId}`}>
					<button className="bg-gray-500 rounded px-2 py-0.5 hover:cursor-pointer">Cancel</button>
				</Link>
			</div>
		</form>
	);
}

async function addAchievementRequest(e: SyntheticEvent, teamAchievement: TeamAchievement) {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_SERVER}/team/addAchievement`, {
        method: 'POST',
        body: JSON.stringify({
            teamAchievement
        }),
    });
}
