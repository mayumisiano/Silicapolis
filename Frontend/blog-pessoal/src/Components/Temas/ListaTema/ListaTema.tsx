import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../Models/Tema';
import './ListaTema.css';
import { busca } from '../../../Services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/Tokens/tokensReducer';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [temaBuscado, setTemaBuscado] = useState('')

  function updateBusca(event: ChangeEvent<HTMLInputElement>){
    setTemaBuscado(
      event.target.value
    )
  }

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")
    }
  }, [token])


  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }
  
  // funcção que vai solicitar os temas do backend
  async function buscaTema() {
    if(temaBuscado !== ''){
      await busca(`/temas/descricao/${temaBuscado}`, setTemas, {
        headers: {
          Authorization: token
        }
      })
    } else {
      await busca('/temas', setTemas, {
        headers: {
          Authorization: token
        }
      })
    }
  }

  useEffect(() => {
    getTema()
  }, [getTema, temas.length])

  return (
    <>
      <div className="group">
      <input placeholder="Search" type="search" className="input" onChange={(event: ChangeEvent<HTMLInputElement>) => updateBusca(event)} />
      <svg className="icon" onClick={getTema} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>        
      </div>

      {
        temas.map(tema => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}

export default ListaTema;