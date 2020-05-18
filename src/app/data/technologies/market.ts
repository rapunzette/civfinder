
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
import { mill } from './mill'
export const market: Technology = {
  "name": "market",
  "age": "feudal",
  "color": "red",
  dependencies: [mill.name,]
}
