import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Midterm1Co from './Midterm1Co';
import Midterm1Marks from './Midterm1Marks';
import Midterm2co from './Midterm2Co';
import Midterm2Marks from './Midterm2Marks';
import Students from './Students';
import ActivityCo from './ActivityCo';
import ActivityMarks from './ActivityMarks';
import DisplayStudent from './DisplayStudent';
import DisplayMidTerm1Co from './DisplayMidTerm1Co';
import DisplayMidTerm2Marks from './DisplayMidTerm2Marks';
import DisplayMidTerm2Co from './DisplayMidTerm2Co';
import DisplayMidTerm1Marks from './DisplayMidTerm1Marks';
import Quiz_co from './Quiz_co';
import Quiz_Marks from './Quiz_Marks';
import DisplayActivityCo from './DisplayActivityCo';
import DisplayActivityMarks from './DisplayActivityMarks';
import DisplayQuizCo from './DisplayQuizCo';
import DisplayQuizMarks from './DisplayQuizMarks';
import DisplayMidterm1Attendance from './DisplayMidterm1Attendance';
import DisplayMidterm2Attendance from './DisplayMidterm2Attendance';
import DisplayMidterm1AttendanceDetail from './DisplayMidterm1AttendanceDetail';
import DisplayMidterm1AttendanceDetail60 from './DisplayMidterm1AttendanceDetail60';
import DisplayActivityAttendance from './DisplayActivityAttendance';
import DisplayPercentageMidterm1AttendanceDetail60 from './DisplayPercentageMidterm1AttendanceDetail60';
import DisplayLevelMidtem1 from './DisplayLevelMidterm1';











function App(props) {
  return (
    <div>
      <Router>
        <Route
          strict
          exact
          component={Home}
          path="/home"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Login}
          path="/login"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Students}
          path="/students"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Dashboard}
          path="/dashboard"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Register}
          path="/register"
          history={props.history}
        />


        <Route
          strict
          exact
          component={Midterm1Marks}
          path="/midterm1marks"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Midterm1Co}
          path="/midterm1co"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Midterm2Marks}
          path="/midterm2marks"
          history={props.history}
        />

        <Route
          strict
          exact
          component={Midterm2co}
          path="/midterm2co"
          history={props.history}
        />

        <Route
          strict
          exact
          component={ActivityCo}
          path="/activityco"
          history={props.history}
        />

        <Route
          strict
          exact
          component={ActivityMarks}
          path="/activitymarks"
          history={props.history}
        />

        <Route
          strict
          exact
          component={DisplayStudent}
          path="/displaystudent"
          history={props.history}
        />

        <Route
          strict
          exact
          component={DisplayMidTerm1Co}
          path="/displaymidterm1co"
          history={props.history}
        />


        <Route
          strict
          exact
          component={DisplayMidTerm1Marks}
          path="/displaymidterm1marks"
          history={props.history}
        />


        <Route
          strict
          exact
          component={DisplayMidTerm2Co}
          path="/displaymidterm2co"
          history={props.history}
        />


        <Route
          strict
          exact
          component={DisplayMidTerm2Marks}
          path="/displaymidterm2marks"
          history={props.history}
        />


        <Route
          strict
          exact
          component={DisplayActivityCo}
          path="/displayactivityco"
          history={props.history}
        />

        <Route
          strict
          exact
          component={DisplayQuizCo}
          path="/displayquizco"
          history={props.history}
        />


        <Route 
          strict
          exact
          component={DisplayActivityMarks}
          path="/displayactivitymarks"
          history={props.history}
        />


        <Route
          strict
          exact
          component={DisplayQuizMarks}
          path="/displayquizmarks"
          history={props.history}
        />
            
        <Route
            strict
            exact
            component={Quiz_co}
            path="/Quiz_co"
            history={props.history}
          />
      <Route
            strict
            exact
            component={Quiz_Marks}
            path="/Quiz_Marks"
            history={props.history}
          />


       <Route
            strict
            exact
            component={DisplayMidterm1Attendance}
            path="/displaymidterm1attendance"
            history={props.history}
          />

        <Route
            strict
            exact
            component={DisplayMidterm1Attendance}
            path="/displaymidterm1attendance"
            history={props.history}
          />

        <Route
            strict
            exact
            component={DisplayMidterm1AttendanceDetail}
            path="/displaymidterm1attendancedetail"
            history={props.history}
          />


        <Route
            strict
            exact
            component={DisplayMidterm1AttendanceDetail60}
            path="/displaymidterm1attendancedetail60"
            history={props.history}
          />

        <Route
            strict
            exact
            component={DisplayActivityAttendance}
            path="/displayactivityattendance"
            history={props.history}
          />

<Route
            strict
            exact
            component={DisplayPercentageMidterm1AttendanceDetail60}
            path="/displaypercentmidterm1attendancedetail60"
            history={props.history}
          />

<Route
            strict
            exact
            component={DisplayLevelMidtem1}
            path="/displaylevelmidterm1"
            history={props.history}
          />



      </Router>
    </div>
  );
}

export default App;







