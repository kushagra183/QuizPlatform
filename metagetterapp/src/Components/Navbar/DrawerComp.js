import React, { useState } from 'react'
import { Drawer,List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';


//Drawer component 
const DrawerComp = () => {
  const [draw, setDraw] = useState(false); // state to switch between opening and closing of drawer

  return (
    <div>
      <Drawer open={draw} onClose={()=>setDraw(false)}> {/**Drawer imported from material UI*/}
        <List>
         <ListItemButton onClick={()=>setDraw(false)}> {/**Drawer will close as the option is clicked */}
             <ListItemIcon>
              <ListItemText >Home</ListItemText>
              </ListItemIcon> 
            </ListItemButton>
         <ListItemButton onClick={()=>setDraw(false)} >
             <ListItemIcon>
              <ListItemText >My Quiz</ListItemText>
              </ListItemIcon> 
            </ListItemButton>
         <ListItemButton onClick={()=>setDraw(false)} >
             <ListItemIcon>
              <ListItemText >Play Quiz</ListItemText>
              </ListItemIcon> 
            </ListItemButton>
        
         </List>
      </Drawer>
      <IconButton onClick={()=>setDraw(!draw)}>
<MenuIcon/>
      </IconButton>
    </div>
  )
}

export default DrawerComp
