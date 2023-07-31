import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN-START"});
    try {
        const res = await axios.post("auth/login", userCredential);
        dispatch({ type: "LOGIN-SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "LOGIN-FAILURE", payload: error });
    }
}
