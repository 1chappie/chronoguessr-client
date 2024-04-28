import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth, setAuth} = useAuth();

    useEffect(() => {
        const verify = async () => {
            try {
                console.log("Verifying token...")
                await refresh();
                console.log("Awaiting done.")
            } catch (error) {
                console.log(error);
            } finally {
                console.log("Setting isLoaded to true.")
                setIsLoading(false);
            }
        }
        if(!auth?.accessToken) {
            console.log("No access token found.")
            verify();
        } else {
            setIsLoading(false);
        }
        // !auth?.accessToken ? verify() : setIsLoaded(true);
    }, []);

    useEffect(() => {
        console.log("Auth:", auth);
    }, [auth, isLoading]);

    return (<>
        {isLoading ? <h1>Loading...</h1> : <Outlet />}
    </>)
}

export default PersistLogin;