import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Manage from "./pages/Manage.jsx";
import Main from "./pages/Main.jsx";
import Notify from "./pages/Notify.jsx";
import Schedule from "./pages/Schedule.jsx";

function App(){
    return (
    <Router>
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div id="Content" style={{
                position: "absolute",
                left: "160px",
                right: "0px",
                bottom: "0px",
                top: "52px",
                width: "calc(100%-160px)",
                height: "calc(100%-52px)"}}>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route path="/Manage">
                        <Manage />
                    </Route>
                    <Route path="/Notify">
                        <Notify />
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
    );
}

export default App;
