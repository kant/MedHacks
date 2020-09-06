import { IonContent, IonInput, IonItem, IonList, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./Chat.css";

const Log: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList no-lines class="msgbubble">
          <div className="innermsg left">How old are you?</div>
          <div className="innermsg right">24</div>
          <div className="innermsg left">
            Have you experienced any vision loss?
          </div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">
            Are you experiencing any pain in the eyes?
          </div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">How about itchiness?</div>
          <div className="innermsg right">Yes</div>
          <div className="innermsg left">
            Have you had recent trauma to the eye?
          </div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">
            Have you had a discharge that forms a crust over your eye as you
            sleep?
          </div>
          <div className="innermsg right">Yes</div>
          <div className="innermsg left">
            Will you please upload a clear image of your eye?
          </div>
          <div className="innermsg right">
            <img
              style={{ width: "125px" }}
              src="https://www.usnews.com/dims4/USNEWS/91b0564/2147483647/crop/2000x1333%2B0%2B0/resize/300x300%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fc5%2Fda%2F48bd78d94ab8b304620fd42c1b10%2F200121-pinkeye-stock.jpg"
              alt=""
            />
          </div>
          <div className="innermsg left">
            Based on your itchiness, discharge, lack of pain/vision loss, and an
            image that shows redness of the eye, I have predicted that
            conjunctivitis is a likely cause of your visual symptoms.
          </div>
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

export default Log;
