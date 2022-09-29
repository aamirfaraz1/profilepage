import { Grid, Typography } from "@mui/material";
import React from "react";

function Body() {
    return(
        <Grid
            sx={{
                
            }} 
        >
            <Grid
                sx={{
                    marginRight:77
                }}
            >
                <Typography sx={{
                    fontStyle: 'italic',
                    fontWeight:500,
                    fontSize:20
                    }}>
                    About Me 
                </Typography>
            </Grid>

            <Grid
                sx={{
                    padding:2
                }}
            >
                <Typography sx={{
                fontWeight:350,
                fontSize:16,
                marginLeft:10,
                marginTop:2,
                marginRight:5
                }}>
                I am from Thrissur, Kerala. Completed my Under Graduation in B-Tech, specialised in Electronics and Communication Engineering,
                from Govt. Model Engineering College, Thrikkakara. My hobbies are reading, swimming, create memes, playing FPS games etc... 
                My strengths are fast learner and a team player. My weaknesses are laziness. My ambitions is to become a succesful Engineer.
                </Typography>
            </Grid>

        </Grid>
    );
}

export default Body