// Le typage générique

function identity<T1, T2>(arg: T1, arg2: T2): T1 {
    return arg;
}

let outputS = identity<string, number>("myString", 5);
