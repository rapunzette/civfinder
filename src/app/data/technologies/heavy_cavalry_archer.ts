import { Technology } from 'src/app/models/technology.model';
import { heavy_cavalry_archer_research } from './heavy_cavalry_archer_research';

export const heavy_cavalry_archer: Technology = {
  "name": "heavy cavalry archer",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_cavalry_archer_research.name,]
}