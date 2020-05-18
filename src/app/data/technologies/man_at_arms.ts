import { Technology } from 'src/app/models/technology.model';
import { man_at_arms_research } from './man_at_arms_research';

export const man_at_arms: Technology = {
  "name": "man at arms",
  "age": "feudal",
  "color": "blue",
  dependencies: [man_at_arms_research.name,]
}