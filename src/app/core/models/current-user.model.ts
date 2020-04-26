export enum Role {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  USER = 'USER'
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
}

export interface AnonymousUser {
  authenticated: false;
}

export interface LoggedUser {
  authenticated: true;
  info: {
    personalInfo: PersonalInfo;
    username: string;
    roles: Role[];
  }
}

export type CurrentUser = AnonymousUser | LoggedUser;
