import { Technology } from 'src/app/models/technology.model';
import { imperial_age } from './imperial_age';
import { light_cavalry } from './light_cavalry';

export const hussar: Technology = {
  "name": "hussar",
  "age": "imperial",
  "color": "blue",
  dependencies: [, light_cavalry.name]
}