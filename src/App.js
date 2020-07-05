import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';
import CustomLoginPage from './CustomLoginPage';
import { AnimalList, AnimalShow, AnimalEdit, AnimalCreate } from './animals';

import { firebaseConfig as config } from './FIREBASE_CONFIG';

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
      </Admin>
    );
  }
}

export default App;
