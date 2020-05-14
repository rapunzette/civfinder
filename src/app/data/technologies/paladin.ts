import { Technology } from 'src/app/models/technology.model';
import { cavalier } from './cavalier';

export const paladin: Technology = {
  "name": "paladin",
  "age": "imperial",
  "color": "blue",
  dependencies: [cavalier.name],
}