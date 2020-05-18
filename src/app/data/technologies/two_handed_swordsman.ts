import { Technology } from 'src/app/models/technology.model';
import { two_handed_swordsman_research } from './two_handed_swordsman_research';

export const two_handed_swordsman: Technology = {
  "name": "two handed swordsman",
  "age": "imperial",
  "color": "blue",
  dependencies: [two_handed_swordsman_research.name,],
}