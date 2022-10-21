import React, { useState } from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import EditContact from "./components/EditContact";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const [contacts, setContacts] = useState([]);

  function addContact(obj) {
    let newContacts = [...contacts];
    newContacts.push(obj);
    setContacts(newContacts);
  }

  function deleteContact(id) {
    let newContacts = [...contacts];
    newContacts = newContacts.filter(item => item.id !== id);
    setContacts(newContacts);
  }

  //update
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClose = () => setShowEdit(false);

  const [editedContact, setEditedContact] = useState([]);

  function handleEdit(id) {
    let obj = contacts.find(item => item.id === id);
    setEditedContact(obj);
    setShowEdit(true);
  }

  function saveChanges(obj) {
    let newContacts = contacts.map(item => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setContacts(newContacts);
    setShowEdit(false);
  }

  return (
    <>
      <Header handleOpen={handleOpen} />
      <AddContact
        show={show}
        addContact={addContact}
        handleClose={handleClose}
      />
      <ContactsList
        contacts={contacts}
        deleteContact={deleteContact}
        handleEdit={handleEdit}
      />
      {showEdit && (
        <EditContact
          editedContact={editedContact}
          showEdit={showEdit}
          handleEditClose={handleEditClose}
          saveChanges={saveChanges}
        />
      )}
    </>
  );
};

export default App;
