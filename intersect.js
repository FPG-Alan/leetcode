function intersect(nums1, nums2) {
  const intersect = [];
  for (let i = 0, l = nums1.length; i < l; i += 1) {
    let index = nums2.indexOf(nums1[i]);
    if (index !== -1) {
      intersect.push(nums2[index]);
      nums2.splice(index, 1);
    }
  }

  return intersect;
}

console.log(intersect([4, 4, 4, 9, 5], [9, 4, 9, 8, 4]));
