var localizaciones = [
    {
      title:'Casa cental',
      content:'<h2>Casa Central</h2>',
      position:{
        lat: -31.4662446,
        lng: -64.3983766
      }
    },
    {
      title: 'Tienda Córdoba 1',
      content: '<p>Tienda Córdoba 1</p>',
      position: {
        lat: -31.3366099,
        lng: -64.2867402
      }
    },
    {
      title: 'Tienda Córdoba 2',
      content: '<p>Tienda Córdoba 2</p>',
      position: {
        lat: -31.3412589,
        lng: -64.296862
      }
    },
    {
      title: 'Tienda Córdoba 3',
      content: '<p>Tienda Córdoba 3</p>',
      position: {
        lat: -31.3583939,
        lng: -64.3433966
      }
    }
  ]

// Initialize and add the map
function inicializarMapa() {
    // The location of Córdoba
    var casaCentral = { lat: -31.4662446, lng: -64.3983766 } //casa central en Córdoba
    // The map, centered at localizacion
    var map =new google.maps.Map(document.getElementById('maps'),{zoom: 4, center: casaCentral});

    localizaciones.forEach(localizacion => {
        //cargo los marcadores
        var marker = new google.maps.Marker({
          position: localizacion.position, 
          map: map
        });       
        //cuando hace click se abre la ventanita infowindows con el nombre      
        var infowindow = new google.maps.InfoWindow({
          content: localizacion.content
        });
  
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }); 
  
}