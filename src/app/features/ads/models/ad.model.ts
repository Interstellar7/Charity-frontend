export interface AdModel {
  id: number;
  title: string;
  description?: string;
  categoryId: number;
  adStatusId: number;
}

export interface CreateAdModel {
  title: string;
  description: string;
  categoryId: number;
}

export interface UpdateAdModel {
  title: string;
  description: string;
}
