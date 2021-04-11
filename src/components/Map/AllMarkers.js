import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Marker } from "react-map-gl";
import { MARKERS_QUERY } from "../../data/marker-queries";
import MarkerHead from "./MarkerHead";
import MarkerStandSVG from "./assets/MarkerStandSVG";

export default function AllMarkers({ props }) {
  const { layer, expandMarker, setExpandMarker } = props;
  const { data, error, loading } = useQuery(MARKERS_QUERY, {
    variables: { layer_id: layer },
  });

  const markers =
    data &&
    data.markers.map((marker, index) => (
      <Marker
        className={expandMarker === marker.marker_id ? "active" : ""}
        key={index}
        longitude={marker.location.coordinates[0]}
        latitude={marker.location.coordinates[1]}
        offsetTop={-28}
        offsetLeft={-20}
      >
        <MarkerHead props={{ marker, expandMarker, setExpandMarker }} />
        <MarkerStandSVG />
      </Marker>
    ));

  return <div>{markers}</div>;
}
