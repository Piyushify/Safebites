console.log('JS Connected!');

const header = document.querySelector("header");
const menubtn = document.querySelector(".menubtn");
const scrollpad = document.querySelector(".scrollpad");
const seeker = document.querySelector(".seeker");

let timer;


function resizer() {
  header
}



seeker.addEventListener("click", () => {
  
  menubtn.style.display = "grid";
  seeker.style.display = "none";
  
  startTimer();
});

menubtn.addEventListener("click", () => {
  
  menubtn.style.display = "none";
  scrollpad.style.display = "flex";
  
  startTimer();
});

scrollpad.addEventListener("click", () => {
  
  startTimer();
  
});

function startTimer() {
  
  clearTimeout(timer);
  
  timer = setTimeout(() => {
    
    menubtn.style.display = "grid";
    scrollpad.style.display = "none";
    timer = setTimeout(() => {
    
    menubtn.style.display = "none";
    seeker.style.display = "block";
    },2000);
    },2000);
}


navigator.geolocation.getCurrentPosition(
  (position) => {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    initMap(userLat, userLng);
  },
  () => {
    initMap(26.14, 89.97); // fallback location
  }
);

function initMap(lat, lng) {
  const map = L.map('map').setView([lat, lng], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // User marker
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("You are here")
    .openPopup();

  // 2km radius
  L.circle([lat, lng], {
    radius: 2000,
    color: 'blue',
    fillOpacity: 0.1
  }).addTo(map);

  loadMarkers(map, lat, lng);
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const places = [
  { name: "Tasty Bites", lat: 26.14, lng: 89.97, type: "food", rating: 4.5 },
  { name: "Local Cafe", lat: 26.15, lng: 89.98, type: "cafe", rating: 2.1 },
  { name: "Street Dhaba", lat: 26.145, lng: 89.975, type: "food", rating: 3.8 }
];

function loadMarkers(map, userLat, userLng) {
  places.forEach(place => {
    const distance = getDistance(
      userLat,
      userLng,
      place.lat,
      place.lng
    );

    if (distance <= 2) {

      // Color based on hygiene
      let color = place.rating >= 4 ? "green" :
                  place.rating >= 3 ? "orange" : "red";

      L.circleMarker([place.lat, place.lng], {
        radius: 8,
        color: color,
        fillOpacity: 0.8
      })
        .addTo(map)
        .bindPopup(`
          <b>${place.name}</b><br>
          ⭐ ${place.rating} Hygiene Score<br>
          ${color === "green" ? "🟢 Safe" : color === "orange" ? "🟡 Average" : "🔴 Risky"}
        `);
    }
  });
}