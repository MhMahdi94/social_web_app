import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import './home.scss'

const Home = () => {
  return (
    <div style={{flex:6}} className='home'>
      <Stories/>
      <Posts/>  
    </div>
  )
}

export default Home