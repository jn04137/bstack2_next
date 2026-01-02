
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

