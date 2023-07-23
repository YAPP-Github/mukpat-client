'use client';

import { useContext, createContext, ReactNode, useReducer } from 'react';
import { Place, PlaceList } from '@/types/map';

type DisplayState = {
  map: boolean;
  searchList: boolean;
  marker: boolean;
};
type MapState = {
  keyword?: string;
  searchedPlaces?: PlaceList;
  markerPlace?: PlaceList;
  place?: Place | {};
};
type DisplayAction =
  | { type: 'handleInputFocus'; payload: boolean }
  | { type: 'handleClickShowMap'; payload: boolean }
  | { type: 'handleClickMarker'; payload: boolean };
type DisplayDispatch = (action: DisplayAction) => void;

type MapAction =
  | { type: 'handleClickPlaceList'; payload: MapState }
  | { type: 'handleClickPlaceResult'; payload: Place }
  | { type: 'handleClickInitPlace' };
type MapDispatch = (action: MapAction) => void;

const MapContext = createContext<{ mapState: MapState; mapDispatch: MapDispatch }>({
  mapState: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mapDispatch: () => {},
});
const DisplayContext = createContext<
  { displayState: DisplayState | undefined; displayDispatch: DisplayDispatch } | undefined
>(undefined);

const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const mapReducer = (state: MapState | undefined, action: MapAction) => {
    switch (action.type) {
      case 'handleClickPlaceList':
        return {
          keyword: action.payload.keyword,
          searchedPlaces: action.payload.searchedPlaces,
          markerPlace: action.payload.markerPlace,
          place: {},
        };
      case 'handleClickPlaceResult':
        return {
          ...state,
          ...{ place: action.payload },
        };
      case 'handleClickInitPlace':
        return {
          keyword: '',
          searchedPlaces: undefined,
          markerPlace: undefined,
          place: {},
        };
      default:
        throw new Error('Unsupported action type:');
    }
  };
  const [mapState, mapDispatch] = useReducer(mapReducer, {
    keyword: '',
    searchedPlaces: [],
    markerPlace: [],
    place: {},
  });
  const map = { mapState, mapDispatch };

  const displayReducer = (state: DisplayState | undefined, action: DisplayAction) => {
    if (!action.payload) return;
    switch (action.type) {
      case 'handleInputFocus':
        if (state?.searchList) return state;
        return {
          map: false,
          searchList: true,
          marker: false,
        };
      case 'handleClickShowMap':
        if (state?.map) return state;
        return {
          map: true,
          searchList: false,
          marker: false,
        };
      case 'handleClickMarker':
        if (state?.marker) return state;
        return {
          map: true,
          searchList: false,
          marker: true,
        };

      default:
        throw new Error('Unsupported action type:', action);
    }
  };
  const [displayState, displayDispatch] = useReducer(displayReducer, {
    map: true,
    searchList: false,
    marker: false,
  });
  const display = { displayState, displayDispatch };

  return (
    <MapContext.Provider value={map}>
      <DisplayContext.Provider value={display}>{children}</DisplayContext.Provider>
    </MapContext.Provider>
  );
};

const useMapContext = () => {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error('Cannot find MapContext. It should be wrapped within MapContextProvider.');
  return ctx;
};
const useDisplayContext = () => {
  const ctx = useContext(DisplayContext);
  if (!ctx) throw new Error('Cannot find MapContext. It should be wrapped within MapContextProvider.');
  return ctx;
};

export { MapContextProvider, useMapContext, useDisplayContext };
