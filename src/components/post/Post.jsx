import './post.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = ({post}) => {
    //TEMPORARY
  const liked=false;
  return (
    <div className='post'>
        <div className="container">
            <div className="header">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <span style={{fontWeight:'500'}}>{post.name}</span>
                        <span style={{fontSize:'14px'}}> 1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="content">
                <span>{post.desc}</span>
                {post.img? <img src={post.img} alt="" />:null}
            </div>
            <div className="footer">
                <div className="item">
                    {liked?<FavoriteOutlinedIcon/>:<FavoriteBorderIcon/>}
                    <span>12 Likes</span>
                </div>
                <div className="item">
                    <MessageOutlinedIcon/>
                    <span>12 Comments</span>
                </div>
                <div className="item">
                    <ShareOutlinedIcon/>
                    <span>Share</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post