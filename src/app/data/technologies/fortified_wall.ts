
import { Technology } from 'src/app/models/technology.model'
import { fortified_wall_research } from './fortified_wall_research'
export const fortified_wall: Technology = {
  dependencies: [fortified_wall_research.name],
  "name": "fortified wall",
  "age": "castle",
  "color": "red",
}
