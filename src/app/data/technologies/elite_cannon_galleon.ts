
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon } from './cannon_galleon'
export const elite_cannon_galleon: Technology = {
  "name": "elite cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [cannon_galleon.name]
}
