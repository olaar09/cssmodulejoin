import {cssmodulejoin} from '.';

const mock = {
  classOne: '.classOne',
  classTwo: '.classTwo',
  classThree: '.classThree',
};

let multiClasses: string = null;

describe('Test cssmodulejoin', () => {
  multiClasses = cssmodulejoin(mock.classOne, mock.classTwo, mock.classThree);

  it('should be defined', () => {
    expect(multiClasses).toBeDefined();
  });

  it('should return type string', () => {
    expect(typeof multiClasses).toBe('string');
  });

  it('should return  same length as the array of classes when split', () => {
    expect(multiClasses.split(' ').length).toBe(Object.keys(mock).length);
  });
});
