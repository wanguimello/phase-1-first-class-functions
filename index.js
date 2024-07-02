function receivesAFunction(callback){
    callback();
}
function nana(){
}
function returnsANamedFunction(){
    return nana
}

function returnsAnAnonymousFunction(){
    return function () {}
}

