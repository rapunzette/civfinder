
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
import { feudal_age } from './feudal_age'
export const horse_collar: Technology = {
  "name": "horse collar",
  "age": "feudal",
  "color": "green",
  dependencies: [mill.name, feudal_age.name]
}
