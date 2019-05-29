import {cssmodulejoin} from '.';

const mockCssModuleClasses = {
  classOne: '.classOne',
  classTwo: '.classTwo',
  classThree: '.classThree',
};

const mockStyles = [
  mockCssModuleClasses.classOne,
  mockCssModuleClasses.classThree,
  mockCssModuleClasses.classThree,
];

let multiClasses: string = null;

describe('Test cssmodulejoin', () => {
  multiClasses = cssmodulejoin(mockStyles);

  it('should be defined', () => {
    expect(multiClasses).toBeDefined();
  });

  it('should return type string', () => {
    expect(typeof multiClasses).toBe('string');
  });

  it('should return  same length as the array of classes when split', () => {
    expect(multiClasses.split(' ').length).toBe(mockStyles.length);
  });
});
