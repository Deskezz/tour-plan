var myMap, myPlacemark;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center:[7.83819681, 98.29881226], // Hillton Phuket
        zoom:19
    });

myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {
                hintContent: 'Hillton Hotel Phuket',
                balloonContent: 'best hotel'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }