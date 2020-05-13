
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
export const bombard_tower: Technology = {
  "name": "bombard tower",
  "age": "imperial",
  "color": "red",
  dependencies: [chemistry.name]
}
