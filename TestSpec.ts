import { browser, element, by } from "protractor";
import { FirstTestcase } from "./pageobjects/FirstTestcase";
import { AngularPage } from "./pageobjects/AngularPage";

let FirstTestCaseObj = new FirstTestcase;
let AngularPageObj = new AngularPage;


describe('First Test case', function () {
    it('should add one and two', async () => {

        await browser.get('http://juliemr.github.io/protractor-demo/');
        await FirstTestCaseObj.firsteditbox.sendKeys(1);
        await FirstTestCaseObj.secondEditBox.sendKeys(2);

        await FirstTestCaseObj.button.click();

        await expect(element(by.binding('latest')).getText()).
            toEqual('3').then(function () {
                console.log("Finished");
            })
    });


    it('Second test case', async () => {

        await FirstTestCaseObj.firsteditbox.sendKeys(6);
        await FirstTestCaseObj.secondEditBox.sendKeys(10);

        await FirstTestCaseObj.button.click();

        await expect(element(by.binding('latest')).getText()).
            toEqual('16').then(function () {
                console.log("Finished");
            })
    });

    it('Angular  test case', async () => {

        await browser.get('https://angularjs.org/');
        await AngularPageObj.AngularIcon.click();
        await AngularPageObj.Textbox.sendKeys("Giridhar.kc");

        console.log("Done with the Angular test case execution");
    })

});
