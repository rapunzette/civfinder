import { Technology } from 'src/app/models/technology.model';
import { light_cavalry_research } from './light_cavalry_research';

export const light_cavalry: Technology = {
  "name": "light cavalry",
  "age": "castle",
  "color": "blue",
  dependencies: [light_cavalry_research.name]
}