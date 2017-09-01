import { combineReducers } from "redux";
import axios from "axios";

const logError = console.error.bind(console);

// INITIAL STATE

const initialState = {
  students: [],
  campuses: []
};

//ACTION CREATORS

const UPDATE_NAME = "UPDATE_NAME";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const GET_STUDENTS = "GET_STUDENTS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const GET_CAMPUS = "GET_CAMPUS";
const GET_CAMPUSES = "GET_CAMPUSES";

// ACTION CREATORS

export function updateName(name) {
  const action = {
    type: UPDATE_NAME,
    name
  };
  return action;
}

export function addStudent(student) {
  return {
    type: ADD_STUDENT,
    student
  };
}

export function scrubStudent(student) {
  return {
    type: DELETE_STUDENT,
    student
  };
}

export function getStudents(students) {
  const action = {
    type: GET_STUDENTS,
    students
  };
  return action;
}

export function updateCampus(campus) {
  const action = {
    type: UPDATE_CAMPUS,
    campus
  };
  return action;
}

export function getCampus(campus) {
  const action = {
    type: GET_CAMPUS,
    campus
  };
  return action;
}

export function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  };
  return action;
}

//THUNK CREATORS

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios
      .get("/api/students")
      .then(function(res) {
        return res.data;
      })
      .then(students => {
        dispatch(getStudents(students));
      })
      .catch(logError);
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios
      .post("/api/students", student)
      .then(function(res) {
        return res.data;
      })
      .then(function(newStudent) {
        return dispatch(addStudent(newStudent));
      })
      .catch(logError);
  };
}

export function deleteStudent(id) {
  // console.log("student", student);
  return function thunk(dispatch) {
    return axios
      .delete("/api/students" + "/" + id)
      .then(function(id) {
        return dispatch(scrubStudent(id));
      })
      .catch(function(err) {
        return console.error("Removing student: " + id + " unsuccessful", err);
      });
  };
}

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios
      .get("/api/campuses")
      .then(function(res) {
        return res.data;
      })
      .then(function(campuses) {
        return dispatch(getCampuses(campuses));
      })
      .catch(logError);
  };
}

export function postCampus(student) {
  return function thunk(dispatch) {
    return axios
      .post("/api/campuses", campus)
      .then(function(res) {
        return res.data;
      })
      .then(function(newCampus) {
        return dispatch(getCampus(newCampus));
      })
      .catch(logError);
  };
}

// REDUCER

const rootReducer = function(state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case GET_STUDENTS:
      newState.students = state.students.concat(action.students);
      return newState;

    case ADD_STUDENT:
      newState.students = state.students.concat([action.student]);
      return newState;

    case DELETE_STUDENT:
      console.log("action.student", action.student);
      console.log("state", state);
      state.filter(function(student) {
        return student.id !== action.id;
      });
      return newState;

    case GET_CAMPUSES:
      newState.campuses = state.campuses.concat(action.campuses);
      return newState;

    case GET_CAMPUS:
      newState.campuses = state.campuses.concat([action.campus]);
      return newState;

    default:
      return state;
  }
};

export default rootReducer;
