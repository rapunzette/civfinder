import { Technology } from 'src/app/models/technology.model';
import { knight } from './knight';
import { imperial_age } from './imperial_age';

export const cavalier: Technology = {
  "name": "cavalier",
  "age": "imperial",
  "color": "blue",
  dependencies: [knight.name,]
}