import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonText,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import Logo from "./components/Logo";
import HomeCard from "./components/HomeCard";
import TaskList from "./components/TaskList";

function App() {
  return (
    <IonApp>
      <IonHeader></IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none" className="logo">
          <Logo></Logo>
        </IonItem>
        <HomeCard></HomeCard>
        <TaskList></TaskList>

        <IonButton
          style={{ marginTop: "30%" }}
          className="get-started"
          expand="block"
          href="/Camera"
        >
          Get Started
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
