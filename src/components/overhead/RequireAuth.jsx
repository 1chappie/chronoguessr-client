import {useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({elevation}) => {
    const {auth} = useAuth();
    const location = useLocation();

    if (auth) {
        if (elevation === "admin") { //wont add more roles than this so i might as well hardcode it
            if (auth?.user?.role === "admin") return <Outlet/>
            else return <Navigate to={"/unauthorized"} state={{from: location}} replace/>
        } else return <Outlet/>
    } else
        return <Navigate to={"/login"} state={{from: location}} replace/>
}

export default RequireAuth;