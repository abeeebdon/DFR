import Birthdays from './Birthdays'
import OnlineContacts from './OnlineContacts'

const Contacts = () => {
  return (
    <div className="messenger">
      <Birthdays />
      <div className="contacts-icons">
        <p>Contacts</p>
      </div>
      <OnlineContacts />
    </div>
  )
}
export default Contacts
