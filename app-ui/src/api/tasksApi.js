const baseUrl = 'http://localhost:8080/api/tasks'

export function getTasksList() {
    return fetch(baseUrl);
}

export function getTaskById(id) {
    return fetch(baseUrl + '/' + id)
}

export function deleteTaskById(id) {
    return fetch(baseUrl + '/' + id, {method: 'DELETE'})
}

export function addTask(task) {
    task.startDate = task.startDate + ':00.000Z'
    task.endDate = task.endDate + ':00.000Z'
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
}

export function updateTask(id, task) {
    task.startDate = task.startDate + ':00.000Z'
    task.endDate = task.endDate + ':00.000Z'
    return fetch(baseUrl + '/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
}