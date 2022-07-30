import React from 'react';
import { Grid, Box, Typography, Paper, ThemeProvider } from '@mui/material';
import Theme from '../Theme';
import { paper } from '../Theme';

const theme = Theme;

const styles = {
	newsHeading: {
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '25.14px',
	},
	newsBar: {
		Width: '318px',
		Height: '86px',
		gap: '16px',
		padding: '12px',
		marginTop: '20px',
		fontFamily: 'Source Sans Pro',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '18px',
		border: '1px solid #F4F4F4',
		borderRadius: '8px',
		boxSizing: 'border-box',
		isolation: 'isolate',
	},
	date: {
		fontSize: '12px',
		lineHeight: '18px',
		fontWeight: '400',
		color: '#767676',

		marginTop: '6px',
	},
	heading: {
		fontFamily: 'Source Sans Pro',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '17.6px',
		color: '#1A1A1A',
		borderLeftColor: 'red',
	},
};

var number = [1, 2, 3, 4, 5, 6, 7, 8];
// type newsData = {
// 	data: {
// 		title: 'Fades preferred infaltion measures rose 4.7% in May,around multi-decade heights';
// 	};
// };
type NewsItemProps = {
	title: string;
	date: string;
};

const NewsItemSite = (props: NewsItemProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Paper elevation={paper.elevation} sx={styles.newsBar}>
				<Typography variant="h5" sx={styles.heading}>
					{props.title}
				</Typography>
				<Typography sx={styles.date}>{props.date}</Typography>
			</Paper>
		</ThemeProvider>
	);
};

export default NewsItemSite;
