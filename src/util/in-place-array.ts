function reverseArr<T>(arr: T[], left: number, right: number) {
	while (left < right) {
		var temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}
	return arr;
}

export function inPlaceRotateArray<T>(arr: T[], k: number) {
	const l = arr.length;
	if (!l) return;
	k = ((k % l) + l) % l;
	arr = reverseArr(arr, 0, l - 1);
	arr = reverseArr(arr, 0, k - 1);
	arr = reverseArr(arr, k, l - 1);
	return arr;
}
