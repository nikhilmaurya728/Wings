self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-location') {
      event.waitUntil(updateLocation());
  }
});

function updateLocation() {
  return new Promise((resolve, reject) => {
      self.clients.matchAll().then(clients => {
          if (clients.length === 0) {
              // ✅ Background में लोकेशन अपडेट करो
              fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=तुम्हारी_API_KEY', {
                  method: 'POST'
              }).then(response => response.json())
                .then(data => {
                    const lat = data.location.lat;
                    const lon = data.location.lng;

                    return fetch('https://milk-man-24d97-default-rtdb.europe-west1.firebasedatabase.app/location.json', {
                        method: 'PUT',
                        body: JSON.stringify({ lat, lon, timestamp: new Date().toISOString() }),
                        headers: { 'Content-Type': 'application/json' }
                    });
                }).then(resolve).catch(reject);
          } else {
              resolve();
          }
      });
  });
}
