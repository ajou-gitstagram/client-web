type HonorModel = Array<HonorData>;

interface HonorData {
	id: string;
	winCount: number;
	contents: string;
	rank: number;
}

export type {
	HonorModel, HonorData
}
