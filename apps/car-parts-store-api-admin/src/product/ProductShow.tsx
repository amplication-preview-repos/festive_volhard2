import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Brand" source="brand" />
        <TextField label="BrandCode" source="brandCode" />
        <BooleanField label="Cart" source="cart" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Model" source="model" />
        <TextField label="OEM" source="oem" />
        <TextField label="Price" source="price" />
        <TextField label="ProductName" source="productName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
