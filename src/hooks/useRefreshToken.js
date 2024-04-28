import axios from '../api/axios';
import useAuth from "./useAuth";
import {jwtDecode} from "jwt-decode";

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();
    return async () => {
        try {
            console.log("Refreshing token...")
            const response = await axios.post("/auth/token", {}, {
                withCredentials: true
            });
            console.log("Token refreshed.")
            const accessToken = response?.data?.accessToken;
            const decoded = jwtDecode(accessToken);
            console.log("Decoded token:", decoded)
            setAuth({accessToken, user: decoded});
            console.log("New access token set in auth:", accessToken)
            return accessToken;
        } catch (error) {
            if (error.response?.status === 401) {
                console.log("Refresh token is invalid or doesn't exist.");
            }else {
                console.error(error);
            }
        }
    };
}

export default useRefreshToken;