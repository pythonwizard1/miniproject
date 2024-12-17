import { Box, Paper,Checkbox, Typography, IconButton } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function List({note,deleteNote,updateNote}) {
  return (
    <Paper sx={{
        p:2,
        display:"flex",
        justifyContent:"space-between",
         mt:1}}>
        <Box sx={{
            display:"flex",
            gap:1,
            alignItems:"center"}}>
        <Checkbox
        checked={note.completed?true:false}
         onChange={()=>updateNote(note)}/>
        <Typography  
        color="text.secondary"
        sx={{
            fontWeight:"600",
            textTransform:"capitalize", textDecoration:note.completed?"line-through":"none"}}>
            {note.title}
            </Typography>
        </Box>
        <IconButton onClick={()=>deleteNote(note.id)}color='error'>
            <DeleteOutlineIcon/>
        </IconButton>
    </Paper>
  )
}
