import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
} from "@ionic/react";
import React from "react";
import HomeCard from "./components/HomeCard";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";
import "./Home.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none" className="logo">
          <Logo></Logo>
        </IonItem>
        <HomeCard></HomeCard>
        <TaskList></TaskList>
        <IonButton
          style={{ marginTop: "20%" }}
          className="get-started"
          expand="block"
          href="/camera"
        >
          Get Started
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
