import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import {
  LeafletView,
  MapMarker,
  MapShape,
  MapShapeType,
  AnimationType,
  AnimationDirection,
  OWN_POSITION_MARKER_ID,
} from '@carlossts/react-native-leaflet-platform';

const DEFAULT_LOCATION = {
  latitude: -23.5489,
  longitude: -46.6388,
};

const MARKERS: MapMarker[] = [
  {
    id: 'park',
    position: { lat: -23.5465, lng: -46.6393 },
    icon: '🌳',
    size: [40, 40],
    title: 'Park',
    description: 'A beautiful park for a stroll',
    animation: {
      type: AnimationType.BOUNCE,
      duration: 1,
      iterationCount: 'infinite',
    },
    tooltipStyle: `
      background: #2e7d32;
      color: white;
      border-radius: 12px;
      padding: 8px 14px;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `,
    tooltipTipStyle: 'background: #2e7d32;',
    titleStyle: 'color: white; font-weight: bold; font-size: 13px;',
    descriptionStyle: 'color: rgba(255,255,255,0.8); font-size: 11px; margin-top: 2px;',
    closeButton: true,
    closeOnClick: false,
    autoClose: true,
  },
  {
    id: 'cafe',
    position: { lat: -23.5510, lng: -46.6350 },
    icon: '☕',
    size: [40, 40],
    title: 'Premium Coffee',
    description: 'The best coffee in town',
    animation: {
      type: AnimationType.PULSE,
      duration: 2,
      direction: AnimationDirection.ALTERNATE,
      iterationCount: 'infinite',
    },
    tooltipStyle: `
      background: #6d4c41;
      color: white;
      border-radius: 12px;
      padding: 8px 14px;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `,
    tooltipTipStyle: 'background: #6d4c41;',
    titleStyle: 'color: white; font-weight: bold; font-size: 13px;',
    descriptionStyle: 'color: rgba(255,255,255,0.8); font-size: 11px; margin-top: 2px;',
    closeButton: true,
    autoClose: true,
  },
  {
    id: 'museum',
    position: { lat: -23.5475, lng: -46.6430 },
    icon: '🏛️',
    size: [45, 45],
    title: 'Art Museum',
    description: 'Permanent and temporary exhibitions',
    animation: {
      type: AnimationType.FADE,
      duration: 2.5,
      direction: AnimationDirection.ALTERNATE,
      iterationCount: 'infinite',
    },
    iconStyle: `
      border-radius: 50%;
      border: 3px solid #1565c0;
      background: white;
      box-shadow: 0 0 0 8px rgba(21,101,192,0.25);
    `,
    tooltipStyle: `
      background: #1565c0;
      color: white;
      border-radius: 12px;
      padding: 8px 14px;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `,
    tooltipTipStyle: 'background: #1565c0;',
    titleStyle: 'color: white; font-weight: bold; font-size: 13px;',
    descriptionStyle: 'color: rgba(255,255,255,0.8); font-size: 11px; margin-top: 2px;',
    openPopupOnAdd: true,
    closeButton: true,
    closeOnEscapeKey: true,
    popupMaxWidth: 280,
    autoPan: true,
  },
  {
    id: 'restaurant',
    position: { lat: -23.5520, lng: -46.6410 },
    icon: '🍕',
    size: [40, 40],
    title: 'Italian Restaurant',
    description: 'Handcrafted pizzas and fresh pasta',
    animation: {
      type: AnimationType.WAGGLE,
      duration: 1.5,
      iterationCount: 'infinite',
    },
    tooltipStyle: `
      background: #c62828;
      color: white;
      border-radius: 12px;
      padding: 8px 14px;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `,
    tooltipTipStyle: 'background: #c62828;',
    titleStyle: 'color: white; font-weight: bold; font-size: 13px;',
    descriptionStyle: 'color: rgba(255,255,255,0.8); font-size: 11px; margin-top: 2px;',
    closeButton: false,
    autoClose: true,
  },
];

const SHAPES: MapShape[] = [
  {
    id: 'park-area',
    shapeType: MapShapeType.CIRCLE,
    center: { lat: -23.5465, lng: -46.6393 },
    radius: 150,
    color: '#2e7d32',
  },
  {
    id: 'walking-path',
    shapeType: MapShapeType.POLYLINE,
    positions: [
      { lat: -23.5489, lng: -46.6388 },
      { lat: -23.5475, lng: -46.6395 },
      { lat: -23.5465, lng: -46.6393 },
    ],
    color: '#FF6D00',
  },
  {
    id: 'zone',
    shapeType: MapShapeType.POLYGON,
    positions: [
      { lat: -23.5500, lng: -46.6420 },
      { lat: -23.5500, lng: -46.6380 },
      { lat: -23.5530, lng: -46.6380 },
      { lat: -23.5530, lng: -46.6420 },
    ],
    color: '#c62828',
  },
];

const App: React.FC = () => {
  const [lastEvent, setLastEvent] = useState<string>('Tap on the map or a marker');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      <View style={styles.header}>
        <Text style={styles.title}>Demo Map</Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {lastEvent}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <LeafletView
          mapCenterPosition={{
            lat: DEFAULT_LOCATION.latitude,
            lng: DEFAULT_LOCATION.longitude,
          }}
          zoom={15}
          mapMarkers={MARKERS}
          mapShapes={SHAPES}
          useMarkerClustering={false}
          ownPositionMarker={{
            id: OWN_POSITION_MARKER_ID,
            position: {
              lat: DEFAULT_LOCATION.latitude,
              lng: DEFAULT_LOCATION.longitude,
            },
            icon: '📍',
            size: [36, 36],
            title: 'You are here',
            description: 'Your current location',
            iconStyle: `
              border-radius: 50%;
              border: 3px solid #FF6D00;
              background: white;
              box-shadow: 0 0 0 10px rgba(255,109,0,0.25);
            `,
            tooltipStyle: `
              background: #FF6D00;
              color: white;
              border-radius: 12px;
              padding: 6px 12px;
              font-weight: bold;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            `,
            tooltipTipStyle: 'background: #FF6D00;',
            titleStyle: 'color: white; font-weight: bold; font-size: 12px;',
            descriptionStyle: 'color: rgba(255,255,255,0.8); font-size: 10px; margin-top: 2px;',
            openPopupOnAdd: true,
            closeButton: false,
            autoPan: false,
          }}
          onMessageReceived={(message) => {
            if (message.event === 'onMapMarkerClicked') {
              const id = message.payload?.mapMarkerID;
              const marker = MARKERS.find((m) => m.id === id);
              setLastEvent(marker ? marker.title ?? id : id ?? '');
            } else if (message.event === 'onMapClicked') {
              const pos = message.payload?.touchLatLng;
              if (pos) {
                setLastEvent(`Tap: ${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`);
              }
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : (StatusBar.currentHeight || 40) + 8,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 13,
    color: '#ffffffaa',
    marginTop: 2,
  },
  mapContainer: {
    flex: 1,
  },
});

export default App;
