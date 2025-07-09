import React from 'react';
import styles from './TeamCards.css';
import TeamMemberCard from './MemberCard';
import Cagg from "../../../images/cagg.png";

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Lead Product Designer',
    photo: `${Cagg}`,
    bio: 'Jane is a product design lead with 10+ years of experience crafting beautiful, user-centered interfaces for enterprise and consumer products. She thrives at the intersection of form and function.',
    linkedin: 'https://linkedin.com/in/janedoe',
  },
  {
    name: 'Jane Doe',
    title: 'Lead Product Designer',
    photo: `${Cagg}`,
    bio: 'Jane is a product design lead with 10+ years of experience crafting beautiful, user-centered interfaces for enterprise and consumer products. She thrives at the intersection of form and function.',
    linkedin: 'https://linkedin.com/in/janedoe',
  },
   {
    name: 'Jane Doe',
    title: 'Lead Product Designer',
    photo: `${Cagg}`,
    bio: 'Jane is a product design lead with 10+ years of experience crafting beautiful, user-centered interfaces for enterprise and consumer products. She thrives at the intersection of form and function.',
    linkedin: 'https://linkedin.com/in/janedoe',
  },
  {
    name: 'Jane Doe',
    title: 'Lead Product Designer',
    photo: `${Cagg}`,
    bio: 'Jane is a product design lead with 10+ years of experience crafting beautiful, user-centered interfaces for enterprise and consumer products. She thrives at the intersection of form and function.',
    linkedin: 'https://linkedin.com/in/janedoe',
  },
  // Add more members...
];

export default function DisplayTeamGrid() {
  return (
  <div className="teca-grid">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
}


