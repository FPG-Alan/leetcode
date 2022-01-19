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
    const leftArr = mergeSort(nums, start, mid);
    const rightArr = mergeSort(nums, mid + 1, end);

    const result = [];
    let leftP = 0;
    let rightP = 0;
    for (let i = start; i <= end; i += 1) {
      if (leftArr[leftP] && rightArr[rightP]) {
        if (leftArr[leftP] <= rightArr[rightP]) {
          result.push(leftArr[leftP]);
          leftP++;
        } else {
          result.push(rightArr[rightP]);
          rightP++;
        }
      } else if (leftArr[leftP]) {
        result.push(leftArr[leftP]);
        leftP++;
      } else {
        result.push(rightArr[rightP]);
        rightP++;
      }
    }

    return result;
  }

  return [nums[start]];
}

function quickSort(nums, low, high) {
  if (low < high) {
    const position = partition2(nums, low, high);

    quickSort(nums, low, position - 1);
    quickSort(nums, position + 1, high);
  }
}

function partition(nums, low, high) {
  const base = nums[low];
  while (low < high) {
    while (low < high && nums[high] > base) {
      high--;
    }

    if (low < high) {
      nums[low] = nums[high];
    }

    while (low < high && nums[low] < base) {
      low++;
    }

    if (low < high) {
      nums[high] = nums[low];
    }
  }

  nums[low] = base;

  return low;
}

const test = [-9, 10, 2, 6, -3, 9, -2, 1];
// console.log(mergeSort(test, 0, test.length - 1));
quickSort(test, 0, test.length - 1);
console.log(test);
// const nums1 = [1, 2, 3, 0, 0, 0];
// merge(nums1, 3, [2, 5, 6], 3);
// console.log(nums1);

// const nums1 = [1];
// merge(nums1, 1, [], 0);
// console.log(nums1);

// const nums1 = [2, 0];
// merge(nums1, 1, [1], 1);
// console.log(nums1);
