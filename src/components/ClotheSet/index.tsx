import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { ClothePosition } from "../../@types/models";

type Props = {
	clothe: ClothePosition;
	updateClothePosition: (id: string, y: number, x: number) => void;
};

export default function ClotheSet({ clothe, updateClothePosition }: Props) {
	function handleStop(event: DraggableEvent, data: DraggableData) {
		updateClothePosition(clothe.id, data.y, data.x);
	}

	return (
		<Draggable onStop={handleStop}>
			<div
				style={{
					top: 'calc(50% - 60px)',
					left: 'calc(50% - 60px)',
					position: 'absolute',
					width: '128px',
					height: '128px',
				}}
			>
				<img
					draggable={false}
					src={clothe.image}
					alt='Roupa'
				/>
			</div>
		</Draggable>
	);
}
