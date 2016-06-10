var os = require('os');
var webdriver = require('selenium-webdriver');
var path = require('path');

function getLocalBrowser() {
    var chrome = require('selenium-webdriver/chrome'),
    	exeName = {
    		"Linux": "bin/linux/chromedriver",
    		"Darwin": "bin/mac/chromedriver",
    		"Windows_NT": "bin/windows/chromedriver.exe"
    	},
        exeLocation = path.resolve(__dirname, path.relative(__dirname, exeName[os.type()])),
        service = new chrome.ServiceBuilder(exeLocation).build(),
        driver = new chrome.Driver(webdriver.Capabilities.chrome(), service),
        driverWindow = driver.manage().window();

    driverWindow.maximize();

    return driver;
}

module.exports = {
    getLocalBrowser: getLocalBrowser
}
