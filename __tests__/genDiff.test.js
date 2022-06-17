import { test, expect } from '@jest/globals';
import  { readFile, getFormat } from '../src/readFile.js';
import genDiff from '../src/index.js';

const expectedStylishOutput = readFile('stylishOutput.txt');
const expectedPlainOutput = readFile('plainOutput.txt');
const expectedJsonOutput = readFile('jsonOutput.txt');

test('gediff stylish test .JSON', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedStylishOutput);
});

test('gendiff plain test .JSON', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedPlainOutput);
});

test('gendiff stylish test .yml', () => {
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(expectedStylishOutput);
});

test('gendiff plain test .yml', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'plain')).toEqual(expectedPlainOutput);
});

test('gendiff .json test to JSON', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(expectedJsonOutput);
});

test('gendiff .yml and yaml test to JSON', () => {
  expect(genDiff('file1.yml', 'file2.yaml', 'json')).toEqual(expectedJsonOutput);
});
