
import GhPage from './GitHubLoginPagePOM.js'
import DqPage from './TestCafeFeaturesPOM.js'

export default class UIMAP {

    constructor() {

        this.GitHubPage = new GhPage();
        this.DemoQAPage = new DqPage();
    }
}