
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const transport_ship: Technology = {
  "name": "transport ship",
  "age": "dark",
  "color": "blue",
  dependencies: [dock.name]
}
