import { server } from "./server/server";

server.listen(process.env.PORT || 3000, () => {
  console.log(`rodando na porta: ${process.env.PORT || 3000}`);
});

const nums = [3, 15, 2, 7];
const target = 9;
const result: number[] = [];
// eslint-disable-next-line prefer-const
let twoSum = function (nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 1; i < nums.length; x++) {
      if (nums[i] + nums[x] == target) {
        return [i, x];
      }
    }
  }
  return [];
};
// result = twoSum(nums, target);
console.log("resultado: ", twoSum(nums, target));
