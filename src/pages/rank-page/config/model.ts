type RankModel = Array<RankData>;

interface RankData {
	id: string;
	commits: number;
	rank: number;
}

export type {
	RankModel, RankData
}
