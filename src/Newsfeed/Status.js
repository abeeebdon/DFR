import image1 from '../Images/img2 (5).jpg'
const Status = () => {
  return (
    <article class="status">
      <div class="story-video-container">
        <img
          src={image1}
          className="status-img"
          style={{ width: '150px', height: '200px' }}
        />
      </div>
      <div class="story-video-container">
        <img
          src={image1}
          alt="img"
          className="status-img"
          style={{ width: '150px', height: '200px' }}
        />
      </div>
      <div class="story-video-container">
        <img
          src={image1}
          alt="img"
          className="status-img"
          style={{ width: '150px', height: '200px' }}
        />
      </div>

      <div class="story-video-container">
        <img
          src={image1}
          className="status-img"
          style={{ width: '150px', height: '200px' }}
        />
      </div>
    </article>
  )
}
export default Status
