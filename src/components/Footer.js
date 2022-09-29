import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return(
        <Grid
            sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginTop:15
            }}
        >
            <Box
                sx={{
                    marginRight:6
                }}
            >
                <IconButton onClick={()=>alert('You can connect with Aamir by sending a request to "Aamir Faraz" on Facebook')}><FacebookIcon fontSize="large" style={{ color: 'royalblue'}} /></IconButton>
            </Box>

            <Box
                 sx={{
                    marginRight:6
                }}
            >
                <IconButton onClick={()=>alert('You can connect with Aamir by sending a request to "._faraz_._" on Instagram')}><InstagramIcon fontSize="large" style={{ color: 'deeppink'}} /></IconButton>
            </Box>

            <Box
                 sx={{
                    marginRight:6
                }}
            >
                <IconButton onClick={()=>alert('Aamir no longer has Twitter account as his account is banned')}><TwitterIcon fontSize="large" style={{color: 'skyblue'}} /></IconButton>
            </Box>

            <Box>
               <IconButton onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/aamir-faraz-a3703517a/';}}><LinkedInIcon fontSize="large" color="primary" /></IconButton>
            </Box>
        </Grid>
    );
}

export default Footer