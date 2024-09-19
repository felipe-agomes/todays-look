import './Clothe.css';

export default function ContentRoot({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className={'content'}>{children}</div>;
}
