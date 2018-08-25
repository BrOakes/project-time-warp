let ChromecastAPI = require('chromecast-api')

let browser = new ChromecastAPI.Browser()

let deviceInUse;

browser.on('deviceOn', function(device){
    if(device.config.name == 'Ashley and Brad 4evr TV'){
        deviceInUse = device;
    }
    deviceInUse.play('https://www.netflix.com/watch/70079583?trackId=15035895&tctx=2%2C1%2C304d69e9-41b8-438a-974a-84dbf5ef14f8-67111794%2Ce5c66436-36a2-4dd7-b2d3-5f708812b6c9_75134042X54XX1535237744422%2Ce5c66436-36a2-4dd7-b2d3-5f708812b6c9_ROOT');

    setTimeout(function () {
        //close the connection
        deviceInUse.close(function () {
            console.log('Closed')
        })
    }, 10000)

});