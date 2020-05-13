
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const padded_archer_armor: Technology = {
  dependencies: [blacksmith.name],
  "name": "padded archer armor",
  "age": "feudal",
  "color": "green",
}
