import React from 'react';
import { Route } from 'react-router';
import 'materialize-css';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import NavBar from '../components/NavBar';
import UniversitySelector from './UniversitySelector/';
import ShortAbout from '../components/ShortAbout';
import GradesForm from './GradesForm';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <ShortAbout />
          <UniversitySelector />
          <GradesForm />
        </div>
      </div>
    );
  }
}
