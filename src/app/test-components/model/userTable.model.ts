export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  company: {
    name: string;
  };
}
