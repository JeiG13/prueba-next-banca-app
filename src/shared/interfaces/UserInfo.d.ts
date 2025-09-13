export interface IUserInfo {
  full_name: string;
  profile_photo: string;
  products: Product[];
}

export interface Product {
  type: string;
  id: string;
}
