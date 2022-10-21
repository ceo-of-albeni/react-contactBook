import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactsCard = ({ item, deleteContact, handleEdit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {item.name} {item.lastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {item.number}
          </Card.Subtitle>
          <Button variant="danger" onClick={() => deleteContact(item.id)}>
            Delete
          </Button>
          <Button
            className="mx-1"
            variant="secondary"
            onClick={() => handleEdit(item.id)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactsCard;
