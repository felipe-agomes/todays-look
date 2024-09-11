import { SetData } from "../../../@types/models";
import SetImages from "../../SetImages";

export default function ContentImage({ set }: { set: SetData | undefined }) {
	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '242px',
				height: '309.22px',
				background: '#fff',
				overflow: 'hidden',
			}}
		>
			<SetImages
				size={{ height: 86.04, width: 86.04 }}
				set={set}
				proportion={{ x: 0.67, y: 0.67 }}
			/>
		</div>
	);
}
