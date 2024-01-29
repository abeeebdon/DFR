import image1 from '../../Images/img2 (5).jpg'

const Section1 = () => {
  return (
    <section className="stories">
      <article className="story-nav">
        <div className="story">
          <button className="btn-story-link">Stories</button>
        </div>
        <div className="story">
          <button className="btn-story-link">Reels</button>
        </div>
        <div className="story">
          <button className="btn-story-link">Rooms</button>
        </div>
      </article>

      <hr />

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
    </section>
  )
}
export default Section1
