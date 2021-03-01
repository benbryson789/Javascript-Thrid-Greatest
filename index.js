let ThirdGreatest = function (array) {
    let array5 = array.sort(function(x,y){ return y.length - x.length});
    return array5[2];
};

ThirdGreatest (["coder","byte","code"])
   
// keep this function call here 
//console.log(ThirdGreatest(readline()));
