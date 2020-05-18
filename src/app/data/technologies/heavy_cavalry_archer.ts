import { Technology } from 'src/app/models/technology.model';
import { cavalry_archer } from './cavalry_archer';
import { imperial_age } from './imperial_age';

export const heavy_cavalry_archer: Technology = {
  "name": "heavy cavalry archer",
  "age": "imperial",
  "color": "blue",
  dependencies: [cavalry_archer.name,]
}