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

export function addUser(user) {
    return fetch(baseUrl + '/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export function updateUser(id, user) {
    return fetch(baseUrl + '/users/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}