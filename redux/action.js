export const LoginSuccess = 'LoginSuccess';

export const LoginData = user => dispatch => {
    dispatch({
        type: LoginSuccess,
        payload: user
    });
};