export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

function fetchUsersSuccess(users) {
    console.log("@ action",users)
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}

function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}
