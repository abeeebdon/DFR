const Card = ({ contact }) => {
  const { username, src } = contact
  return (
    <div className="online-contacts">
        <img
          src={src}
          width="45px"
          height="45px"
          className="online-contacts-images"
          alt="img1"
        />
        <p className="online-user">{username}</p>
      </div>
  )
}
export default Card
