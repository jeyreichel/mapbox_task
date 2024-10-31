"use client";

import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { MarkerData, ListProps } from "./types";
import LayerButton from "./MapContainer/LayerButton";
import InterestButton from "./MapContainer/InterestButton";
import DrawButton from "./MapContainer/DrawButton";
import Button from "./MapContainer/Button";
import ZoomButtons from "./MapContainer/ZoomButtons";

export const MapContainer: React.FC<ListProps> = ({ list }) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<MarkerData | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [isDraw, setIsDraw] = useState(false);
  const [zoom, setZoom] = useState<number>(12);

  const handleDrawChange = () => {
    setIsDraw((prev) => !prev);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 1, 22));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (list && Array.isArray(list)) {
      const temp = list.map((item) => ({
        longitude: item[0][0],
        latitude: item[0][1],
        image: item[1][0]?.cdnUrl,
        cost: item[4],
        addr: item[10],
        size: item[7],
        bedCount: item[8],
        bathCount: item[9],
      }));
      setMarkers(temp);
    }
  }, [list]);

  useEffect(() => {
    if (mapRef.current && markers.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      markers.forEach((marker) =>
        bounds.extend([marker.longitude, marker.latitude])
      );

      mapRef.current.fitBounds(bounds, {
        padding: 50,
      });
    }
  }, [markers]);

  return (
    <div className="relative w-full h-[calc(100vh-150px)]">
      <div className="flex flex-col space-y-5 w-fit absolute top-5 left-5">
        <InterestButton />
        <LayerButton />
        <DrawButton isDraw={isDraw} handleDrawChange={handleDrawChange} />
      </div>
      <div className="absolute left-5 bottom-10 flex items-center space-x-5">
        <Button text="Streetview" icon="/icon/street.svg" />
        <Button text="Route planner" icon="/icon/route.svg" />
      </div>
      <div className="absolute right-5 bottom-10 z-10">
        <ZoomButtons zoomIn={zoomIn} zoomOut={zoomOut} />
      </div>

      <ReactMapGL
        ref={(instance) => {
          if (instance) mapRef.current = instance.getMap();
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        dragPan={true}
        scrollZoom={true}
        zoom={zoom}
        onZoom={(evt) => setZoom(evt.viewState.zoom)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        style={{ width: "100%", height: "100%" }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            <div
              onMouseEnter={() => setHoveredMarker(marker)}
              onMouseLeave={() => setHoveredMarker(null)}
              className="cursor-pointer bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md font-bold text-xl text-white relative"
            >
              <span className="text-black text-sm">{index + 1}</span>
              <span className="absolute -bottom-3 left-[14px]">|</span>
            </div>
          </Marker>
        ))}
        {hoveredMarker && (
          <Popup
            latitude={hoveredMarker.latitude}
            longitude={hoveredMarker.longitude}
            closeButton={false}
            closeOnClick={false}
            closeOnMove={false}
            offset={[0, -23]}
          >
            <div
              onMouseEnter={() => setHoveredMarker(hoveredMarker)}
              onMouseLeave={() => setHoveredMarker(null)}
              className="h-[130px] w-[180px] overflow-hidden object-cover"
            >
              <img
                src={`${hoveredMarker.image}`}
                className="w-auto h-auto"
                alt=""
              />
            </div>
            <p className="text-sm my-2 font-semibold">{hoveredMarker.cost} €</p>
            <p className="text-xs opacity-60">{hoveredMarker.addr}</p>
            <div className="flex items-center justify-between space-x-3 mt-2">
              <div className="flex items-center space-x-1">
                <img src="/icon/cube.svg" alt="" />
                <span className="text-xs">{hoveredMarker.size}m&sup2;</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/icon/bed.svg" alt="" />
                <span className="text-xs">{hoveredMarker.bedCount} bed</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src="/icon/bath.svg" alt="" />
                <span className="text-xs">{hoveredMarker.bathCount} bath</span>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};
