
import { Technology } from 'src/app/models/technology.model'
import { blacksmith } from './blacksmith'
export const scale_barding_armor: Technology = {
  dependencies: [blacksmith.name],
  "name": "scale barding armor",
  "age": "feudal",
  "color": "green",
}
