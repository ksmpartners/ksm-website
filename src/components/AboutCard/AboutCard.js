import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './AboutCard.css'; 

const AboutCard = ({ photo, name, description, link }) => {
  return (
    <Card className="about-card">
      <div className="photo-container">
        <img src={photo} alt={name} className="circle-photo" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Button label="Read More" icon="pi pi-external-link" onClick={() => window.location.href = link} />
      </div>
    </Card>
  );
};

export default AboutCard;
