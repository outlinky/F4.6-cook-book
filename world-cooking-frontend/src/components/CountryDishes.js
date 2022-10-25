import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

function CountryDishes(props) {
    let params = useParams()
    return props.categories && props.dishes ? (
    <>
        <Box
            sx={{
                pt: 5,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h1"
                    align="center"
                    color="text.primary"
                    fontWeight="normal"
                    gutterBottom
                >
                    <CardMedia
                        component="img"
                        image={props.categories.filter(el => el.name === params.country)[0].img_url}
                        alt={params.country}
                        id={'CardMedia'}
                        sx={{pr: 3}}
                    />
                    {params.country}
                </Typography>
            </Container>
        </Box>
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {props.dishes.filter(el => el.category === params.country).map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Link
                            color="inherit"
                            href={window.location + '/' + card.id}
                            underline={'none'}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        pt: '20%',
                                    }}
                                    image={card.img_url}
                                    alt={`${card.name}`}
                                />
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        textAlign={'center'}
                                    >
                                        {card.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
): <h1>Loading...</h1>;
}

function mapStateToProps(state) {
    return {
        categories: state.categories.data,
        dishes: state.dishes.data
    }
}

export default connect(mapStateToProps)(CountryDishes)
