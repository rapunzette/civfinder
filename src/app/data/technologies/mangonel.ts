
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const mangonel: Technology = {
  "name": "mangonel",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}

