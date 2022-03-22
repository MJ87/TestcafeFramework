import { Selector } from 'testcafe';

export default class TestCafeFeaturePage {

    constructor() {

        this.Header = Selector('.main-header')
        this.WebTable1 = Selector("#item-3")
        this.WebTable2 = 'item-3'
        this.child = Selector('ul')
        this.arrow = Selector('#tree-node > ol > li > span > button')
        this.checkbox = Selector('.rct-checkbox')
        this.Result = Selector('#result')
        this.Button=Selector('button')
        this.Form=Selector('#registration-form-modal')
        this.CheckboxState=Selector('#tree-node-home')
        this.CheckboxClasses=Selector('.rct-collapse')
        this.Style=Selector('.rct-icon-parent-close')

    }


}