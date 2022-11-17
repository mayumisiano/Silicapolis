import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../ListaPostagem/ListaPostagem';
import './TabPostagem.css';
import Card from '../../Sobre/index.jsx';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ backgroundColor: "#483078" }}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange} className='tabpostagens'>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>

        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxPostagem'>
            <div className='containerPostagens'>
              <ListaPostagem />
            </div>
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
            <Box>
              Sobre mim
            </Box>
          </Typography>

          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Card />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;