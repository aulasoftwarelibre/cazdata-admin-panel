import React from 'react'
import { SelectArrayInput } from 'react-admin'
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

const HuntModalityFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );

  export const HuntModalityList = (props) => (
    <List {...props} filters={<HuntModalityFilter />}>
      <Datagrid>
        <TextField source='name' />
        <TextField source="createdate" />
        <TextField source="lastupdate" />
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  );

  export const HuntModalityShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="createdate" />
        <TextField source="lastupdate" />
      </SimpleShowLayout>
    </Show>
  );

  export const HuntModalityEdit = (props) => (
    <Edit {...props}>
      <SimpleForm redirect="show">
        <TextInput disabled source="id" />
        <SelectArrayInput label='name' source="name" choices={[
        { id: 'name', name: 'Perdiz con reclamo'},
        { id: 'certreria', name: 'Certrería'},
        { id: 'ojeo', name: 'Ojeo'},
        { id: 'mano', name: 'En mano'},
        { id: 'acuaticas', name: 'Caza de acuáticas'},
      ]} />
      </SimpleForm>
    </Edit>
  );

  export const HuntModalityCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
      <SelectArrayInput label='name' source="name" choices={[
        { id: 'reclamo', name: 'Perdiz con reclamo'},
        { id: 'certreria', name: 'Certrería'},
        { id: 'ojeo', name: 'Ojeo'},
        { id: 'mano', name: 'En mano'},
        { id: 'acuaticas', name: 'Caza de acuáticas'},
      ]} />
      </SimpleForm>
    </Create>
  );