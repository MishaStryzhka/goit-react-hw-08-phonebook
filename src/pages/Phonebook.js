import FormContacts from "components/FormContacts/FormContacts";
import FormFind from "components/FormFind/FormFind";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/selectors";
import { addContact, fetchContacts } from "redux/contacts/operations";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ItemContact from "components/ItemContact/ItemContact";
import { Helmet } from "react-helmet";

const Phonebook = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") || "";
    

    const dispatch = useDispatch()

    const { contacts, isLoading, isLoadingPost, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    const onSubmit = (user) => {
        if (contacts && contacts.find(contact => {
            const normalizeUser = user.name.toLowerCase();
            return contact.name.toLowerCase() === normalizeUser
        })) { alert("Даний контакт вже є в телефонній") }
        else {
            dispatch(addContact(user))
        }
    }

    const handleChange = e => {
        setSearchParams({ filter: e.target.value })
    };

    const getVizibleContacts = () => {
        if (filter) {
            const normalizedFilter = filter.toLowerCase();
            
            const valueFilter = searchParams.get("filter");
            if(valueFilter!==filter){
                setSearchParams({ filter: normalizedFilter })
            }
            if (contacts) {
                return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
            };
        }

        return contacts

    };

    return (
        <>
            <Helmet>
            <title>Contacts</title>
            </Helmet>

            <FormContacts onSubmit={onSubmit} isLoadingPost={isLoadingPost} name />

            <h2 className={{margin: 25}}>Contacts</h2>

            <FormFind handleChange={handleChange} value={filter} />

            {isLoading && !error && <b>Request in progress...</b>} 
            {error && <b>{error};</b>} 

            <ul>
                {getVizibleContacts().map((contact) =>
                    <ItemContact key={contact.id} contact={contact}/>
                )}
            </ul>
        </>
    );

};

export default Phonebook;