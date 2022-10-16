
import { Technology } from 'src/app/models/technology.model'


import { masonry } from './masonry'
export const architecture: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "architecture",
  "age": "imperial",
  "color": "green",
  dependencies: [masonry.name,]
}
