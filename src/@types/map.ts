export interface LatLng {
  lat: number;
  lng: number;
}

export interface LatLngBounds {
  southWest: LatLng;
  northEast: LatLng;
}

export interface Point {
  x: number;
  y: number;
}

export interface DivIcon {
  html?: string;
  className?: string;
}

export type LatLngExpression = LatLng | [number, number];
