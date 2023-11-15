import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Projects from './components/Projects';
import Team from './components/Team';
import TeamRoaster from './components/TeamRoaster';
import UserStory from './components/UserStory';
import Task from './components/Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/team" element={<Team />}/>
    <Route path="/teamRoaster" element={<TeamRoaster />}/>
    <Route path="/userStory" element={<UserStory />}/>
    <Route path="/task" element={<Task />}/>
    </>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
