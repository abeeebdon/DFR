import { FaBell, FaLaugh, FaRegCaretSquareDown } from 'react-icons/fa'
const Posts = () => {
  return (
    <section className="posts">
      <div className="post">
        <div className="head">
          <div className="details">
            <img src="Penguins.jpg" alt="img1" className="image" />
            <div className="name">
              <p>Oluwadamilare Ajayi</p>
              <span>1h</span>
            </div>
          </div>
          <div className="icons">
            <FaBell className="icon" />
            <FaBell className="icon" />
          </div>
        </div>
        <div className="content">
          <img src="Penguins.jpg" alt="img1" className="image" />
        </div>
        <div className="output">
          <span></span>
          <span></span>
        </div>
        <div className="reactions">
          <div className="reaction">
            <FaLaugh />
            <span>Like</span>
          </div>
          <div className="reaction">
            <FaLaugh />
            <span>Comment</span>
          </div>
          <div className="reaction">
            <FaRegCaretSquareDown />
            <span>Send</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Posts
