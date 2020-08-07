function extendPalindrome(s: string, j: number, k: number, res: any) {
	while (0 <= j && k < s.length && s.charAt(j) == s.charAt(k)) {
		j--;
		k++;
	}
	if (res.maxLen < k - j - 1) {
		res.lo = j + 1;
		res.maxLen = k - j - 1;
	}
}

function longestPalindrome(s: string): string {
	let result: any = {lo: 0, maxLen: 0};

	if (s.length < 2) return (s);
	for (let i = 0; i < s.length - 1; i++) {
		extendPalindrome(s, i , i, result);
		extendPalindrome(s, i , i + 1, result);
	}
	return (s.substring(result.lo, result.lo + result.maxLen));
};

console.log(longestPalindrome('cbbd'))
