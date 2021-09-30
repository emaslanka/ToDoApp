import React from 'react';
import Tasks from "./Tasks";

const TaskList = ({tasks}) => {
    return (
        <>
            {
                tasks.map(el => <Tasks key={el.id} data={el} />)
            }
        </>
    );
};

export default TaskList;

