import { Selector } from 'testcafe';
import XPathSelector from '../Library/XpathSelector';
export default class GithubLoginPage {

    constructor() {

        this.SignIn = Selector('a').withText('Sign in')
        this.UserName = Selector('#login_field')
        this.Password = Selector('#password')
        this.SubmitButton = Selector('input[name=commit]')
        this.Label = Selector('nav div a')
        this.Profile = Selector('header summary img')
        this.Logout = Selector('form[class=logout-form]')
        this.Error = Selector('.flash div')
        this.Name = XPathSelector("//*[@id='developer-name']")
    }


}