import { SetData } from "../../@types/models";

type Pops = {
	set: SetData | undefined;
	proportion?: {
		x: number;
		y: number;
	};
	size?: {
		height: number;
		width: number;
	};
};

export default function SetImages({
	set,
	size = { height: 64, width: 64 },
	proportion = { x: 0.72, y: 0.72 },
}: Pops) {
	return (
		<>
			{set?.clothes.map((clothe) => {
				return (
					<div
						style={{
							position: 'absolute',
							top: `calc(50% - ${size.height / 2 - 2}px)`,
							left: `calc(50% - ${size.width / 2 - 2}px)`,
							width: `${size.width}px`,
							height: `${size.height}px`,
							transform: `translate(${clothe.x * proportion.x}px, ${
								clothe.y * proportion.y
							}px)`,
						}}
						key={clothe.id}
					>
						<img
							src={clothe.image}
							alt='Roupa'
						/>
					</div>
				);
			})}
		</>
	);
}
