
export interface LoginForm{
  identifiant:string;
  motDePasse:string;
}

export interface AuthDTO{
  token:string;
  role:string;
  username:string;
}
