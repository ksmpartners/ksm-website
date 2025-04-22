import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import './SideMenu.css';

const menuItems = [
  { label: 'Home', icon: 'pi pi-home', command: () => window.scrollTo(0, 0) },
  {
    label: 'Services',
    items: [
      { label: 'Web & App Engineering' },
      { label: 'DevOps & Infrastructure' },
    ],
  },
  {
    label: 'Case Studies',
    items: [
      { label: 'SaaS Platforms' },
      { label: 'Fintech Systems' },
    ],
  },
  {
    label: 'Tech Talk',
    items: [
      { label: 'Architecture Notes' },
      { label: 'Performance Tricks' },
    ],
  },
  { label: 'About' },
];

export default function SideMenu({ mobile }) {
  return (
    <div className={mobile ? '' : 'panel-menu-wrapper'}>
      <PanelMenu model={menuItems} className="custom-panel-menu" />
    </div>
  );
}
