import React from 'react';
import Sidebar from '@theme-original/DocPage/Layout/Sidebar';
import styles from './styles.module.scss';
import logoUrl from './logo.png';

export default function SidebarWrapper(props) {
  return (
    <div className={styles.root}>
      <div className={styles.sticky}>
        <div className={styles.logoWrapper}>
          <img width={32} height={32} src={logoUrl} alt={'twa dev logo'}/>
          <span className={styles.logoText}>Web Apps</span>
        </div>
        <Sidebar {...props} />
      </div>
    </div>
  );
}
