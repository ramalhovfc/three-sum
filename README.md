Solution for finding 3 numbers that sum to a total.

This function takes an unsorted array of numbers, sorts it and then selects the first, last and middle element. It
sums those elements and if the sum<0 it increases the lowerIndex, if sum>0 it decreases the highIndex. If ever
the lowerIndex or the higherIndex becomes equal to the middleIndex, we choose the next middleIndex as if we would if
we were doing a binary search, so if lowerIndex===middleIndex the next middleIndex would be 3/4*length, if it was
highIndex===middleIndex the next middleIndex would be 1/4*length. If we change the middleIndex, reset the lower and
high indexes. The algorithm terminates when we find the sum, or returns false when the middleIndex finishes its
binary search path and can not be changed anymore.

This algorithm takes O(n*lg n) + O(n*lg n) = O(n*lg n) (sorting plus scanning at most n items while middleIndex goes
binary search) time complexity and O(1) space complexity!!

I went to compare it the the common solutions for this problem and the most common one is the one with the hashmap
and the double for loop that goes like: do not sort the array, insert all elements into the hashmap and search for a
key equal to sum-arr[i]-arr[j], with i and j being the indexes of the for-for loop. This takes O(n) inserting into
the hashmap + O(n^2) scanning) so it takes O(n^2) time complexity and O(n) space complexity.
You can run this on node-js.