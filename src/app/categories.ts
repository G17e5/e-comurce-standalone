export interface categories {
  results:  number;
  metadata: Metadata;
  data:     categoryData[];
}

export interface categoryData {
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
}
