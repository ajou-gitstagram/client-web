type HomeModel = Array<HomeData>;

interface HomeData {
	uid: number;
	id: string;
	content: string;
	like: number;
	tag: string|string[];
}

export type {
	HomeModel, HomeData
}
