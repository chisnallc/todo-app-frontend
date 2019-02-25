import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://zzcjg61s0j.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data = await res.data;
        return data;
    },

    async saveTask(task) {
        let res = await axios.post("https://zzcjg61s0j.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res.data;
    },

    async deleteTask(taskId) {
        let res = await axios.delete("https://zzcjg61s0j.execute-api.eu-west-2.amazonaws.com/dev/tasks" + taskId);
        return res.data;
    }
    ///takes in a json object

};

export default TasksService;
