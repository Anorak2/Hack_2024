import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Manage from "./pages/Manage.jsx";
import Main from "./pages/Main.jsx";

function App(){
    return (
    <Router>
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div id="Content" style={{marginLeft: "160px"}}>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/Manage">
                        <Manage />
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
    );
}

export default App;
