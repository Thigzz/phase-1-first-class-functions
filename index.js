function receivesAFunction(diet) {
    let meal
    if (diet === "Monday") {
        meal = "Salad"
    } else if (diet === "Tuesday") {
        meal = "quiche"
    } else {
        diet();
    }
}

function returnsANamedFunction() {
    function namedFunction() {
        return "I am awesome!";
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "I am Struggling";
    };
}

