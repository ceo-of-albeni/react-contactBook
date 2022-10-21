import React from "react";
import ContactsCard from "./ContactsCard";

const ContactsList = ({ contacts, deleteContact, handleEdit }) => {
  return (
    <>
      <center style={{ fontSize: "30px", margin: "20px" }}>Contacts</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts?.map(item => (
          <ContactsCard
            key={item.id}
            item={item}
            deleteContact={deleteContact}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};

export default ContactsList;
