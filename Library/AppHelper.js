import { t } from 'testcafe'
import ObjectRepo from '../PageObjectRepository/UIMAP'
import xlsx from 'node-xlsx';
import { TestCafeHelper } from './TestCafeHelper';
var repo = new ObjectRepo();
var counter = 0;
var Message;
export const selector = repo.GitHubPage.Label
export const error = repo.GitHubPage.Error
const helper = require('../Library/MiscHelper')
export var AppHelper = {

    Login: async function (username, password) {
        await TestCafeHelper.Click(repo.GitHubPage.SignIn)
        await TestCafeHelper.OkAssertion(repo.GitHubPage.SubmitButton.exists)
        await TestCafeHelper.TypeText(repo.GitHubPage.UserName, username)
        await TestCafeHelper.TypeText(repo.GitHubPage.Password, password)
        await TestCafeHelper.Click(repo.GitHubPage.SubmitButton)
    },

    Logout: async function () {
        await TestCafeHelper.Click(repo.GitHubPage.Profile)
        await TestCafeHelper.Click(repo.GitHubPage.Logout)
        await TestCafeHelper.OkAssertion(repo.GitHubPage.SignIn.exists)

    },
    Domstate: async function () {
        helper.logging('Inside DOM')
        while (counter != 1000) {
            const domstate = await t.eval(() => document.readyState);
            helper.logging('DOM State: ' + domstate)
            if (domstate == 'complete') {
                helper.logging('Got the expected DOM State')
                break;
            }
            else {
                helper.logging('Keep Checking DOM State')
                counter++
                helper.logging('Value in counter after increment: ' + counter)
                if (counter == 1000) {
                    await TestCafeHelper.ContainsAssertion(document.readyState, 'complete')
                }
            }
        }

    },
    Validatewindow: async function (url) {
        logging('URL coming: ' + url);
        const domurl = await t.eval(() => document.documentURI)
        logging('Window URL at run time: ' + domurl);
        await TestCafeHelper.EqualAssertion(url, domurl)
        await TestCafeHelper.CurrentWindow().then((output) => {
            Message = output
        })
        return new Promise(resolve => {
            resolve(Message)
        })

    },
}

export function setcreds(t, url, user, pass) {
    t.ctx.URL = url;
    t.ctx.UserName = user;
    t.ctx.Password = pass;
    const values = [t.ctx.URL, t.ctx.UserName, t.ctx.Password];
    return values

}

