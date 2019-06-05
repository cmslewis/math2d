import { IVec } from "../types";

/**
 * Computes the dot product of the two vectors, i.e. `a.x * b.x + a.y * b.y`.
 *
 * @param u the first vector
 * @param v the vector to dot with the first
 * @see {@link vecCross}
 */
export function vecDot(u: IVec, v: IVec) {
  return u.x * v.x + u.y * v.y;
}
