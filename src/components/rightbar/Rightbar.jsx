import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
            </div>

            <span><p>John Doe </p> changed their cover picture</span>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
            </div>

            <span><p>John Doe </p> changed their cover picture</span>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
            </div>

            <span><p>John Doe </p> changed their cover picture</span>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
            </div>

            <span><p>John Doe </p> changed their cover picture</span>
            <span> 1 min ago</span>
          </div>
        </div>


        <div className="item">
          <span>Online Friends</span>
          
            <div className="online">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="onlineInd"/>
              <span>John Doe</span>
            </div>
            <div className="online">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="onlineInd"/>
              <span>John Doe</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar