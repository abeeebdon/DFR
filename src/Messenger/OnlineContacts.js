import { onlineContacts } from '../data/Data'
import Card from './Card'
const OnlineContacts = () => {
  return (
    <section>
      {onlineContacts.map((contact) => {
        return (
          <div key={contact.id}>
            <Card contact={contact} />
          </div>
        )
      })}
    </section>
  )
}
export default OnlineContacts
