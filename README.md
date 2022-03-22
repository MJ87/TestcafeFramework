# TestcafeFramework
This is the sample NodeJS TestCafe Framework using JS for showcase and there are lot of stuff we can do with testcafe as follows:
--Integration with Docker
--Running Tests in Parallel using testcafe concurrency feature and npm concurrently feature too.
--Integration of Tests with BrowserStack OR SauceLabs.
--Running tests on azure pipleines.

To set this project Please follow below instructions:
1. Must have nodeJS, VS Code, and Git installed in machine.
2. Open terminal in VSCode and run command git clone https://github.com/manwantjotgill/TestcafeFramework.git
3. Run npm install commands to have the node_modules folder in project and download all dependencies from package.json
4. Run below commands to Tests:
**********We can run below commands with desired filename,Browser and other params******************** 
npm run test --filename=Modules/GitHubTests.js
npm run test --filename=Modules/TestCafeFeatures.js
npm run test --filename=Modules/*.js
npm run test --browsers=edge --filename=Modules/GitHubTests.js

**********These commands are filtering the tests OR fixtures for which we want to run Tests******************** 
npm run filter --filename=Modules/*.js --test=Testing.* --type=-T
npm run filter --filename=Modules/*.js --test=Fixture.XpathUsage --type=-f

**********These commands are filtering the tests OR fixtures METAs for which we want to run Tests******************** 
npm run filtermeta --browsers=edge --filename=Modules/*.js  --key=Test --value=Smoke --type=--fixture-meta
npm run filtermeta --browsers=edge --filename=Modules/*.js  --key=Env --value=QA --type=--test-meta

**********These commands run the tests via TestCafe Runner Class with testmeta and fixture meta filters********************
npm run runner filename=Modules/*.js env=Staging testmeta=Env,Production
npm run runner filename=Modules/*.js env=Staging testmeta=Env,QA

