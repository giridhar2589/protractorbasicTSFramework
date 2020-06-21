"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const FirstTestcase_1 = require("./pageobjects/FirstTestcase");
const AngularPage_1 = require("./pageobjects/AngularPage");
let FirstTestCaseObj = new FirstTestcase_1.FirstTestcase;
let AngularPageObj = new AngularPage_1.AngularPage;
describe('First Test case', function () {
    it('should add one and two', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield FirstTestCaseObj.firsteditbox.sendKeys(1);
        yield FirstTestCaseObj.secondEditBox.sendKeys(2);
        yield FirstTestCaseObj.button.click();
        yield expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).
            toEqual('3').then(function () {
            console.log("Finished");
        });
    }));
    it('Second test case', () => __awaiter(this, void 0, void 0, function* () {
        yield FirstTestCaseObj.firsteditbox.sendKeys(6);
        yield FirstTestCaseObj.secondEditBox.sendKeys(10);
        yield FirstTestCaseObj.button.click();
        yield expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).
            toEqual('16').then(function () {
            console.log("Finished");
        });
    }));
    it('Angular  test case', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angularjs.org/');
        yield AngularPageObj.AngularIcon.click();
        yield AngularPageObj.Textbox.sendKeys("Giridhar.kc");
        console.log("Done with the Angular test case execution");
    }));
});
