import { useState } from "react";
import styled from "styled-components";
import Button from "./button.js";

const Form = styled.form`
	display: ${(props) => (props.show ? "inline-flex" : "none")};
	background-color: rgba(0, 0, 0, 0.05);
	padding: 20px;
	input {
		border: none;
		border-bottom: 2px solid darksalmon;
		outline: none;
		background: none;
	}
`;

const Formulaire = (props) => {
	const [task, setTask] = useState({ label: "", done: false });
	const handleChange = (value) => setTask({ label: value, done: false });
	const saveTask = (event) => {
		event.preventDefault();
		props.addTask(task);
		setTask({ label: "", done: false });
	};
	return (
		<Form show={props.show} onSubmit={saveTask}>
			<input
				type="text"
				placeholder="Intitulé de la tâche"
				value={task.label}
				onChange={(event) => handleChange(event.target.value)}
			/>
			<Button label="Ajouter" onClick={saveTask} />
		</Form>
	);
};

export default Formulaire;
