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
  IonRouterOutlet,
  IonFabButton,
  IonIcon,
  IonFab,
  IonPage,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import Logo from "./components/Logo";
import HomeCard from "./components/HomeCard";
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
        {/* <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/Camera" component={Camera} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter> */}

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
