
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
import { stone_wall } from './stone_wall'
export const fortified_wall: Technology = {
  dependencies: [university.name, stone_wall.name],
  "name": "fortified wall",
  "age": "castle",
  "color": "red",
}
