export interface IVec2 {
  x: number;
  y: number;
}

export interface ILineSegment2 {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface IRay2 {
  x0: number;
  y0: number;
  dirX: number;
  dirY: number;
}

export interface IMat2x3 {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

export interface IAabb2 {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export type IPolygon2 = number[];
export type IPolyline2 = number[];
