import {usersList} from './usersApiMockData'

export function getUsersListApiCall() {
    return usersList;
}

export function getUserByIdApiCall(id) {
    return usersList.find(t => t.id === id);
}