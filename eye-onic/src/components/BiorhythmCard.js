import React from "react";
import dayjs from "dayjs";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { calculateBiorhythms } from "../calculations";
import BiorhythmChart from "./BiorhythmChart";
import "./BiorhythmCard.css";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY");
}

function BiorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="biorhythm-card">
        <BiorhythmChart
          birthDate={birthDate}
          targetDate={targetDate}
        ></BiorhythmChart>
        <p className="physical">Physical: {physical.toFixed(4)}</p>
        <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
        <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;
