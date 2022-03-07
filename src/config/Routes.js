import {Switch,Route} from "react-router-dom";

import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Detail from "../pages/Detail/Detail";

import ErrorPage from "../service/errorPage/ErrorPage";

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/search/:keyword" component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={ErrorPage}/>
        </Switch>
    )
};

export default Routes;
