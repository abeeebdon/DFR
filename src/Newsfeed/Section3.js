const Section3 = () => {
  return (
    <section className="newsfeed-posts">
      <div className="news-head-wrap">
        <div>
          <div className="news-images">
            <img src="Penguins.jpg" alt="img1" className="news-image" />
          </div>
          <div className="news-head">
            <h3 className="news-head-item">Programmers</h3>
            <br />
            <p className="news-head-item">Arinze Chuckwu</p>
          </div>
        </div>
        <div className="news-icon">
          <span className="fa-solid fa-ellipsis"></span>
          <span className="fa-solid fa-cross"></span>
        </div>
      </div>
      <div className="news-outlet">
        <div className="news-outlet-image">
          <h2>News image goes here</h2>
          <img src="Penguins.jpg" alt="News image" style={{ width: '600px' }} />
        </div>
      </div>

      <div className="comments-reactions">
        <div className="like-reactions">
          <span>emoji</span>
          <span>emoji</span>
        </div>
        <div className="comments">
          <p>
            <span id="later">156</span>comments
          </p>
        </div>
      </div>
      <div className="like-comment-send">
        <div>
          <div>
            <span></span>
          </div>
          <p>Like</p>
        </div>
        <div id="comment">
          <div>
            <span></span>
          </div>
          <p>Comment</p>
        </div>
        <div id="send">
          <div>
            <span></span>
          </div>
          <p>Send</p>
        </div>
      </div>
    </section>
  )
}
export default Section3
