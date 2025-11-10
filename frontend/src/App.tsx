import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Users from './pages/Users';
import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;