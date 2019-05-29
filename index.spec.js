"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var mockCssModuleClasses = {
    classOne: '.classOne',
    classTwo: '.classTwo',
    classThree: '.classThree',
};
var mockStyles = [
    mockCssModuleClasses.classOne,
    mockCssModuleClasses.classThree,
    mockCssModuleClasses.classThree,
];
var multiClasses = null;
describe('Test cssmodulejoin', function () {
    multiClasses = _1.cssmodulejoin(mockStyles);
    it('should be defined', function () {
        expect(multiClasses).toBeDefined();
    });
    it('should return type string', function () {
        expect(typeof multiClasses).toBe('string');
    });
    it('should return  same length as the array of classes when split', function () {
        expect(multiClasses.split(' ').length).toBe(mockStyles.length);
    });
});
