import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const EditContact = ({
  editedContact,
  showEdit,
  handleEditClose,
  saveChanges,
}) => {
  const [contact, setContact] = useState(editedContact);

  const editName = e => {
    setContact({
      ...contact,
      name: e.target.value,
    });
  };

  const editLastName = e => {
    setContact({
      ...contact,
      lastName: e.target.value,
    });
  };

  const editNumber = e => {
    setContact({
      ...contact,
      number: e.target.value,
    });
  };

  function changes() {
    saveChanges(contact);
  }

  return (
    <>
      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={contact.name}
              onChange={editName}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Last Name"
              value={contact.lastName}
              onChange={editLastName}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Number"
              value={contact.number}
              onChange={editNumber}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="dark" onClick={changes}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;
