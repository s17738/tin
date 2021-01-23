const baseUrl = 'http://localhost:8080/api'

export function getUsersList() {
    return fetch(baseUrl + '/users');
}

export function getUserById(id) {
    return fetch(baseUrl + '/users/' + id)
}

export function deleteUserById(id) {
    return fetch(baseUrl + '/users/' + id, {method: 'DELETE'})
}