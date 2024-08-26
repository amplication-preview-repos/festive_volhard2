import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Brand" source="brand" />
        <TextInput label="BrandCode" source="brandCode" />
        <BooleanInput label="Cart" source="cart" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Model" source="model" />
        <TextInput label="OEM" source="oem" />
        <NumberInput label="Price" source="price" />
        <TextInput label="ProductName" source="productName" />
      </SimpleForm>
    </Edit>
  );
};
