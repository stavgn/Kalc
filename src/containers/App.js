import React from 'react';
import Grid from 'material-ui/Grid';
import NavBar from '../components/NavBar';
import UniversitySelector from './UniversitySelector/';
import ShortAbout from '../components/ShortAbout';
import GradesForm from './GradesForm';
import '../static/css/assistant.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid container justify="center">
          <ShortAbout />
          <UniversitySelector />
          <GradesForm />
        </Grid>
      </div>
    );
  }
}
