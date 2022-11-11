import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {Grid, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/Tokens/tokensReducer';

function Footer (){

    const token= useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#483078", height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Minhas redes sociais</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/profile.php?id=100002833321070" target="_blank">
                        <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.instagram.com/psmayumi/" target="_blank">
                        <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/paulamsiano/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#483078", height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;