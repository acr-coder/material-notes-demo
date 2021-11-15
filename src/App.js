import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: {
      main: deepOrange[500]
    }
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  const [notes, setNotes] = useState([])
  
  return (
    <ThemeProvider theme={theme} >
    <Router>
      <Layout notes={notes}  >
      <Switch>
        <Route exact path="/">
          <Notes notes={notes} setNotes={setNotes} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
