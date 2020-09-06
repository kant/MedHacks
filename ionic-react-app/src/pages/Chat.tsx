import { IonContent, IonInput, IonItem, IonList, IonPage } from "@ionic/react";
import React, { useState } from "react";
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
            directly. Read more{" "}
            <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/floaters">
              here
            </a>
            .
          </div>
          <div className="innermsg right">Then yes</div>
          <div className="innermsg left">
            How about flashes (visual bursts or streaks of light)?
          </div>
          <div className="innermsg right">No</div>
          <div className="innermsg left">
            Have you had any nausea or vomiting?
          </div>
          <div className="innermsg right">Yes</div>
          <div className="innermsg left">
            Do you have a history of migraines?
          </div>
          <div className="innermsg right">Yes</div>
          <div className="innermsg left">
            Will you please upload a clear image of your eye?
          </div>
          <div className="innermsg right">
            <img
              style={{ width: "125px" }}
              src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/eye_color_and_shape_slideshow/650x350_eye_color_and_shape_slideshow.jpg"
              alt=""
            />
          </div>
          <div className="innermsg left">
            Based on your headache, floaters, nausea/vomiting, history of
            migraines, and photo, that appears externally normal, I have
            predicted that migraines are a likely cause of your visual symptoms.
          </div>

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
