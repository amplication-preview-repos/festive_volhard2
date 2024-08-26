import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  brand?: StringNullableFilter;
  brandCode?: StringNullableFilter;
  cart?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
  oem?: StringNullableFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
};
