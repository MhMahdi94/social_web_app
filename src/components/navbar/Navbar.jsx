import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{textDecoration:"none"}}>
          <span>Social App</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search ...' />
        </div>
      </div>
      
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <MailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar