import React from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Communityupdate.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Communityupdate() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let timeFormat = year + "/" + month + "/" + date;

  const postSubmit = (e) => {
    e.preventDefault();
    const data = {
      post_id : e.target.post_id.value,
      title : e.target.title.value,
      content : e.target.content.value,
      writer : "no",
      write_date : timeFormat
    }

    axios.post("http://localhost:5000/post/update", data)
    .then(function(response){
      console.log(response);
      if(response.data.success){
        navigate('/community');
      }
    }).catch(function(error){
      alert("게시글 수정 실패!" + error);
    });

  }

  return (
    <>
    <Navbar />
    <div>
    <Container sx={{ width: '50%' }}>
    <div className="updatepost_box">
    <Box >
    <h1>UPDATEPOST :)</h1>
    <div>
      <Container  sx={{ width: 900, height: 500 }}>
          <form onSubmit={postSubmit}>
          <Stack spacing={1}>
            <Input type="hidden" name="post_id" id="post_id" value={data.post_id}/>
            <TextField fullWidth defaultValue={data.title} id="title" name="title" label="제목" variant="filled" color="success" />
            <TextField fullWidth defaultValue={data.content} id="content" name="content" label="내용" variant="filled" color="success" multiline rows={16} />
            <Button type="submit" variant="contained" color="success">수정완료</Button>
          </Stack>
          </form>
      </Container>
      </div>
    </Box>
    </div>
    </Container>
    </div>
    <Footer />
    </>
    
  )
}
