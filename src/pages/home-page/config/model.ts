type HomeModel = Array<HomeData>;

interface HomeData {
	id: string;
	contents: string;
	likes: number;
	tags: string[];
}

export type {
	HomeModel, HomeData
}
