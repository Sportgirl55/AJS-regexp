import Validator from '../regexp';

test('create', () => {
  const something = new Validator('some-123_thing');
  expect(something.validateUsername()).toBeTruthy();
});

test('no rus', () => {
  const rus = new Validator('аролджж');
  expect(rus.validateUsername()).toBeFalsy();
});

test('no first digit', () => {
  const love = new Validator('1love');
  expect(love.validateUsername()).toBeFalsy();
});

test('no last digit', () => {
  const love = new Validator('love2');
  expect(love.validateUsername()).toBeFalsy();
});

test('no last sign', () => {
  const love = new Validator('love_');
  expect(love.validateUsername()).toBeFalsy();
});

test('no first sign', () => {
  const love = new Validator('-love');
  expect(love.validateUsername()).toBeFalsy();
});

test('three digits', () => {
  const love = new Validator('lo2568ve');
  expect(love.validateUsername()).toBeFalsy();
});

test('anything wrong', () => {
  const love = new Validator('3hgjkлыды4563-');
  expect(love.validateUsername()).toBeFalsy();
});

test('right', () => {
  const some = new Validator('no-13th852i_n2g');
  expect(some.validateUsername()).toBeTruthy();
});
