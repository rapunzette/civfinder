import { Technology } from 'src/app/models/technology.model';
import { arbalester_research } from './arbalester_research';

export const arbalester: Technology = {
  "name": "arbalester",
  "age": "imperial",
  "color": "blue",
  dependencies: [arbalester_research.name,],
}