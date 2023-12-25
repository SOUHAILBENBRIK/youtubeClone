import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Box  } from "@mui/material";

import ChannelCard   from "./ChannelCard";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Video from './Video';
const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>
    setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>
    setVideos(data?.items));
  },[id])
  return (
    <Box minHeight="95vh"
    >
      <Box>
        <div style={{
          background :'radial-gradient(circle, rgba(180,58,97,1) 0%, rgba(253,29,29,1) 50%, rgba(69,140,252,1) 100%)',
          zIndex:10,height:'300px'
        }}
        
        />
        <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>

      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
          <Video videos={videos}/>
        </Box>
      </Box>
    
  )
}

export default ChannelDetail