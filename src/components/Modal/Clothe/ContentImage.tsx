import S from './Clothe.module.css';

export default function ContentImage({
	image,
	category,
}: {
	image: string | undefined;
	category: string | undefined;
}) {
	return (
		<div className={S.imageContain}>
			<img
				src={image}
				alt={`Roupa: ${category}`}
			/>
		</div>
	);
}
