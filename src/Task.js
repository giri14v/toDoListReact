export const Task = (props) => {
    return(
        <div className='task' style={{backgroundColor: props.completed ? "Green" : "Red"}}>
            <h4>{props.id}. {props.taskName}</h4>
            <button className="completebutton" onClick={() => props.compeleteTask(props.id)}>Complete</button>
            <button className="deletebutton"onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
};