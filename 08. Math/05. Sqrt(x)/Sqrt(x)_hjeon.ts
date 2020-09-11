// function mySqrt(x: number): number {
//     let result: number = 1;
    
//     while (true) {
//         let pow: number = result ** 2;
        
//         if (pow === x) return (result);
//         else if (x < pow) return (result - 1);
//         result++;
//     }
// };

function mySqrt(x: number): number {
    return (Math.floor(x ** 0.5));
}
