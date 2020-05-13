
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const monk: Technology = {
  "name": "monk",
  "age": "castle",
  "color": "blue",
  dependencies: [monastery.name]
}
