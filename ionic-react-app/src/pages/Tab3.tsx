import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonList,
  IonInput,
  IonItem,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const yourMessages: string[] = ["Hello", "How can I help you?"];
  const myMessages: string[] = ["Hi!", "How do I treat a stye?"];
  const [message, setMessage] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList no-lines class="msgbubble">
          {yourMessages.map((value, index) => {
            return (
              <div className="innermsg left" key={index}>
                {value}
              </div>
            );
          })}
          {myMessages.map((value, index) => {
            return (
              <div className="innermsg right" key={index}>
                {value}
              </div>
            );
          })}
          {message && <div className="innermsg right">{message}</div>}
        </IonList>
        <IonItem lines="none" className="input-wrapper">
          <IonInput
            value={message}
            type="text"
            class="chat-input"
            placeholder="Enter a message"
            onIonChange={(event) => {
              setMessage(event.detail.value!);
            }}
          ></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
