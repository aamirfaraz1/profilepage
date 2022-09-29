import { Grid, Typography } from "@mui/material";
import React from "react";
import {Cake,} from "@mui/icons-material"
import {Work} from "@mui/icons-material"
import Email from "@mui/icons-material/Email"


function Content() {
    return(
        <div>
            <img 
            style={{width:250, height:200, marginTop: 10, borderRadius:100}}
            src="./images/Kermit-and-the-Mythology-of-Muppets-1024x573.jpg" 
            />
            <Typography variant="h4" mt={2} mb={3} fontFamily='Roboto'>
                Aamir Faraz (22)
            </Typography>
            <Grid
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    verticalAlign:"middle",
                    marginBottom:8
                }}
            >       
                <Grid
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginRight:10,
                        verticalAlign:"middle"
                    }}
                >
                <Cake fontSize="medium"/>
                <Typography marginTop={1}>
                     : 22/05/2000
                </Typography>
                </Grid>
                <Grid
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginRight:10,
                        verticalAlign:"middle"
                        }}
                >
                    <Work fontSize="medium"/>
                    <Typography marginTop={0.5}>
                        : Trainee Site Reliability Engineer
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        verticalAlign:"middle"
                        }} 
                >
                    <Email fontSize="medium"/>
                    <Typography >
                        : aamirfaraz1@gmail.com
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Content