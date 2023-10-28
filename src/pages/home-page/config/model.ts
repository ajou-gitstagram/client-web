type HomeModel = Array<HomeData>;

interface HomeData {
	uid: number;
	id: string;
	contents: string;
	likes: number;
	tags: string[];
}

export type {
	HomeModel, HomeData
}
