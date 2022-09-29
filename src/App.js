
import './App.css';
import React from 'react';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import Content from './components/Content';
import Body from './components/Body';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      
      <Container maxWidth='md'>
          <Paper elevation={8}>
            <Content />
            <Body />
            <Footer />
          </Paper>
      </Container> 
    </div>
  );
}

export default App;
