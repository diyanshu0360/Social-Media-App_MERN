const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN-START":
            return {
                user: null,
                isFetching: true,
                error: false
            };

        case "LOGIN-SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };

        case "LOGIN-FAILURE":
            return {
                user: null,
                isFetching: true,
                error: action.payload
            };

        default: 
            return state;
    }
}

export default AuthReducer;