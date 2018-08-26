let ChromecastAPI = require('chromecast-api')

let browser = new ChromecastAPI.Browser()

let deviceInUse;

browser.on('deviceOn', function(device){
    if(device.config.name == 'Ashley and Brad 4evr TV'){
        deviceInUse = device;
    }
    deviceInUse.play('https://www.hulu.com/watch/1237330');

    setTimeout(function () {
        //close the connection
        deviceInUse.close(function () {
            console.log('Closed')
        })
    }, 10000)

});