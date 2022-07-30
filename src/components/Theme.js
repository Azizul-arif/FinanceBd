import React from 'react';
import { createTheme } from '@mui/material';

export const Colors = {
	primary: '#7B61FF',
	secondary: '#EEEEEE',
};

export const bottomLine = {
	backgroundColor: '#EEEEEE',
	height: '835px',
	width: '1px',
	display: 'inline-flex',
	flexDirection: 'column',
};

export const paper = {
	elevation: 3,
};
const Theme = createTheme({
	palette: {
		primary: {
			main: Colors.primary,
		},

		secondary: {
			main: Colors.secondary,
		},
	},
	paperelevation: {
		elevationsize: paper.elevation,
	},
});

export default Theme;
