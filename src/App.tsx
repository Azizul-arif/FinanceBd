import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Board from './components/Board';
import { ThemeProvider } from '@mui/material';
import Theme from './components/Theme';

const theme = Theme;

function App() {
	return (
		<div>
			<Navbar />
			<Board />
		</div>
	);
}

export default App;
