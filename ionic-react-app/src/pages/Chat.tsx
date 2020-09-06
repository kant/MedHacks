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
import "./Chat.css";

const Chat: React.FC = () => {
  const yourMessages: string[] = ["Hello", "How can I help you?"];
  const myMessages: string[] = ["Hi", "How do I treat a stye?"];
  const [message, setMessage] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList no-lines class="msgbubble">
          <div className="innermsg left">How old are you?</div>
          <div className="innermsg right">33</div>
          <div className="innermsg left">
            Have you experienced any vision loss?
          </div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">Do you have a headache?</div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">Do you experience any floaters?</div>
          <div className="innermsg right">What are floaters?</div>
          <div className="innermsg left">
            Floaters are little “cobwebs” or specks that float about in your
            field of vision. They are small, dark, shadowy shapes that can look
            like spots, thread-like strands, or squiggly lines. They move as
            your eyes move and seem to dart away when you try to look at them
            directly.
          </div>
          <div className="innermsg right">Then yes</div>

          {/* {yourMessages.map((value, index) => {
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
          })} */}
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

export default Chat;
