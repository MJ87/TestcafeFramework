const fs = require('fs');
const chalk = require('chalk');
const os = require("os");
var minimist = require('minimist')
const log = console.log;
const testnamemap = new Map();
const errormsgmap = new Map();
let assertcount = 0;

function readfile(path) {
    logging('File to read: ' + path)
    return JSON.parse(fs.readFileSync(path).toString())
}

function writefile(path, content) {
    logging('File to write: ' + path)
    fs.writeFileSync(path, content)
    logging('File has been written Successfully')
}

function logging(string) {
    try {
        if (string.includes(':') && string.indexOf(' ') >= 0) {
            log(chalk.cyan(string.split(":")[0].trim().concat(' -->').concat(chalk.italic.magenta(string.split(":")[1].trim()))))
        }
        else if (string.indexOf(' ') >= 0) {
            log(chalk.green(string));
        }
        else {
            log(chalk.greenBright(string));
        }
    } catch (err) {
        log(chalk.bold.italic.white(JSON.stringify(string)));
    }


}
function GetCommandargs(arg) {
    if (arg == 'minimist') {
        return minimist(process.argv.slice(2))
    }
    else {
        return process.argv.slice(2)
    }

}

function SettingBrowser(args, command) {
    var browserslice
    if (os.type().includes('Linux')) {
        logging('Request initiated from Linux Machine');
        if (command == undefined) {
            browserslice = args + ':headless'
        }
        else {
            browserslice = command.slice(0, 12) + ' ' + args + ':headless'

        }
    }
    else {
        if (String(args).includes('browserstack')) {
            console.log('Setting BrowserStack')
            if (command == undefined) {
                browserslice = args.split('/')[0] + ':' + args.split('/')[1] + ':'
            }
            else {
                browserslice = command.slice(0, 12) + ' ' + args.split('/')[0] + ':' + args.split('/')[1] + ':'
            }

            console.log(browserslice)
            for (let i = 2; i < args.split('/').length; i++) {
                if (i == args.split('/').length - 1) {
                    browserslice = browserslice + args.split('/')[i]
                }
                else {
                    browserslice = browserslice + args.split('/')[i] + ' '
                }
                console.log(browserslice)
            }
        }
        else {
            logging('Setting the Browser for Local')
            if (command != undefined) {
                browserslice = command.slice(0, 12) + ' ' + args
            }
            else {
                browserslice = args
            }

        }

    }
    logging('Browser value before returning')
    console.log(browserslice.trim())
    return browserslice
}

function TestErrorChecking(obj) {
    logging('Inside TestErrorChecking Function')
    try {
        var msg = JSON.parse(JSON.stringify(obj.testRun.errs))[0].errMsg
    } catch (err) {
        logging('Error: ' + err);
        msg = err
    }
    logging('Error Message coming from Current Test',msg)
}

module.exports = { readfile, writefile, logging, GetCommandargs, SettingBrowser, TestErrorChecking, errormsgmap, testnamemap };