import { Technology } from 'src/app/models/technology.model';
import { pikeman } from './pikeman';
import { imperial_age } from './imperial_age';

export const halberdier: Technology = {
  "name": "halberdier",
  "age": "imperial",
  "color": "blue",
  dependencies: [pikeman.name, imperial_age.name],
}