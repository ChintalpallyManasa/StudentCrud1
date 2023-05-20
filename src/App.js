import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import CreateStudent from './Components/create-student.component';
import EditStudent from './Components/edit-student.component';
import StudentList from './Components/student-list.component';
import StudentInfo from './Components/student-info.component';
import HeaderComponent from './Components/header.component';
import FooterComponent from './Components/footer.component';
function App() {
  return (
    <div className='App'>
      <Router>
          <HeaderComponent/>
        <nav className="navbar navbar-expand ">

          <ul className="navbar-nav">

            <li className='nav nav-item'><Link className="nav-link" to={"/create-student"}>Create Student</Link></li>
            <li className='nav nav-item'><Link className="nav-link" to={"/student-list"}>Student List</Link></li>
          </ul>


        </nav>
        <Switch>
          <Route exact path="/" component={CreateStudent} />
          <Route path="/create-student" component={CreateStudent} />
          <Route path="/edit-student/:id" component={EditStudent} />
          <Route path="/student-list" component={StudentList} />
          <Route path="/student-info/:id" component={StudentInfo} />
        </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;