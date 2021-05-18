import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import useToken from './hooks/useToken';


function App() {

  const { token, setToken } = useToken();
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute restricted={true} component={Login}
            token={token} setToken={setToken} path="/" exact />
          <PublicRoute restricted={true} component={Login}
            token={token} setToken={setToken} path="/login" exact />
          <PublicRoute restricted={true} component={SignUp}
            token={token} setToken={setToken} path="/signup" exact />
          <PrivateRoute component={Dashboard}
            token={token} setToken={setToken} path='/dashboard' exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
