import React from "react";
import {
  IonCard,
  IonCardContent,
  IonText,
  IonCardTitle,
  IonCardHeader,
  IonList,
  IonItem,
  IonContent,
} from "@ionic/react";
import TaskList from "./TaskList";

function HomeCard() {
  return (
    <IonText>
      <div
        style={{ color: "#238BFC", textAlign: "center", paddingBottom: "10%" }}
      >
        <h1>
          <strong>Eye care, in your hands.</strong>
        </h1>
      </div>
    </IonText>
  );
}

export default HomeCard;
