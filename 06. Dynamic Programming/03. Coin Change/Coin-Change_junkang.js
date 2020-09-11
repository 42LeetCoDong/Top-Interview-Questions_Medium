/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// This code doesn't run :(  Just commit for backup.


let ft_recur = function(coins, i, amount, ret) {
    let             tmp;
    
    while (i >= 0) {
        if (coins[i] > amount) {
            i--
            continue ;
        }
        else if (coins[i] === amount) return (ret + 1);
        if ((tmp = ft_recur(coins, i, amount - coins[i], ret + 1)) !== -1) {
            console.log("i : " + i + "\namount : " + amount + "\nret : " + ret + "\n\n");
            return tmp;
        }
        i--;
    }
    return -1;
}

var coinChange = function(coins, amount) {
    if (coins === null) return -1;
    else if (amount === 0) return 0;
    
    coins.sort((a, b) => (a - b));
    console.log(coins + "\n\n");
    return ft_recur(coins, coins.length - 1, amount, 0);
};
