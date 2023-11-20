import AsideIcons from './AsideIcons'

const Aside = () => {
  return (
    <aside>
      <div className="flex-1">
        <AsideIcons />
        <img
          src="./images/img2 (5).jpg"
          width="40px"
          height="40px"
          className="img"
          alt="img1"
        />
      </div>
      <div className="flex-2">
        <p className="userName asideParagraphs">Username</p>
      </div>
    </aside>
  )
}
export default Aside
