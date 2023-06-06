import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from "./components/Home";
import Dashboard from "./components/MainDash";
import RoamForm from "./components/RoamForm";
import {themeOptions} from "./components/ThemeComponent";
import './custom.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(themeOptions);

export default class App extends Component {

  static displayName = App.name;
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/roam' element={<RoamForm />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    );
  }
}
