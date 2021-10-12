import './App.css';
import List from "./componentes/List";
import Create from "./componentes/Create";
import Edit from "./componentes/Edit";
import Edit_Legal  from './componente_juridico/Edit_Legal ';
import Edit_natural from './componente_natural/Edit_natural';
import Edit_Built from './componente_construido/Edit_Built';
import Editar_terrain from './componente_terreno/Editar_terrain';

import { Route , BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">

              <Link className="nav-item nav-link active" to={"/"}> Sistema predial <span className="sr-only"></span></Link>
             
          </div>
      </nav>

    <div className="container">
      <br></br>
      
        <Route exact path="/" component={List}></Route>
        <Route path="/create" component={Create}></Route>
        <Route path="/edit/:id" component={Edit}></Route>
        <Route path="/editlegal/:id" component={Edit_Legal }></Route>
        <Route path="/editnatural/:id" component={Edit_natural}></Route>
        <Route path="/editbuilt/:id" component={Edit_Built}></Route>
        <Route path="/editterrain/:id" component={Editar_terrain}></Route>
    </div>
    </Router>
  );
}
export default App;
