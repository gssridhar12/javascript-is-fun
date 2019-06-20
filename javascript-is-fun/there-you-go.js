(function () { //iife
    console.log("hi");
    // defer execution of code
    //settimeout to 0 puts it in event queue which is executed after call stack is clear.
    setTimeout(function () {
        console.log("deferred");
    }, 0);
    console.log("u got me");
})() 
