import React from 'react';
import { Link } from 'react-router-dom';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import BrandEbay from '../BrandEbay'
import IconCart from '../../icons/IconCart'
import './styles.css';


const AppHeader: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className="app-toolbar">
        <IonTitle>
          <Link to="/" className="ion-text-center">
            <BrandEbay/>
          </Link>
        </IonTitle>
        <IonButtons slot="end">
            
            <IconCart/>
        </IonButtons>
    </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
