export interface Brands {
  results:  number;
  metadata: Metadata;
  data:     BrandsData[];
}

export interface BrandsData {
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
  nextPage:      number;
}
