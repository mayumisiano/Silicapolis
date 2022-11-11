import React from 'react';
import {Grid, AppBar, Toolbar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import{Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../Store/Tokens/tokensReducer';
import { addToken } from '../../../Store/Tokens/actions';

function Navbar (){
    const token= useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''))
        alert("Usuario deslogado")
        navigate('/login')
    }
    var navbarComponent; 

    if(token != ""){
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#483078"}}>
        <Toolbar variant="dense" >
        <Box style={{ cursor: "pointer" }}> 
            <Typography className="silicapolis" variant="h5">
                Silicapolis
            </Typography>                        
        </Box>
        

        <Grid container direction="row" justifyContent="center">                  

            <Box display="flex">
                <Link to="/home" className='text-decorator-none'>
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
                </Link>
                    
                <Link to='/posts' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
                </Link>

                <Link to='/temas' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
                </Link>
                
                <Link to="/formularioTema" className='text-decorator-none'>
                <Box mx={1} className="cursor">
                    <Typography variant="h6" color="inherit">
                        Cadastrar tema
                    </Typography>
                </Box>
                </Link>

                
                    <Box mx={1} className='cursor' onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>

            {/* <Grid container direction="row" justifyContent="flex-end">
            <img src="https://cdn-icons-png.flaticon.com/512/911/911412.png" alt="" width="50px" height="50px" />
            </Grid> */}
                
            </Box>
            </Grid>
        </Toolbar>
    </AppBar>
    }

    return (
        <>
           {navbarComponent}    
        </>
    )
}

export default Navbar;