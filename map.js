// Create a new Leaflet map
let foodMap;
foodMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(foodMap);

foodMap.setView([40.84155274654479, -73.939943789621], 15);

L.geoJSON(nycDomRes).addTo(foodMap)

// replace Leaflet's default blue marker with a custom icon
function createCustomIcon (_feature, latlng) {
    let domIcon = L.icon ({
        iconUrl: "flag icon.png", 
        iconSize: [25,25],
        shadowSize: [35, 20], // width, height of optional shadow image
        iconAnchor: [10, 12], // point of the icon which will correspond to marker's location
        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
        popupAnchor:  [0, 0],
    })
    return L.marker(latlng, {icon: domIcon});
    }
    
// create an options object that specifies which function will called on each feature
    let myLayerOptions = {
        pointToLayer: createCustomIcon
      }
      
// create the GeoJSON layer
      L.geoJSON(nycDomRes, myLayerOptions).addTo(foodMap)

// show properties for each restaurant
L.geoJSON(nycDomRes, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.Restaurant + "</h3> <hr> <h3>" + "Google Rating: " + feature.properties.Rating + "<p>" + "<a href=" + feature.properties.Maps + ">" + "Link to Google Maps"+ "</a>"); 
    }
}).addTo(foodMap);


/// making neighborhood buttons clickable

// making LES clickable

$("#pan-to-LES").click(function() {
    let LES = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Lower East Side";
    });
    foodMap.panTo(new L.LatLng(LEScoordinates.geometry.coordinates[1], LEScoordinates.geometry.coordinates[0]));
    console.log(LES);
});


let LEScoordinates = nycDomRes.features.find(function(feature) {
    return feature.properties.Neighborhood === "Lower East Side";
});
console.log(LEScoordinates);
console.log(LEScoordinates.geometry);

// making Hell's Kitchen clickable
$("#pan-to-Hells-Kitchen").click(function() {
    let HK = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Hell's Kitchen";
    });
    console.log(HK);
    foodMap.panTo(new L.LatLng(HKcoordinates.geometry.coordinates[1], HKcoordinates.geometry.coordinates[0]));
});

let HKcoordinates = nycDomRes.features.find(function(feature) {
    return feature.properties.Neighborhood === "Hell's Kitchen";
});
    console.log(HKcoordinates.geometry);
    
// making East Harlem clickable
$("#pan-to-East-Harlem").click(function() {
    let EH = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "East Harlem";
    });
    console.log(EH);
    
    foodMap.panTo(new L.LatLng(EHcoordinates.geometry.coordinates[1], EHcoordinates.geometry.coordinates[0]));
});
    let EHcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "East Harlem";
    });
    console.log(EHcoordinates.geometry);

   
// making Central Harlem clickable
$("#pan-to-Central-Harlem").click(function() {
    let CH = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Central Harlem";
    });
    console.log(CH);
    foodMap.panTo(new L.LatLng(CHcoordinates.geometry.coordinates[1], CHcoordinates.geometry.coordinates[0]));
});
    
    let CHcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Central Harlem";
    });
    console.log(CHcoordinates.geometry);

   // making West Harlem clickable
$("#pan-to-West-Harlem").click(function() {
    let WH = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "West Harlem";
    });
    console.log(WH);
    foodMap.panTo(new L.LatLng(WHcoordinates.geometry.coordinates[1], WHcoordinates.geometry.coordinates[0]));
});
    
    let WHcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "West Harlem";
    });
    console.log(WHcoordinates.geometry); 

     // making Upper West Side clickable
$("#pan-to-Manhattan-Valley").click(function() {
    let UW = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Manhattan Valley";
    });
    console.log(UW);
    foodMap.panTo(new L.LatLng(UWcoordinates.geometry.coordinates[1], UWcoordinates.geometry.coordinates[0]));
});
    
    let UWcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Manhattan Valley";
    });
    console.log(UWcoordinates.geometry); 


    // making Hamilton Heights clickable
$("#pan-to-Hamilton-Heights").click(function() {
    let HH = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Hamilton Heights";
    });
    console.log(HH);
    foodMap.panTo(new L.LatLng(HHcoordinates.geometry.coordinates[1], HHcoordinates.geometry.coordinates[0]));
});
    
    let HHcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Hamilton Heights";
    });
    console.log(HHcoordinates.geometry); 


    // making Washington Heights clickable
$("#pan-to-Washington-Heights").click(function() {
    let WaH = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Washington Heights";
    });
    console.log(WaH);
    foodMap.panTo(new L.LatLng(WaHcoordinates.geometry.coordinates[1], WaHcoordinates.geometry.coordinates[0]));
});
    
    let WaHcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Washington Heights";
    });
    console.log(WaHcoordinates.geometry); 

        // making Inwood clickable
$("#pan-to-Inwood").click(function() {
    let IN = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Inwood";
    });
    console.log(IN);
    foodMap.panTo(new L.LatLng(INcoordinates.geometry.coordinates[1], INcoordinates.geometry.coordinates[0]));
});
    
    let INcoordinates = nycDomRes.features.find(function(feature) {
        return feature.properties.Neighborhood === "Inwood";
    });
    console.log(INcoordinates.geometry); 
    
    // add some fill color to the map and make only $ red
L.geoJSON (nycDomRes, {
    style: function (feature) {
        if (feature.properties.Price === "$") {
            return {
                color: "red"
            };
        } else {
                return {
                    color: "blue",
                }
        }
    }
}).addTo(nycDomRes);






