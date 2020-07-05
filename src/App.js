import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

import { AnimalCreate, AnimalEdit, AnimalList, AnimalShow } from "./animals";
import { JourneyList, JourneyShow, JourneyEdit, JourneyCreate } from "./journeys";
import { HuntModalityList, HuntModalityShow, HuntModalityEdit, HuntModalityCreate } from "./huntModalities";
import CustomLoginPage from "./CustomLoginPage";
import { firebaseConfig as config } from "./FIREBASE_CONFIG";

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
          name="journeys"
          list={JourneyList}
          show={JourneyShow}
          edit={JourneyEdit}
          create={JourneyCreate}
        />
        <Resource
          name="huntModalities"
          list={HuntModalityList}
          show={HuntModalityShow}
          edit={HuntModalityEdit}
          create={HuntModalityCreate}
        />
      </Admin>
    );
  }
}

export default App;
