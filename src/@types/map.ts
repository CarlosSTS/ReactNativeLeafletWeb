/** Represents a geographical point with a latitude and longitude. */
export interface LatLng {
  /** Latitude in degrees. */
  lat: number;
  /** Longitude in degrees. */
  lng: number;
}

/** Represents a rectangular geographical area defined by its south-west and north-east corners. */
export interface LatLngBounds {
  /** The south-west corner of the bounding box. */
  southWest: LatLng;
  /** The north-east corner of the bounding box. */
  northEast: LatLng;
}

/** A lightweight icon based on a `<div>` element instead of an image. Useful for fully custom markers. */
export interface DivIcon {
  /** Custom HTML content to render inside the marker `<div>`. */
  html?: string;
  /** CSS class name applied to the marker `<div>`. Defaults to `'leaflet-div-icon'`. */
  className?: string;
}

import type {
  MapLayer,
  MapMarker,
  MapShape,
  OwnPositionMarker,
  WebviewLeafletMessage,
} from './leaflet';

/** Common props shared by the LeafletView component across all platforms. */
export interface LeafletViewProps {
  /** Callback that receives messages from the map as `WebviewLeafletMessage` objects. */
  onMessageReceived?: (message: WebviewLeafletMessage) => void;
  /** An array of tile layers to display on the map. Defaults to OpenStreetMap. */
  mapLayers?: MapLayer[];
  /** An array of markers to display on the map. */
  mapMarkers?: MapMarker[];
  /** An array of shapes (polygons, polylines, circles, rectangles) to display on the map. */
  mapShapes?: MapShape[];
  /** The center position of the map as `{ lat, lng }`. */
  mapCenterPosition?: LatLng;
  /** A special marker representing the user's own position. Uses `OWN_POSITION_MARKER_ID` as its ID. */
  ownPositionMarker?: OwnPositionMarker;
  /** The zoom level of the map (1–19). Defaults to `15`. */
  zoom?: number;
  /** Enables debug message logging. */
  doDebug?: boolean;
  /** Controls visibility of the zoom controls on the map. */
  zoomControl?: boolean;
  /** Controls visibility of the attribution control on the map. */
  attributionControl?: boolean;
  /** Enables or disables marker clustering. Defaults to `true`. */
  useMarkerClustering?: boolean;
  /** Custom CSS style string applied to the zoom control container. */
  zoomControlStyle?: string;
  /** Custom CSS style string applied to the zoom-in button. */
  zoomInStyle?: string;
  /** Custom CSS style string applied to the zoom-out button. */
  zoomOutStyle?: string;
}
