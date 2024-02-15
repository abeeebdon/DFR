import { FaBell } from 'react-icons/fa'
import image1 from '../Images/img2 (5).jpg'

const Stories = () => {
  return (
    <section className="stories">
      <div className="stories-profile">
        <img src="Penguins.jpg" className="img" alt="my-profile" />
        <div className="stories-icon">
          <FaBell className="icon" />
        </div>
        <p>Create story</p>
      </div>
      <div className="story-video-container">
        <img src={image1} alt="img" className="status-img" />
      </div>
      <div className="story-video-container">
        <img src={image1} alt="img" className="status-img" />
      </div>

      <div className="story-video-container">
        <img src={image1} className="status-img" />
      </div>
    </section>
  )
}
export default Stories
