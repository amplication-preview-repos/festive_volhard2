import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
