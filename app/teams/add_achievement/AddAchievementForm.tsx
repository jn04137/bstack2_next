'use client';

import Link from "next/link";

export function CreateAchievementForm({teamNanoId}: {
	teamNanoId: string
}) {
	return(
		<form className="flex flex-col w-full bg-white/5 p-3 space-y-3">
			<h1 className="text-xl font-bold">Add Achievement</h1>
			<div className="flex flex-col space-y-1">
				<label>Event</label>
				<input className="bg-white/5 p-2 rounded" type="text"/>
			</div>
			<div className="flex flex-col space-y-1">
				<label>Placement</label>
				<input className="bg-white/5 p-2 rounded" type="text"/>
			</div>
			<div className="flex flex-col space-y-1">
				<label>Date</label>
				<input className="bg-white/5 p-2 rounded" type="date"/>
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
