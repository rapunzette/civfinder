import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';

export const militia: Technology = {
  "name": "militia",
  "age": "dark",
  "color": "blue",
  "parentName": barracks.name,
}