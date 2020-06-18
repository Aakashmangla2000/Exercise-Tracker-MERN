import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateUser from './components/CreateUser'
import CreateExercise from './components/CreateExercise'


function App() {
  return (
    <Router>
          <Navbar/>

    <div className="container">
    <br/>
    <Route path='/' exact component={ExerciseList} />
    <Route path='/edit/:id' exact component={EditExercise} />
    <Route path='/create' exact component={CreateExercise} />
    <Route path='/user' exact component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
