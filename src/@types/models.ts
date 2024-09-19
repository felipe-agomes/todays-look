export type UserInput = {
	email: string;
	password: string;
	image: string;
};
export type ClotheInput = {
	category: string | null;
	key: string | null;
	image: string | null;
	userId: string | null;
};
export type SetInput = {
	userId: string;
	category: string;
	clothes: Array<ClotheData & { x: number; y: number }>;
};
export type UserData = {
	id: number;
	email: string;
	name: string;
	image: string;
	updatedAt: Date;
	createdAt: Date;
};
export type ClotheData = {
	favorite: boolean;
	id: number;
	category: string;
	key: number;
	image: string;
	updatedAt: Date;
	createdAt: Date;
	userId: number;
};
export type CategorizedItem = {
	category: string;
};
export type SetData = {
	id: string;
	userId: string;
	category: string;
	favorite: boolean;
	createdAt: Date;
	updatedAt: Date;
	clothes: ClothePosition[];
};
export type ClothePosition = { x: number; y: number } & ClotheData;
