import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';

import { AnimalCreate, AnimalEdit, AnimalList, AnimalShow } from './animals';
import CustomLoginPage from './CustomLoginPage';
import { firebaseConfig as config } from './FIREBASE_CONFIG';
import { JourneyCreate, JourneyEdit, JourneyList, JourneyShow } from './journeys';
import { ModalitiesCreate, ModalitiesEdit, ModalitiesList, ModalitiesShow } from './modalities';

const options = {
  logging: true,
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="animals"
          list={AnimalList}
          show={AnimalShow}
          edit={AnimalEdit}
          create={AnimalCreate}
        />
        <Resource
          name="modalities"
          list={ModalitiesList}
          show={ModalitiesShow}
          edit={ModalitiesEdit}
          create={ModalitiesCreate}
        />
        <Resource
          name="journeys"
          list={JourneyList}
          show={JourneyShow}
          edit={JourneyEdit}
          create={JourneyCreate}
        />
      </Admin>
    );
  }
}

export default App;
