const config = {

    "URLs": {
        "GitHubURL": 'https://github.com/',
        "DemoQAURL": 'https://demoqa.com/text-box',
        "DevExpressURL": 'https://devexpress.github.io/testcafe/example/'

    },
    "StagingEnv": {
        "UserName": 'test@xyz.com:test',
        "Password": 'xyz123',
        "Env": "Staging",
    },
    "QAEnv": {
        "UserName": 'abc@test.com:test',
        "Password": 'xyz123',
        "Env": "QA"
    },
    "Filepaths": {
        "Writefile": "./Library/SampleWriteFile.json",
        "TestcafeRC": "./.testcaferc.json",
        "CucumberJSON": "./cucumber-json-reports/",
        "Screenshots": "./Artifacts/screenshots"
    },
    "DefaultBrowser": {
        "browser": "chrome"

    },
    "tcOptions": {
        "debugMode": false,
        "skipJsErrors": true,
        "quarantineMode": {
            "successThreshold": 1,
            "attemptLimit": 3
        },
        "assertionTimeOut": 3000,
        "pageLoadTimeOut": 10000,
        "speed": 1,
        "browserInitTimeout": 1800000,
        "color": true,
        "skipUncaughtErrors": true
    }


};
module.exports = { config };