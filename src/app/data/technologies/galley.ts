
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { feudal_age } from './feudal_age'
export const galley: Technology = {
  "name": "galley",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name, feudal_age.name]
}
