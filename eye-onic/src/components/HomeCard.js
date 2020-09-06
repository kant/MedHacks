import React from "react";
import {
  IonCard,
  IonCardContent,
  IonText,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonItem,
} from "@ionic/react";
import TaskList from "./TaskList";

function HomeCard() {
  return (
    <IonCard className="white-bg">
      <IonCardContent>
        <h1>
          <strong>Eye care, in your hands.</strong>
        </h1>
      </IonCardContent>
    </IonCard>
  );
}

export default HomeCard;
