type RankModel = Array<RankData>;

interface RankData {
	id: string;
	commits: number;
}

export type {
	RankModel, RankData
}
