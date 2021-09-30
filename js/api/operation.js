import {API_URL,API_KEY} from "./constants";
import getTasks from "./tasks";

export const getOperations = async (id, successCallback) => {

    try {

        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {

            headers: {

                Authorization: API_KEY,

            },

        });


        const data = await response.json();


        if (data.error || typeof successCallback !== "function") {

            throw new Error("Błąd!");

        }


        successCallback(data.data);

    } catch (err) {

        console.log(err);

    }

};

export const setNewTaskAPI = async (newTask, successCallback) => {

    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: "POST",

            headers: {

                Authorization: API_KEY,
                "ContentType": "application/json"

            },
            body: JSON.stringify(newTask)

        });


        const data = await response.json();
        console.log(data);


        if (data.error) {

            throw new Error("Błąd!");

        }
        getTasks(successCallback);



    } catch (err) {

        console.log(err);

    }

};