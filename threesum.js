/*
 * This function takes an unsorted array of numbers, sorts it and then selects the first, last and middle element. It
 * sums those elements and if the sum<0 it increases the lowerIndex, if sum>0 it decreases the highIndex. If ever
 * the lowerIndex or the higherIndex becomes equal to the middleIndex, we choose the next middleIndex as if we would if
 * we were doing a binary search, so if lowerIndex===middleIndex the next middleIndex would be 3/4*length, if it was
 * highIndex===middleIndex the next middleIndex would be 1/4*length. If we change the middleIndex, reset the lower and
 * high indexes. The algorithm terminates when we find the sum, or returns false when the middleIndex finishes its
 * binary search path and can not be changed anymore.
 *
 * This algorithm takes O(n*lg n) + O(n*lg n) = O(n*lg n) (sorting plus scanning at most n items while middleIndex goes
 * binary search) time complexity and O(1) space complexity!!
 *
 * I went to compare it the the common solutions for this problem and the most common one is the one with the hashmap
 * and the double for loop that goes like: do not sort the array, insert all elements into the hashmap and search for a
 * key equal to sum-arr[i]-arr[j], with i and j being the indexes of the for-for loop. This takes O(n) inserting into
 * the hashmap + O(n^2) scanning) so it takes O(n^2) time complexity and O(n) space complexity.
 *
 * You can run this on node-js.
 */
function threesum(unsorted) {
	let sum;

	if (unsorted.length < 3) {
		return false;
	}

	let arr = unsorted.sort(function (a,b) {
		return a - b;
	});

	let lowerIndex = 0;
	let higherIndex = arr.length-1;
	let middleIndex = Math.floor(arr.length/2);

	let binarySearchLevel = 1;
	const maxBinaryLevel = Math.floor(Math.log2(arr.length)) + 1;

	while ((sum = arr[lowerIndex] + arr[higherIndex] + arr[middleIndex]) !== 0) {
		if (sum < 0) {
			lowerIndex++;
		} else {
			higherIndex--;
		}

		if (lowerIndex >= middleIndex || higherIndex <= middleIndex) {
			// go binary search with middleIndex
			binarySearchLevel++;

			if (binarySearchLevel > maxBinaryLevel) {
				return false;
			}

			let middleDelta = Math.floor(arr.length / Math.pow(2, binarySearchLevel));
			if (middleDelta < 1) {
				middleDelta = 1;
			}
			middleIndex += sum > 0 ? middleDelta : -middleDelta;

			lowerIndex = 0;
			higherIndex = arr.length-1;
		}
	}
	
	return [arr[lowerIndex], arr[higherIndex], arr[middleIndex]];
}
