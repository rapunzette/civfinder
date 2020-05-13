
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const scorpion: Technology = {
  "name": "scorpion",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
