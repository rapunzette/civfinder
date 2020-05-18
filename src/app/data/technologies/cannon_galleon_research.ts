
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
import { dock } from './dock'
export const cannon_galleon_research: Technology = {
  "name": "cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name, dock.name],
}
