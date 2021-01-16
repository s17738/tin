import {tasksList} from './tasksApiMockData'

export function getTasksListApiCall() {
    return tasksList;
}

export function getTaskByIdApiCall(taskId) {
    return tasksList.find(t => t.id === taskId);
}