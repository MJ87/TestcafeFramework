import { Selector, t } from 'testcafe'
import { takeSnapshot } from 'testcafe-blink-diff';
import { logging} from '../Library/AppHelper';
export var TestCafeHelper = {
    OpenWindow: async function (url) {
        const window = await t.openWindow(url);
        return new Promise(resolve => {
            resolve(window)
        })

    },
    CloseWindow: async function (window) {
        await t.closeWindow(window);

    },
    GetInnerText: async function (selector) {
        const text = await selector.innerText
        return new Promise(resolve => {
            resolve(text)
        })

    },
    Dependency: async function (string) {
        const persistentid = string;
        const element = Selector(() => {
            return document.getElementById(persistentid)
        }, {
            dependencies: { persistentid }
        });
        return new Promise(resolve => {
            resolve(element)
        })
    },
    GetChild: async function (selector, index) {
        const text = await selector.child(index)
        return new Promise(resolve => {
            resolve(text)
        })
    },
    Click: async function (selector) {
        await t
            .click(selector)
        this.Wait(500)
    },
    Wait: async function (timer) {
        await t
            .wait(timer)
    },
    TypeText: async function (selector, text) {
        await t
            .typeText(selector, text)
        

    },
    MaximizeWindow: async function () {
        await t
            .maximizeWindow()
    },
    ElementCount: async function (selector) {
        const count = await selector.count
        return new Promise(resolve => {
            resolve(count)
        })
    },
    WithAttribute: async function (selector, attribute, value) {
        const element = await selector.withAttribute(attribute, value)
        return new Promise(resolve => {
            resolve(element)
        })
    },
    WithExactText: async function (selector, value) {
        const element = await selector.withExactText(value)
        return new Promise(resolve => {
            resolve(element)
        })
    },
    CheckboxState: async function (selector) {
        const state = await selector.checked
        return new Promise(resolve => {
            resolve(state)
        })
    },
    GetClassNames: async function (selector) {
        const names = await selector.classNames
        return new Promise(resolve => {
            resolve(names)
        })
    },
    GetStyle: async function (selector, prop) {
        const element = await selector.getStyleProperty(prop)
        return new Promise(resolve => {
            resolve(element)
        })
    },
    ContainsAssertion: async function (actual, expected) {
        await t.expect(actual).contains(expected);
    },
    EqualAssertion: async function (actual, expected) {
        await t.expect(actual).eql(expected);
    },
    OkAssertion: async function (selector) {
        await t
            .expect(selector).ok()
    },
    Navigate: async function (url) {
        await t.navigateTo(url)
    },
    ResizeWindow: async function (width, height) {
        await t.resizeWindow(width, height);
    },
    CurrentWindow: async function () {
        const Window = await t.getCurrentWindow();
        logging('Current Window')
        logging(Window)
        return new Promise(resolve => {
            resolve(Window)
        })

    },
    Client: async function (type) {
        const content = await t.eval(() => type);
        return new Promise(resolve => {
            resolve(content)
        })
    },
    Scroll: async function (selector, pos) {
        await t.scroll(selector, pos);


    },
    ElementVisiblity: async function (selector) {
        var display
        try {
            logging('Checking if element is Visible or Not')
            await t.expect(selector.exists).ok()
            display = true
            logging('Element is Visible: ' + display)
        } catch (err) {
            display = false
            logging('Element is not Visible: ' + display)
        }
        return new Promise(resolve => {
            resolve(display)
        })

    },
    

}