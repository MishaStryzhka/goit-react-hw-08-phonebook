import { useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import css from './ItemContact.module.css';

const ItemContact = ({contact}) => {
    const dispatch = useDispatch()

    const handleClick = (e)=>{
        dispatch(removeContact(e.currentTarget.parentNode.id))
    }
    return  <li className={css.item} key={contact.id} id={contact.id}>
        <b>{contact.name}</b> {contact.number}
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClick}></button>
    </li>
};

export default ItemContact;