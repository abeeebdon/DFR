import { FaBellSlash } from 'react-icons/fa'

const AddPost = () => {
  return (
    <section className="new-post">
      <div className="input">
        <img src="Penguins.jpg" className="img" alt="my-profile" />

        <input
          type="text"
          placeholder="What is on your mind, user?"
          className="post-input"
        />
      </div>
      <hr />
      <div className="story-types">
        <button className="btn">
          <FaBellSlash />
          <p>Live video</p>
        </button>
        <button className="btn">
          <FaBellSlash />
          <p>Photo/video</p>
        </button>
        <button class="btn">
          <FaBellSlash />
          <p>Feeling/activity</p>
        </button>
      </div>
    </section>
  )
}
export default AddPost
