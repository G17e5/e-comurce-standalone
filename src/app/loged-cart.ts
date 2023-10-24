export interface cartInterface {
  status:         string;
  numOfCartItems: number;
  data:           logedCartData;
}

export interface logedCartData {
  _id:            string;
  cartOwner:      string;
  products:       cartProductElement[];
  createdAt:      Date;
  updatedAt:      Date;
  __v:            number;
  totalCartPrice: number;
}

export interface cartProductElement {
  count:   number;
  _id:     string;
  product: cartProduct;
  price:   number;
}

export interface cartProduct {
  subcategory:    Brand[];
  _id:            string;
  title:          string;
  quantity:       number;
  imageCover:     string;
  category:       Brand;
  brand:          Brand;
  ratingsAverage: number;
  id:             string;
}

export interface Brand {
  _id:       string;
  name:      string;
  slug:      string;
  image?:    string;
  category?: string;
}
