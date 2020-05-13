
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { castle_age } from './castle_age'
export const gillnets: Technology = {
  "name": "gillnets",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name, castle_age.name]
}
