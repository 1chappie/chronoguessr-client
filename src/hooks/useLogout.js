import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const {setAuth} = useAuth();
    return async () => {
        try {
            await axios.delete("/auth/logout", {
                withCredentials: true
            });
            setAuth(null);
        } catch (error) {
            console.error(error);
        }
    };
}

export default useLogout;