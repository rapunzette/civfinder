
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
import { dock } from './dock'
export const cannon_galleon: Technology = {
  "name": "cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [chemistry.name, dock.name]
}
