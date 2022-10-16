
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
export const eagle_warrior_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "eagle warrior research",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name],
}
