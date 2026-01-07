
export interface eseaDivision {
	id?: number | undefined;
	divisionName: string;
}

export interface Team {
	id?: number;
	nanoId?: string;
	teamName: string;
	teamDesc: string;
	eseaDivision: eseaDivision;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
}

export interface TeamAchievement {
    id?: number;
    teamNanoId: string;
    event: string;
    placement: string;
    details: string;
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
