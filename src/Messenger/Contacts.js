import { FaLine, FaSearch } from 'react-icons/fa'
import { onlineContacts } from '../data/Data'
import Birthdays from './Birthdays'

const Contacts = () => {
  return (
    <div className="messenger">
      <Birthdays />
      <div className="contacts-icons">
        <p>Contacts</p>
        <div>
          <FaLine className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>
      <div className="online-contacts">
        {onlineContacts.map((contact) => {
          return (
            <div key={contact.id}>
              <img
                src={contact.src}
                width="45px"
                height="45px"
                className="online-contacts-images"
                alt="img1"
              />
              <p className="online-user">{contact.username}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Contacts
