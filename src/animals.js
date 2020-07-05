// in src/posts.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  BooleanField,
  FileInput,
  ImageField,
  BooleanInput,
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
      <TextInput source="type" />
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
      <TextInput source="type" />
      <BooleanInput source="isEnabled" />
      <FileInput source="image" label="Image" accept="image/*">
        <ImageField source="src" title="image" />
      </FileInput>
    </SimpleForm>
  </Create>
);
