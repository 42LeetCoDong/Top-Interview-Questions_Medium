function increasingTriplet(nums: number[]): boolean {
	let small: number = Number.MAX_VALUE;
	let mid: number = Number.MAX_VALUE;

	for (let num of nums) {
		if (num <= small) small = num;
		else if (num <= mid) mid = num;
		else return (true)
	}
	return (false);
};
