import { IonCheckbox, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { useState } from "react";

const checkboxList = [
  { val: "Take a picture", isChecked: false },
  { val: "Enter your symptoms", isChecked: false },
  { val: "Get a diagnosis", isChecked: false },
];

export const TaskList = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonList>
      {checkboxList.map(({ val, isChecked }, i) => (
        <IonItem key={i}>
          <IonCheckbox
            slot="end"
            value={val}
            checked={isChecked}
            container="primary"
          />
          <IonLabel color="primary">{val}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default TaskList;
