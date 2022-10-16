
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
import { dock } from './dock'
export const cannon_galleon_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name, dock.name],
}
