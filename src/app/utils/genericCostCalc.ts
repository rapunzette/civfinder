import { Civilization } from "../models/civilization.model";
import { Cost } from "../models/cost.model";
import { Technology } from "../models/technology.model";
import { formatCost } from "./cost";

export function genericCostCalc(techs: Technology[], civ: Civilization): string {

  const cost: Cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };
  techs.forEach(tech => {
    if (!civ[tech.name]) {
      // if the civ doesn't have the tech, move to next tech
      console.log(`${civ.name} doesn't have ${tech.name}`);

      return;
    }
    cost.wood += tech.cost.wood;
    cost.food += tech.cost.food;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });
  return formatCost(cost);
}