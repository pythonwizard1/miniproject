import { Box, Button, Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function InsertForm({notes,setNotes}) {
    const[noteTitle,setNotTitle]=useState("");
    const[noteTitleError,setNoteTitleError]=useState(null)
    const handleChange=(e)=>{
        setNoteTitleError(null);
        setNotTitle(e.target.value);
       // console.log(e.target.value)
    };
    const handleSubmit=()=>{
        if(noteTitle==""){
            setNoteTitleError("Please enter a title");
        }else{
           // console.log(notes)
            let noteId= notes.length == 0 ? 1:notes[notes.length-1].id+1;
            let fullNote={id:noteId,title:noteTitle,completed:false}
            let updatedNoteData=[...notes,fullNote]
        console.log(updatedNoteData)
        localStorage.setItem("notes",JSON.stringify(updatedNoteData))
        setNotes(updatedNoteData)
        setNotTitle("")
    }}
  return (
    <Box>
        <Grid2 container spacing={2}>
        <Grid2 size={{xs:10}}>
            <TextField 
            value={(noteTitle)}
            onChange={handleChange}
            fullWidth label="Enter the title" 
            placeholder='Enter the title here'
            helperText={noteTitleError && noteTitleError}
            error={!!noteTitleError}
            />
        </Grid2>
        <Grid2 size={{xs:2}}>
            <Button
            onClick={handleSubmit}
             variant='contained' 
            title='secondary' 
            fullWidth sx={{p:2}}>
                Add
                </Button>
        </Grid2>
        </Grid2>
    </Box>
  )
}
