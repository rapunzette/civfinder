import { Technology } from 'src/app/models/technology.model';
import { elephant_archer } from './elephant_archer';

export const elite_elephant_archer_research: Technology = {
  "name": "elite elephant archer research",
  "age": "imperial",
  "color": "green",
  dependencies: [elephant_archer.name],
}