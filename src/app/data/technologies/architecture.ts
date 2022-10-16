
import { Technology } from 'src/app/models/technology.model'


import { masonry } from './masonry'
export const architecture: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "architecture",
  "age": "imperial",
  "color": "green",
  dependencies: [masonry.name,]
}
