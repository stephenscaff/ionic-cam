import React from 'react';
import {
	IonPage,
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonIcon,
	IonList,
	IonSelectOption,
	IonSelect,
	IonItem,
	IonItemOptions,
  IonItemOption,
  IonSlides,
	IonItemSliding,
	IonLabel,
  IonSlide,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import AppHeader from '../components/AppHeader';
import './Tab1.css';


const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2.25,
  speed: 400,
  pager: false
};


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <AppHeader/>
      <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
    <IonSlides pager={false} mode="ios" options={slideOpts}>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card 2</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Yo yo break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card 3</IonCardSubtitle>
            <IonCardTitle>Card 3</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Three clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card 2</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Yo yo break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card 3</IonCardSubtitle>
            <IonCardTitle>Card 3</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Three clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
