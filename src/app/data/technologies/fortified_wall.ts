
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const fortified_wall: Technology = {
  dependencies: [university.name,],
  "name": "fortified wall",
  "age": "castle",
  "color": "red",
}
