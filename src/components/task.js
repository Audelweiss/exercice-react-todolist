import { useState } from "react";
import styled from "styled-components";
import Button from "./button.js";

const Div = styled.div`
	background-color: rgba(0, 0, 0, 0.03);
	display: flex;
	padding: 20px;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	border-radius: 10px;
	&.completed h4 {
		color: grey;
		text-decoration: line-through;
	}
`;

const Task = (props) => {
	const { label, done, complete, remove, index } = { ...props };

	return (
		<Div className={done ? "completed" : ""}>
			<h4>{label}</h4>
			<div>
				{!done && (
					<Button onClick={() => complete(index)}>
						<img src="/check-list.png" />
					</Button>
				)}
				<Button onClick={() => remove(index)}>
					<img src="/delete-forever.png" />
				</Button>
			</div>
		</Div>
	);
};

export default Task;
