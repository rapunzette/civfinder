
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { fletching } from './fletching'
export const bodkin_arrow: Technology = {
  "name": "bodkin arrow",
  "age": "castle",
  "color": "green",
  dependencies: [castle_age.name, fletching.name]
}
