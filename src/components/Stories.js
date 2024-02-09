import image1 from '../Images/img2 (5).jpg'

const Stories = () => {
  return (
    <section className="stories">
      <div className="link">
        <div className="story">
          <button className="btn">Stories</button>
        </div>
        <div className="story">
          <button className="btn">Reels</button>
        </div>
        <div className="story">
          <button className="btn">Rooms</button>
        </div>
      </div>

      <hr />

      <div class="status">
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
      </div>
    </section>
  )
}
export default Stories
