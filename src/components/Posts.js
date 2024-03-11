import { useState } from 'react'
import { FaBell, FaLaugh, FaRegCaretSquareDown } from 'react-icons/fa'
const Posts = () => {
  const [reactionCount, setReactionCount] = useState({
    like: 0,
    comment: 0,
    send: 0,
  })
  const handleReaction = (e) => {
    // the switch check what type of reaction and addthe reaction to the reaction which is shown in  output
    switch (e.target.innerText) {
      case 'Like':
        const latest = Number(reactionCount.like) + 1
        setReactionCount({ ...reactionCount, like: latest })
        console.log(reactionCount.like)
        break
      case 'Comment':
        const latestComment = Number(reactionCount.comment) + 1
        setReactionCount({ ...reactionCount, comment: latestComment })
        console.log(reactionCount.comment)
        break
      default:
        console.log('Send')
    }
  }

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
          <span>{reactionCount.like}</span>
          <span>{reactionCount.comment}</span>
        </div>
        <div className="reactions">
          <div className="reaction">
            <FaLaugh />
            <span onClick={(e) => handleReaction(e)}>Like</span>
          </div>
          <div className="reaction">
            <FaLaugh />
            <span onClick={(e) => handleReaction(e)}>Comment</span>
          </div>
          <div className="reaction">
            <FaRegCaretSquareDown />
            <span onClick={(e) => handleReaction(e)}>Send</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Posts
