import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cardss = () => {

    // connecting to fake API

    var[output, setOutput] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data);
            setOutput(response.data);
        })

        .catch((error) => {
            console.log(error)
        })
    }, [])


  return (
    <div>
        <Typography variant = "h2" style = {{color:'blue', textAlign:'center'}}>AMAZON </Typography>
         <Grid container spacing={3} sx={{ padding: 3}}>
            {output.map((val, i) => {
                return(
                
                <Grid item key={i} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                    sx={{ height: 250 }}
                    image={val.image}
                    title={val.title}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{val.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{val.description}</Typography>
                        <br/>
                        <Typography variant='h6' color="red" >${val.price}</Typography>
                    </CardContent>

                    <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">Save</Button>
                </CardActions>

                </Card>
                 </Grid>
                )
            })}

        </Grid>
    </div>

  )
  
}

export default Cardss
