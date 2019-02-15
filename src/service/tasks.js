import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://zzcjg61s0j.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data = await res.data;
        return data;
    }

    /// async saveTask() {} is another function to use. put a comma after last function
};

export default TasksService;
