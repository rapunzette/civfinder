import { Technology } from 'src/app/models/technology.model';
import { militia } from './militia';
import { feudal_age } from './feudal_age';

export const man_at_arms: Technology = {
  "name": "man at arms",
  "age": "feudal",
  "color": "blue",
  dependencies: [militia.name, feudal_age.name]
}