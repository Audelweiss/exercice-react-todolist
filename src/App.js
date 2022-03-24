import { useState } from "react";

import "./App.css";
//composants
import Button from "./components/button.js";
import Formulaire from "./components/form.js";
import Task from "./components/task.js";

function App() {
	const [displayForm, setDisplayForm] = useState(false);
	const [tasks, setTasks] = useState([]);

	const updateTasks = (task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};
	const removeTask = (index) => {
		setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
	};
	const completeTask = (index) => {
		setTasks((prevTasks) => {
			return prevTasks.map((task, i) => {
				if (i !== index) {
					return task;
				} else {
					task.done = true;
					return task;
				}
			});
		});
	};
	return (
		<div className="App container">
			<header>
				<h1>Todolist</h1>
				<Button
					label={
						displayForm
							? "Fermer le formulaire"
							: "Ajouter une tâche"
					}
					onClick={() => setDisplayForm(!displayForm)}
				/>
			</header>
			<Formulaire show={displayForm} addTask={updateTasks} />
			<ul className="tasks-list">
				{tasks.map((task, index) => (
					<li key={index}>
						<Task
							label={task.label}
							done={task.done}
							remove={removeTask}
							complete={completeTask}
							index={index}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
