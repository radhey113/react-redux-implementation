import { FETCH_POST, LOC_AREA } from './Types';

/** Testing **/ 
export const fetchData = () => dispatch => {
    console.log('Fetch called: ', dispatch);
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(body=> dispatch({
            type: FETCH_POST,
            body: body
        }))
}


// /* get location with its lat long */ 
export const getLocation = address => dispatch => {
    // var options = {
    //     componentRestrictions: {
    //         country: 'all'
    //     }
    // };
    let options = {};

    var autocomplete = new window.google.maps.places.Autocomplete(address, options);
    window.google.maps.event.addListener(autocomplete, 'place_changed', function () {
        
        let place = autocomplete.getPlace();
        let data = {};
        if((place.geometry || {}).location){
            data = {
                place: place,
                lat: place.geometry.location.lat(),
                long: place.geometry.location.lng()
            }
        }else{        
            return;
        }

        dispatch({
            type: LOC_AREA,
            body: data
        })
    });
}
