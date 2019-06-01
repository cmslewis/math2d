import { OUT_MAX_X, OUT_MAX_Y, OUT_MIN_X, OUT_MIN_Y } from "../const";
import { _boxAlloc, _polylineAlloc } from "../internal/allocFunctions";
import { arrayReset } from "../internal/collectionsUtils";
import { IBox, IMat2x3, IVec } from "../types";
import { polylineGetBounds, polylineTransformByAff } from "./polylineFunctions";

export function boxAlloc() {
  return _boxAlloc();
}

export function boxClone(box: IBox, out = boxAlloc()) {
  return boxReset(box.minX, box.minY, box.maxX, box.maxY, out);
}

// tslint:disable:no-bitwise
export function boxComputeOutCode(box: IBox, point: IVec) {
  let out = 0;
  if (point.x < box.minX) {
    out |= OUT_MIN_X;
  } else if (point.x > box.maxX) {
    out |= OUT_MAX_X;
  }

  if (point.y < box.minY) {
    out |= OUT_MIN_Y;
  } else if (point.y > box.maxY) {
    out |= OUT_MAX_Y;
  }

  return out;
}
// tslint:enable:no-bitwise

export function boxContainsBox(a: IBox, b: IBox) {
  return b.minX >= a.minX && b.minY >= a.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
}

export function boxContainsPoint(box: IBox, point: IVec) {
  return point.x >= box.minX && point.y >= box.minY && point.x <= box.maxX && point.y <= box.maxY;
}

export function boxEncapsulate(box: IBox, point: IVec, out = boxAlloc()) {
  return boxReset(
    Math.min(box.minX, point.x),
    Math.min(box.minY, point.y),
    Math.max(box.maxX, point.x),
    Math.max(box.maxY, point.y),
    out,
  );
}

export function boxIntersection(a: IBox, b: IBox, out = boxAlloc()) {
  return boxReset(
    Math.max(a.minX, b.minX),
    Math.max(a.minY, b.minY),
    Math.min(a.maxX, b.maxX),
    Math.min(a.maxY, b.maxY),
    out,
  );
}

export function boxIntersectsBox(a: IBox, b: IBox) {
  return a.minX <= b.maxX && a.minY <= b.maxY && a.maxX >= b.minX && a.maxY >= b.minY;
}

export function boxIsEmpty(box: IBox) {
  return !(box.maxX >= box.minX && box.maxY >= box.minY);
}

export function boxReset(minX: number, minY: number, maxX: number, maxY: number, out = boxAlloc()) {
  out.minX = minX;
  out.minY = minY;
  out.maxX = maxX;
  out.maxY = maxY;
  return out;
}

const TMP_boxTransformByAff_0 = _polylineAlloc();
export function boxTransformByAff(box: IBox, mat: IMat2x3, out = boxAlloc()) {
  const poly = TMP_boxTransformByAff_0;
  arrayReset(poly, box.minX, box.minY, box.minX, box.maxY, box.maxX, box.maxY, box.maxX, box.minY);
  polylineTransformByAff(poly, mat, poly);
  return polylineGetBounds(poly, out);
}

export function boxUnion(a: IBox, b: IBox, out = boxAlloc()) {
  return boxReset(
    Math.min(a.minX, b.minX),
    Math.min(a.minY, b.minY),
    Math.max(a.maxX, b.maxX),
    Math.max(a.maxY, b.maxY),
    out,
  );
}
