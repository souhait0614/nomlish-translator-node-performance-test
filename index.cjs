// @ts-check
"use strict";
const nomlish = require("nomlish");
const nomlish_translator_node = require("nomlish-translator-node");

const input = "パフォーマンステスト用のいい感じの文章です。多分";

const array = Array(5).fill(undefined);

const test_nomlish = async () => {
  const time1 = performance.now();
  for await (const i of array) {
    const output = await nomlish.translate(input);
    console.log(`nomlish: ${output}`);
  }
  const time2 = performance.now();
  console.log(`\nnomlish: ${time2 - time1}ms\n`);
};

const test_nomlish_translator_node = async () => {
  const time1 = performance.now();
  const translator = new nomlish_translator_node.Translator();
  for await (const i of array) {
    const output = await translator.translate(input);
    console.log(`nomlish_translator_node: ${output}`);
  }
  const time2 = performance.now();
  console.log(`\nnomlish_translator_node: ${time2 - time1}ms\n`);
};

(async () => {
  await test_nomlish();
  await test_nomlish_translator_node();
})()
