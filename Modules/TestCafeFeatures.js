import { TestCafeHelper } from '../Library/TestCafeHelper';
import ObjectRepo from '../PageObjectRepository/UIMAP'
const helper = require('../Library/MiscHelper')
const config = require('../Config/config');
var repo = new ObjectRepo();
var element
var elementcount
fixture('TestCafe Features')
    .page(config.config.URLs.DemoQAURL)

test
    ('Using Selector Directly for innerText Method', async t => {
        await TestCafeHelper.MaximizeWindow()
        await TestCafeHelper.Click(repo.DemoQAPage.WebTable1)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Header).then((output) => {
        helper.logging('Get Title using selector function:' + output)
        })

    });

test
    ('Using Options.dependencies function', async t => {
        await TestCafeHelper.Dependency(repo.DemoQAPage.WebTable2).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Header).then((output) => {
        helper.logging('Get Title using dependency function:' + output)
        })

    });

test
    ('Using Child element', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 3).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Header).then((output) => {
        helper.logging('Get Title using child function :' + output)
        })

    });

test
    ('Using Count and Child Selector', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 1).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)

        await TestCafeHelper.Click(repo.DemoQAPage.arrow)
        await TestCafeHelper.ElementCount(repo.DemoQAPage.checkbox).then((count) => {
            elementcount = count;
        })
        helper.logging('Checkbox Count :' + elementcount)
        for (let i = 1; i < elementcount; i++) {
            await TestCafeHelper.Click(repo.DemoQAPage.checkbox.nth(i))
        }
        await TestCafeHelper.Wait(1000)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Result).then((output) => {
        helper.logging('Result:' + output)
        })

    });

test
    ('Using WithAttribute Method', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 3).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.WithAttribute(repo.DemoQAPage.Button, 'id', 'addNewRecordButton').then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Form).then((output) => {
        helper.logging('Form Text:' + output)
        })
    });

test
    ('Using WithExactText Method', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 3).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.WithExactText(repo.DemoQAPage.Button, 'Add').then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetInnerText(repo.DemoQAPage.Form).then((output) => {
        helper.logging('Form Text:' + output)
        })
    });


test
    ('Checked State Status', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 1).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.CheckboxState(repo.DemoQAPage.CheckboxState).then((output) => {
            helper.logging('Checkbox State before check:' + output)
        })
        await TestCafeHelper.Click(repo.DemoQAPage.checkbox)
        await TestCafeHelper.CheckboxState(repo.DemoQAPage.CheckboxState).then((output) => {
        helper.logging('Checkbox State after check:' + output)
        })
    });

test
    ('Get Classes Array', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 1).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetClassNames(repo.DemoQAPage.CheckboxClasses).then((output) => {
        helper.logging('Array of Classes: ' + output)
        })

    });

test
    ('Get Style', async t => {
        await TestCafeHelper.GetChild(repo.DemoQAPage.child, 1).then((output) => {
            element = output
        })
        await TestCafeHelper.Click(element)
        await TestCafeHelper.GetStyle(repo.DemoQAPage.Style, 'color').then((output) => {
        helper.logging('Style: ' + output)
        })

    });