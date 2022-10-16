
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
export const eagle_warrior_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 200,
    "stone": 0
  },
  "name": "eagle warrior research",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name],
}
