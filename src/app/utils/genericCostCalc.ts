import { Civilization } from "../models/civilization.model";
import { Cost } from "../models/cost.model";
import { Technology } from "../models/technology.model";
import { formatCost } from "./cost";

export function genericCostCalc(techs: Technology[], civ: Civilization): string {
  console.log({ techs, civ });

  const cost: Cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };
  techs.forEach(tech => {
    if (!civ[tech.name]) {
      console.log(`Civ ${civ.name} does not have tech ${tech.name}`);

      // if the civ doesn't have the tech, move to next tech
      return;
    }
    cost.wood += tech.cost.wood;
    cost.food += tech.cost.food;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });
  return formatCost(cost);
}