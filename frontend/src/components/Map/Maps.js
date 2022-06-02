import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Maps = (props) => {
  const position = [47.65331, 23.57949];
  const locs = props.eventsForMap;

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {locs &&
        locs.map((el) => (
          <Marker position={el.location.coordinates} key={el._id}>
            <Popup>
              {el.name}
              <br /> {el.description}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Maps;
