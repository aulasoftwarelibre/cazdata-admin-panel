import * as React from 'react';
import { SelectArrayInput } from 'react-admin'
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  FileInput,
  Filter,
  ImageField,
  List,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';

const AnimalFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const AnimalList = (props) => (
  <List {...props} filters={<AnimalFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="type" />
      <BooleanField source="isEnabled" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const AnimalShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="type" />
      <BooleanField source="isEnabled" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ImageField source="image.src" title="image.image" />
    </SimpleShowLayout>
  </Show>
);

export const AnimalEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <SelectArrayInput label='types' source="type" choices={[
        { id: 'major', name: 'Major'},
        { id: 'menor', name: 'Menor'},
      ]} />
      <BooleanInput source="isEnabled" />
      <FileInput source="image" label="Image" accept="image/*">
        <ImageField source="src" title="image" />
      </FileInput>
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectArrayInput label='types' source="type" choices={[
        { id: 'major', name: 'Major'},
        { id: 'menor', name: 'Menor'},
      ]} />
      <BooleanInput source="isEnabled" />
      <FileInput source="image" label="Image" accept="image/*">
        <ImageField source="src" title="image" />
      </FileInput>
    </SimpleForm>
  </Create>
);
