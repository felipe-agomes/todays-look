import './Clothe.css';

export default function ContentImage({
	image,
	category,
}: {
	image: string | undefined;
	category: string | undefined;
}) {
	return (
		<div className={'imageContain'}>
			<img
				src={image}
				alt={`Roupa: ${category}`}
			/>
		</div>
	);
}
