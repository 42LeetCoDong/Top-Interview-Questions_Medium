/*          // fail.
var fractionToDecimal = function(numerator, denominator) {
    let str = numerator / denominator;
    str = str.toString();
    console.log(str);
    let flag = 0;
    let dict = {};
    let i = 0, idx = Infinity;
    let res = [], intres = [];
    while (i < str.length)
    {
        if (dict[str[i]])
        {
            idx = res.indexOf(str[i]);
            break;
        }
        if (flag == 1 && !dict[str[i]])
        {
            res.push(str[i]);
            dict[str[i]] = true;
        }
        if (flag == 0)
            intres.push(str[i]);
        if (str[i] == ".")
            flag = 1;
        i++;
    }
    if (idx != Infinity)
    {
        let tmp = res.slice(idx);
        res = res.slice(0, idx);
        res.push("(");
        res = res.concat(tmp);
        res.push(")");
    }
    res = intres.concat(res);
    res = res.join('');
    return res;
};
*/
/*
1 / 333 = 0.003003003003003003 = 0.(003) (expected)
                          but,   0.(0)   (output)

1 / 3333 = 0.00030003000300030005 = 0.(0003)
*/
var fractionToDecimal = function(numerator, denominator) {
    if (numerator == 0) return "0";
    let res = "";
    numerator * denominator < 0 ? res += "-" : "";
    let n = numerator > 0 ? numerator : -numerator;
    let d = denominator > 0 ? denominator : -denominator;
    let repeat = {};
    res += Math.floor(n / d);
    n %= d;
    if (n == 0) return res;
    res += ".";
    while (n != 0)
    {
        repeat[n] = res.length;

        n *= 10;
        res += Math.floor(n / d);
        n %= d;

        let i = repeat[n];
        if (i != null) return res.slice(0, i) + "(" + res.slice(i) + ")";
    }
    return res;
};

/*
1 / 3334 = "0.0(00299940011997600479904019196160767846430713857228554289142171565686862627474505098980203959208158368326334733053389322135572885422915416916616676664667066586682663467306538692261547690461907618476304739052189562087582483503299340131973605278944211157768446310737852429514097180563887222555488902219556088782243551289742051589682063587282543491301739652069586082783443311337732453509298140371925614877024595080983803239352129574085182963407318536292741451709658068386322735452909418116376724655068986202759448110377924415116976604679064187162567486502699460107978404319136172765446910617876424715056988602279544091181763647270545890821835632873425314937012597480503899220155968806238752249550089982003599280143971205758848230353929214157168566286742651469706058788242351529694061187762447510497900419916016796640671865626874625074985)" ( output )

"0.0(00299940011997600479904019196160767846430713857228554289142171565686862627474505098980203959208158368326334733053389322135572885422915416916616676664667066586682663467306538692261547690461907618476304739052189562087582483503299340131973605278944211157768446310737852429514097180563887222555488902219556088782243551289742051589682063587282543491301739652069586082783443311337732453509298140371925614877024595080983803239352129574085182963407318536292741451709658068386322735452909418116376724655068986202759448110377924415116976604679064187162567486502699460107978404319136172765446910617876424715056988602279544091181763647270545890821835632873425314937012597480503899220155968806238752249550089982003599280143971205758848230353929214157168566286742651469706058788242351529694061187762447510497900419916016796640671865626874625074985)" ( expected )
*/
