import React from 'react';
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

const ModalitiesFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const ModalitiesList = (props) => (
  <List {...props} filters={<ModalitiesFilter />}>
    <Datagrid>
      <TextField label="Nombre" source="name" />
      <TextField label="Fecha de Creación" source="createdate" />
      <TextField label="Última Fecha de Modificación" source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ModalitiesShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="Nombre" source="name" />
      <TextField label="Fecha de Creación" source="createdate" />
      <TextField label="Última Fecha de Modificación" source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const ModalitiesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Edit>
);

export const ModalitiesCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput label="Nombre" source="name" />
    </SimpleForm>
  </Create>
);
