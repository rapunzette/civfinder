
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { blacksmith } from './blacksmith'
export const siege_workshop: Technology = {
  "name": "siege workshop",
  "age": "castle",
  "color": "red",
  dependencies: [, blacksmith.name]
}
