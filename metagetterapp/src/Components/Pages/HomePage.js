import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pic1 from "../Images/cretenew.png";
import pic2 from "../Images/myquiz.png";
import pic3 from "../Images/play.png"
import { useState } from 'react';

const HomePage = () => {
const [headLine, setHeadLine] = useState("");

const change = ()=>{
  headLine === "Welcome to our website!" ? setHeadLine("Create your quiz and play!"):setHeadLine("Welcome to our website!")
}

setTimeout(() => {
  change();
}, 2000);

  return (
    <div style={{marginTop:"100px"}}>
        <h1 style={{textAlign:"center"}}>{headLine}</h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <Card sx={{ maxWidth: 350, marginTop:"20px",textDecoration:"none", borderRadius:"20px", boxShadow:"2px 2px 4px black"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pic1}
          alt="create quiz"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
            Create your quiz by clicking here!
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 350,marginTop:"20px",textDecoration:"none",borderRadius:"20px", boxShadow:"2px 2px 4px black" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pic2}
          alt="my quiz"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
            Click here to see your quizzes!
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 350, marginTop:"20px",textDecoration:"none", borderRadius:"20px", boxShadow:"2px 2px 4px black"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pic3}
          alt="play quiz"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
            Start playing quiz by clicking here!
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   </div> 
  )
}

export default HomePage
