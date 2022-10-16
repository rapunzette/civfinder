import { Cost } from "../models/cost.model"

export function formatCost(cost: Cost): string {
  const total = cost.wood + cost.food + cost.gold + cost.stone;
  return `${total} (${cost.food}f/${cost.wood}w/${cost.gold}g/${cost.stone}s)`;
}