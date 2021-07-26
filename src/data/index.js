import toppings from "./toppings";
import crusts, { neapolitanCrust } from "./crusts";
import sizes, { smallSize } from "./sizes";

export default {
  toppings,
  crusts,
  sizes,
  default: { size: smallSize.id, crust: neapolitanCrust.id, toppings: [] },
};
