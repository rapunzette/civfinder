import { Technology } from 'src/app/models/technology.model';
import { paladin_research } from './paladin_research';

export const paladin: Technology = {
  "name": "paladin",
  "age": "imperial",
  "color": "blue",
  dependencies: [paladin_research.name],
}