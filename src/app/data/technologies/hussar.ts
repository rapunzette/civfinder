import { Technology } from 'src/app/models/technology.model';
import { hussar_research } from './hussar_research';

export const hussar: Technology = {
  "name": "hussar",
  "age": "imperial",
  "color": "blue",
  dependencies: [hussar_research.name]
}