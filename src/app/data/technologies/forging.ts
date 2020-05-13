
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const forging: Technology = {
  dependencies: [blacksmith.name],
  "name": "forging",
  "age": "feudal",
  "color": "green",
}
