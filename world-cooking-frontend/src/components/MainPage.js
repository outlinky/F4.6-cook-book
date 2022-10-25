import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import '../styles/GlobalStyles.css';
import {connect} from 'react-redux';

function MainPage(props) {
    return (
        <Container sx={{py: 8}} maxWidth="lg">
            <Grid container spacing={4}>
                {props.categories ? props.categories.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Link color="inherit" href={window.location.origin + '/' + card.name}
                              underline={'none'}>
                            <Card
                                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        pt: '20%',
                                    }}
                                    image={card.img_url}
                                    alt={`${card.name} flag`}
                                />
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography gutterBottom variant="h5" component="h2" textAlign={'center'}>
                                        {card.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )): <h1>Loading...</h1>}
            </Grid>
        </Container>
    );
}

function mapStateToProps(state){
    return {
        categories: state.categories.data,
        dishes: state.dishes.data
    }
}
export default connect(mapStateToProps)(MainPage)