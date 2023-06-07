// @ts-check
"use strict";
const nomlish = require("nomlish");
const nomlish_translator_node = require("nomlish-translator-node");

const input =
  "こちらに翻訳したい文章を入力してください。\n単語では効果が分かりにくいので、ニュースサイトなどから長い文章を拾ってくると良いかもしれません。\nまた、結果は毎回ランダムで変化します。";

const test_nomlish = async () => {
  const time1 = performance.now();
  const output = await nomlish.translate(input);
  console.log(`nomlish: ${output}`);
  const time2 = performance.now();
  console.log(`nomlish: ${time2 - time1}ms`);
};

const test_nomlish_translator_node = async () => {
  const time1 = performance.now();
  const output = await nomlish_translator_node.translate(input);
  console.log(`nomlish_translator_node: ${output}`);
  const time2 = performance.now();
  console.log(`nomlish_translator_node: ${time2 - time1}ms`);
};

(async () => {
  await test_nomlish();
  console.log(`\n`);
  await test_nomlish_translator_node();
})();
