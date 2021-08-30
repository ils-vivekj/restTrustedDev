import React from 'react';
// import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { NavigationBar } from './component/NavigationBar';
import {Home} from './Home';
import { Layout } from './Layout';
import NoMatch from './NoMatch';
// import NoMatch from './NoMatch';
import {Profile} from './Profile';



function App() {
  return (
    // <div>Vivek</div>
     <React.Fragment>
       <Layout>
       <Router>        
       <NavigationBar />
         <Switch>
           <Route exact path="/"  component={Home} />  
           <Route path="/profile"  component={Profile} /> 
           <Route component={NoMatch} />
          </Switch>
     
      </Router>
      </Layout>
     </React.Fragment>
  );
}

export default App;
