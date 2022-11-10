import React , {useEffect, useState} from "react";
import {Grid, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import TabPostagem from "../../Components/Postagens/TabPostagem/TabPostagem";
import ModalPostagem from "../../Components/Postagens/ModalPostagem/ModalPostagem";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";

function Home(){
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

    return (
        <>             
           <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://raw.githubusercontent.com/EndersDev/EndersDev/main/pasta/Computer_on_a_Chip.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>                          
        </>        
    )
}

export default Home