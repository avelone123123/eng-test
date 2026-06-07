export * from '@roundsquares/contract';
export interface User {
  username: string;
  role: 'user' | 'admin';
}