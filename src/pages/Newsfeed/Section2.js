const Section2 = () => {
  return (
    <section className="new-post">
      <div className="my-profile-input">
        <div className="my-profile">
          <img
            src="Penguins.jpg"
            width="50px"
            height="50px"
            className="my-profile-images img"
            alt="my-profile"
          />
        </div>
        <div className="my-mind">
          <input
            type="text"
            placeholder="What is on your mind, user?"
            className="my-mind-input"
          />
        </div>
      </div>

      <div className="myStoryTypes">
        <div className="story-type">
          <button className="btn-my-mind">
            <p>Live video</p>
          </button>
        </div>
        <div className="story-type">
          <button className="btn-my-mind">
            <p>Photo/video</p>
          </button>
        </div>
        <div className="story-type">
          <button class="btn-my-mind">
            <p>Feeling/activity</p>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Section2
