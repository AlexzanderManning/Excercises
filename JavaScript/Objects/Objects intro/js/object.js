var paris = {
  population : 2.211e6,
  latitude: '48.8567 N',
  longitude: '2.3508 E',
};

for ( var key in paris){
  document.write(key, ": " , paris[key], '<br>'); // paris[key]access all the properties in paris
}
