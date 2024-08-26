import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  brandCode?: SortOrder;
  cart?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  oem?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
