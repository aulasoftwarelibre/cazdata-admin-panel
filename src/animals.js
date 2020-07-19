import * as React from 'react';
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
  SelectInput,
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
      <TextField label="Nombre" source="name" />
      <TextField label="Tipo" source="type" />
      <BooleanField label="Habilitado" source="isEnabled" />
      <TextField label="Fecha de Creación" source="createdate" />
      <TextField label="Última Fecha de Modificación" source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const AnimalShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="Nombre" source="name" />
      <TextField label="Tipo" source="type" />
      <BooleanField label="Habilitado" source="isEnabled" />
      <TextField label="Fecha de Creación" source="createdate" />
      <TextField label="Última Fecha de Modificación" source="lastupdate" />
      <ImageField label="Imagen" source="image.src" title="image.image" />
    </SimpleShowLayout>
  </Show>
);

export const AnimalEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput disabled source="id" />
      <TextInput label="Nombre" source="name" />
      <SelectInput
        label="Tipo"
        source="type"
        choices={[
          { id: 'Mayor', name: 'Mayor' },
          { id: 'Menor', name: 'Menor' },
        ]}
      />
      <BooleanInput source="isEnabled" />
      <FileInput source="image" label="Imagen" accept="image/*">
        <ImageField source="src" title="image" />
      </FileInput>
    </SimpleForm>
  </Edit>
);

export const AnimalCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="name" />
      <SelectInput
        label="Tipo"
        source="type"
        choices={[
          { id: 'Mayor', name: 'Mayor' },
          { id: 'Menor', name: 'Menor' },
        ]}
      />
      <BooleanInput source="isEnabled" />
      <FileInput source="image" label="Imagen" accept="image/*">
        <ImageField source="src" title="image" />
      </FileInput>
    </SimpleForm>
  </Create>
);
