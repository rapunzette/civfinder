import { Technology } from 'src/app/models/technology.model';
import { cavalier_research } from './cavalier_research';

export const cavalier: Technology = {
  "name": "cavalier",
  "age": "imperial",
  "color": "blue",
  dependencies: [cavalier_research.name,]
}