// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as f from '../code-to-unit-test/unit-test-me.js';

test('123-456-7890 valid',             () => expect(f.isPhoneNumber('123-456-7890')).toBe(true));
test('(123) 456-7890 valid',           () => expect(f.isPhoneNumber('(123) 456-7890')).toBe(true));
test('invalid no letters',             () => expect(f.isPhoneNumber('abc-def-ghij')).toBe(false));
test('invalid because too short',      () => expect(f.isPhoneNumber('123-45-678')).toBe(false));

test('a@b.com valid',                  () => expect(f.isEmail('a@b.com')).toBe(true));
test('x@y.co valid',                   () => expect(f.isEmail('x@y.co')).toBe(true));
test('missing @ invalid',              () => expect(f.isEmail('abc.com')).toBe(false));
test('missing domain invalid',         () => expect(f.isEmail('abc@')).toBe(false));

test('Abcd valid',                     () => expect(f.isStrongPassword('Abcd')).toBe(true));
test('A1234_ valid',                   () => expect(f.isStrongPassword('A1234_')).toBe(true));
test('starts with digit bad',          () => expect(f.isStrongPassword('1Bad')).toBe(false));
test('too short bad',                  () => expect(f.isStrongPassword('A1')).toBe(false));

test('1/1/2020 valid',                 () => expect(f.isDate('1/1/2020')).toBe(true));
test('12/31/1999 valid',               () => expect(f.isDate('12/31/1999')).toBe(true));
test('year 2‑digits bad',              () => expect(f.isDate('1/1/99')).toBe(false));
test('letters bad',                    () => expect(f.isDate('Jan/1/2020')).toBe(false));

test('#FFF valid',                     () => expect(f.isHexColor('#FFF')).toBe(true));
test('00ffaa valid',                   () => expect(f.isHexColor('00ffaa')).toBe(true));
test('#12345G bad',                    () => expect(f.isHexColor('#12345G')).toBe(false));
test('#1234567 bad',                   () => expect(f.isHexColor('#1234567')).toBe(false));