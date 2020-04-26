export interface UserModel {
  id: string;
  username: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  roles: string[];
}

export interface CreateUserModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateUserModel {
  firstName: string;
  lastName: string;
  email: string;
}

export interface SetRolesUserModel {
  roles: string[];
}
