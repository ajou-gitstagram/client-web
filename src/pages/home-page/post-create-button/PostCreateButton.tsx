import S from './PostCreateButton.module.css';
import {Link} from "react-router-dom";

const PostCreateButton = () => {
	return (
		<Link to={'/post'} >
			<div className={S['create-button']}>+</div>
		</Link>
	)
}

export default PostCreateButton;
