class RandomizedSet {
  obj: any;
  constructor() {
    this.obj = {};
  }

  insert(val: number): boolean {
    if (!this.obj[val]) {
      this.obj[val] = val;
      return true;
    }
    return false;
  }

  remove(val: number): boolean {
    if (this.obj[val]) {
      delete this.obj[val];
      return true;
    }
    return false;
  }

  getRandom(): number {
    const arr: number[] = Object.values(this.obj);
    console.log(Math.random() * (arr.length ? arr.length - 1 : 0));
    return arr[Math.floor(Math.random() * (arr.length ? arr.length - 1 : 0))];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_1 = obj.insert(2);
// var param_2 = obj.remove(val);
var param_3 = obj.getRandom();
