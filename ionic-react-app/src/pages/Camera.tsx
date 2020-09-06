import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import React from "react";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

const takePhoto = () => {
  return "todo";
};

const Camera: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.base64 ?? photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Camera;
