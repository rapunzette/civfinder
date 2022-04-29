import { Technology } from 'src/app/models/technology.model';
import { armored_elephant } from './armored_elephant';

export const siege_elephant_research: Technology = {
  "name": "siege elephant research",
  "age": "imperial",
  "color": "green",
  dependencies: [armored_elephant.name],
}