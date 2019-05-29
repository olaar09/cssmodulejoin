"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var mock = {
    classOne: '.classOne',
    classTwo: '.classTwo',
    classThree: '.classThree',
};
var multiClasses = null;
describe('Test cssmodulejoin', function () {
    multiClasses = _1.cssmodulejoin(mock.classOne, mock.classTwo, mock.classThree);
    it('should be defined', function () {
        expect(multiClasses).toBeDefined();
    });
    it('should return type string', function () {
        expect(typeof multiClasses).toBe('string');
    });
    it('should return  same length as the array of classes when split', function () {
        expect(multiClasses.split(' ').length).toBe(Object.keys(mock).length);
    });
});
