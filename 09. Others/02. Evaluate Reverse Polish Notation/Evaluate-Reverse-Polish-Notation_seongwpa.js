var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++)
    {
        if (tokens[i] == "+")
        {
            let r = stack.pop();
            let l = stack.pop();
            stack.push(l + r);
        }
        else if (tokens[i] == "-")
        {
            let r = stack.pop();
            let l = stack.pop();
            stack.push(l - r);
        }
        else if (tokens[i] == "*")
        {
            let r = stack.pop();
            let l = stack.pop();
            stack.push(l * r);
        }
        else if (tokens[i] == "/")
        {
            let r = stack.pop();
            let l = stack.pop();
            let res = l / r;
            if (res > 0) res = Math.floor(res);
            else res = -Math.floor(-res);
            stack.push(res);
        }
        else stack.push(parseInt(tokens[i]));
    }
    return stack[0];
};
