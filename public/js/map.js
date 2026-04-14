mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates,
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');
map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
map.scrollZoom.disable();


map.on('load', () => {
  const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
    .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`);

  const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);

  marker.getElement().addEventListener('mouseenter', () => {
    popup.setLngLat(listing.geometry.coordinates).addTo(map);
  });

  marker.getElement().addEventListener('mouseleave', () => {
    popup.remove();
  });

  map.flyTo({ center: listing.geometry.coordinates, zoom: 8 });
});