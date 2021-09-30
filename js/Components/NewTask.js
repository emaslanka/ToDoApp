import React, {useState,useEffect} from 'react';

const NewTask = ({onNewTask}) => {
    const [task, setTask] = useState({title: " ", description: " ", status: "opened", });

    const submitHandler = (e)=>{
        if(typeof e.persist==="function"){
            e.persist();
        }
        e.preventDefault();
        if(typeof onNewTask == "function"){
            onNewTask(task)
        }

    }

    const inputHandler = (e)=>{

        if(typeof e.persist==="function"){
            e.persist();
        }

       setTask(prev=>{
            return{
                ...prev,
                [e.target.name]: e.target.value
            }});
    }



    return (
        <div>
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">New task</h1>
                    <form onSubmit={e=>submitHandler}>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name="title"
                                   placeholder="Title"


                                   value={task.title}
                                   onChange={e=> inputHandler(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name="description"
                                   placeholder="Description"

                                   value={task.description}
                                   onChange={e=> inputHandler(e)}


                            />
                        </div>
                        <button className="btn btn-info">
                            Add task
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewTask;