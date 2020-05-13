import { Technology } from 'src/app/models/technology.model';
import { spearman } from './spearman';
import { castle_age } from './castle_age';

export const pikeman: Technology = {
  "name": "pikeman",
  "age": "castle",
  "color": "blue",
  dependencies: [spearman.name, castle_age.name],
}