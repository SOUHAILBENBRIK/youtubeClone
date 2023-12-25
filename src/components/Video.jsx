import { Stack , Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Video = ({videos,direction}) => {
  if(!videos?.length) return <Loader />
  return (
    <Stack direction= {direction|| "row"} flexWrap="wrap" justifyContent="start" gap={2}
    >
      {videos.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item}  marginTop='0px' />}
        </Box>
      ))}
    </Stack>
  )
}

export default Video