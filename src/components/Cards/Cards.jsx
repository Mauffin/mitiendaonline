
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Cards = ({data,titulo}) => {
   return (
        <>
        <h1>{titulo}</h1>
        <Grid container spacing={2}>
        {data.map((producto, index) => (
        
        <Grid  
           key={index}
           item xs={12} sm={6} md={4} lg={3}
           justifyContent="space-evenly"
           container
         >
        <Card   sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={producto.imagen}
                    alt="prenda de vestir"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {producto.nuevo_precio}
                </Button>
                <Button size="small" color="primary">
                    {producto.precio_anterior}
                </Button>
            </CardActions>
        </Card>
        </Grid>
       
        
        
        ))};
 </Grid>
        </>
    );
};

export default Cards