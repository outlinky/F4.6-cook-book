import MainPage from './components/MainPage';
import Dish from './components/Dish';
import CountryDishes from './components/CountryDishes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Dishes. '}
            {'Powered by '}
            <Link color="inherit"
                  href="https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album">
                Material-UI
            </Link>{' '}
        </Typography>
    );
}

function App() {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative" id={'AppBar'}>
                <Link color="inherit" href="/" underline={'none'} id={'Link'}>
                    <Toolbar>
                        <RestaurantIcon sx={{mr: 2, fontSize: '5rem'}}/>
                        <Typography variant="h3" color="inherit" fontSize={'5rem'} fontWeight={'bold'} noWrap>
                            World Dishes
                        </Typography>
                    </Toolbar>
                </Link>
            </AppBar>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/:country" element={<CountryDishes/>}/>
                        <Route path="/:country/:dish_id" element={<Dish/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Nyam Nyam
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Bon appetit and Happy coding! :)
                </Typography>
                <Copyright/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
