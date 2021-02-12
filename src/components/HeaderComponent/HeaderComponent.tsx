import React from 'react';
import styles from './HeaderComponent.module.scss';

const HeaderComponent: React.FC = () => (
  <div className={styles.HeaderComponent}>
    
    <span>HOME |</span>
    <span>ABOUT US |</span>
    <span>PORTFOLIO |</span>
    <span>SERVICES |</span>
    <span>BLOG |</span>
    <span>CONTACT US</span>
  
  </div>
);

export default HeaderComponent;
