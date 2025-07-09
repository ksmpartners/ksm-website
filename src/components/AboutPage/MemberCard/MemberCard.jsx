import React, { useState } from 'react';
import styles from './TeamCards.css';
import { FaLinkedin } from 'react-icons/fa';


export default function TeamMemberCard({ name, title, photo, bio, linkedin }) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped(!flipped);

  return (
   <div
      className={`teca-card ${flipped ? 'teca-flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="teca-card-inner">
        {/* Front */}
        <div className="teca-card-front">
          <img src={photo} alt={`${name} photo`} className="teca-photo" />
          <div className="teca-content">
            <h3>{name}</h3>
            <p className="teca-title">{title}</p>
            <p className="teca-bio">
              {bio.length > 100 ? `${bio.slice(0, 100)}...` : bio}
            </p>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="teca-icon" />
            </a>
          </div>
        </div>

        {/* Back */}
        <div className="teca-card-back">
          <div className="teca-back-content">
            <h3>{name}</h3>
            <p className="teca-title">{title}</p>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
