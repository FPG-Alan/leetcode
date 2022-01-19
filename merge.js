/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }

  if (n === 0) {
    return;
  }
  const result = [];
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i += 1) {
    if (p1 >= m && p2 < n) {
      result.push(nums2[p2]);
      p2++;
    } else if (p2 >= n && p1 < m) {
      result.push(nums1[p1]);
      p1++;
    } else if (p1 < m && p2 < n) {
      if (nums1[p1] <= nums2[p2]) {
        result.push(nums1[p1]);
        p1++;
      } else {
        result.push(nums2[p2]);
        p2++;
      }
    }
  }

  for (let i = 0, l = result.length; i < l; i += 1) {
    nums1[i] = result[i];
  }
};

function mergeSort(nums, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);

    mergeHelper(nums, start, mid, end);
  }
}

function mergeHelper(nums, start, mid, end) {}

console.log(mergeSort([-9, 10, 2, 6, -3, 9, -2, 1]));
// const nums1 = [1, 2, 3, 0, 0, 0];
// merge(nums1, 3, [2, 5, 6], 3);
// console.log(nums1);

// const nums1 = [1];
// merge(nums1, 1, [], 0);
// console.log(nums1);

const nums1 = [2, 0];
merge(nums1, 1, [1], 1);
console.log(nums1);
