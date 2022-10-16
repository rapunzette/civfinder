import { Technology } from 'src/app/models/technology.model';
import { heavy_camel_rider_research } from './heavy_camel_rider_research';

export const heavy_camel_rider: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "heavy camel rider",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_camel_rider_research.name]
}