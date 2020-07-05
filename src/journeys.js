import React from 'react'
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  Filter,
  List,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';

const JourneyFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );

  export const JourneyList = (props) => (
    <List {...props} filters={<JourneyFilter />}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="createdate" />
        <TextField source="lastupdate" />
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  );

  export const JourneyShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="createdate" />
        <TextField source="lastupdate" />
      </SimpleShowLayout>
    </Show>
  );

  export const JourneyEdit = (props) => (
    <Edit {...props}>
      <SimpleForm redirect="show">
        <TextInput disabled source="id" />
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );

  export const JourneyCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
      </SimpleForm>
    </Create>
  );