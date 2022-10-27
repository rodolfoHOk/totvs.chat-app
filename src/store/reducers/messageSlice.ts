import { Contact } from './contactSlice';

export interface Message {
  id: string;
  content: string;
  origin: Contact;
  destination: Contact;
  createdAt: Date;
  updatedAt: Date;
}
