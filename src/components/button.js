import styled from "styled-components";

const B = styled.button`
	border: 2px solid darksalmon;
	background-color: white;
	border-radius: 5px;
	padding: 10px;
	margin: 0 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: darksalmon;
		color: white;
	}
`;

const Button = (props) => {
	const { label, onClick } = props;
	return (
		<B type="button" onClick={onClick}>
			{label ? label : props.children}
		</B>
	);
};

export default Button;
