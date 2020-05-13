
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const fishing_ship: Technology = {
  "name": "fishing ship",
  "age": "dark",
  "color": "blue",
  dependencies: [dock.name]
}
