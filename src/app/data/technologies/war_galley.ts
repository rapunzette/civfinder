
import { Technology } from 'src/app/models/technology.model'
import { galley } from './galley'
import { castle_age } from './castle_age'
export const war_galley: Technology = {
  "name": "war galley",
  "age": "castle",
  "color": "blue",
  dependencies: [galley.name,]
}
