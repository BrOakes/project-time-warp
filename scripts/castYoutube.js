let youtubedl = require('youtube-dl');
let ChromecastAPI = require('chromecast-api')

let url = 'https://www.youtube.com/watch?v=_1EOGuua9h0';

let chromecastName = 'Ashley and Brad 4evr TV';

let browser = new ChromecastAPI.Browser();

let deviceInUse;

browser.on('deviceOn', function(device){
    if(device.config.name == chromecastName){
        deviceInUse = device;
    }
})

youtubedl.getInfo(url, function(err, info) {
  if (err) throw err;

    deviceInUse.play(info.url);

    setTimeout(function () {
        //close the connection
        deviceInUse.close(function () {
            console.log('Closed')
        })
    }, 10000)

});