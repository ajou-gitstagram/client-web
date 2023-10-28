interface props {
	height: number;
}

const Blank = ({ height }: props) => {
	return <div style={{ height: `${height}px`, width: '100%' }} />;
}

export default Blank;
