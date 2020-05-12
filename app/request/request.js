import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from '../action';

export default fetchUsers = () => {
    return dispatch => {
        // dispatch(fetchUsersPending());
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                console.log("response", res.data)
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchUsersSuccess(res.data))
                return res.data;
            })
            .catch(error => {
                // dispatch(fetchUsersError(error));
            })
    }
}