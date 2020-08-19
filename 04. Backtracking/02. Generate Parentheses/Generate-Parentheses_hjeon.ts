function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    function recursive(left, right, str) {
      if (right < left) return;
      if (left === 0 && right === 0) {
        res.push(str);
        return;
      }
      if (0 < left) recursive(left - 1, right, str + '(');
      if (0 < right) recursive(left, right - 1, str + ')');
    }
    recursive(n, n, '');
    return res;
};
