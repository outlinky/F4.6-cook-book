import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

function Dish(props) {
    let params = useParams()
    return props.dishes ? (
        <>
            <Box
                sx={{
                    pt: 5,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        fontWeight="normal"
                        gutterBottom
                    >
                        {props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].name}
                    </Typography>
                    <Typography variant="h4" align="center" sx={{pb: 2}}>Ingredients
                        ({`${props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].servings} servings`}):</Typography>
                    <Typography component={'span'} variant="h6" align="justify" color="text.secondary" paragraph>
                        {props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].ingredients.map((el, i) => (
                            <div key={i}><span><b>{el.name}</b></span>: <span><i>{el.quantity}</i></span></div>
                        ))}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{py: 5}} maxWidth="md">
                <Grid>
                    <Grid item key={props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].id} md={12}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardMedia
                                component="img"
                                image={props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].img_url}
                                alt={props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].name}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h5" textAlign={'justify'}>
                                    {props.dishes.filter(el => el.id === parseInt(params.dish_id))[0].recipe}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    ) : <h1>Loading....</h1>;
}

function mapStateToProps(state) {
    return {
        categories: state.categories.data,
        dishes: state.dishes.data
    }
}

export default connect(mapStateToProps)(Dish)