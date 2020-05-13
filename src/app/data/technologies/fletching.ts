
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const fletching: Technology = {
  dependencies: [blacksmith.name],
  "name": "fletching",
  "age": "feudal",
  "color": "green",
}
