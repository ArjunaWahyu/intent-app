import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList class="ion-align-items-center ion-justify-content-center ion-margin">
          <IonItem
            counter={true}
            counterFormatter={(inputLength, maxLength) =>
              `${maxLength - inputLength} characters remaining`
            }
          >
            <IonLabel position="floating">Nama</IonLabel>
            <IonInput
              maxlength={20}
              type="text"
              placeholder="Masukkan Nama Anda"
            ></IonInput>
          </IonItem>
          <IonItem
            counter={true}
            counterFormatter={(inputLength, maxLength) =>
              `${maxLength - inputLength} characters remaining`
            }
          >
            <IonLabel position="floating">Tempat</IonLabel>
            <IonInput
              maxlength={50}
              type="text"
              placeholder="Masukkan Tempat Lahir Anda"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Tanggal</IonLabel>
            <IonInput type="date" placeholder="Enter your date"></IonInput>
          </IonItem>
          <IonButton id="btnNext" href="/tab2" expand="block" color="primary">
            Next
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
