import {useContext} from "react";
import {Outlet} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

import {Header} from "../components/HeaderComponent/Header";
import Loader from "../components/LoaderComponent/Loader";
import {Context} from "../index";


const MainLayout = () => {
    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
