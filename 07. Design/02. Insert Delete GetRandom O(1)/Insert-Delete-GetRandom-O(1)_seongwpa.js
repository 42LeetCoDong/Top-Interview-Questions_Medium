var RandomizedSet = function() {
    this.set = [];
};

RandomizedSet.prototype.insert = function(val) {
    for (let i = 0; i < this.set.length; i++)
    {
        if (this.set[i] == val)
            return false;
    }
    this.set.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    for (let i = 0; i < this.set.length; i++)
    {
        if (this.set[i] == val)
        {
            let idx = this.set.indexOf(val);
            this.set.splice(idx, 1);
            return true;
        }
    }
    return false;
};

RandomizedSet.prototype.getRandom = function() {
    let randidx = Math.floor(Math.random() * this.set.length);
    return this.set[randidx];
};
