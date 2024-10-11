// Storing user's device details in a variable
let details = navigator.userAgent;

// Create a regular expression to search for mobile devices keywords in the details string
let regexp = /android|iphone|kindle|ipad/i;

// Check if the user is using a mobile device
let isMobileDevice = regexp.test(details);


// test before true
if (isMobileDevice) {
    report_error()
}  else {
    redirect()
}

function redirect() {
    console.log("Internal error. Sending back to home/index")
    window.location.href = "/" //redirect to home/index
}

function report_error() {
    console.log("Website recovered from an error! Alerting")
    alert("Website recovered from an error. More info in console.")
    console.log("If you were redirected here, that means you are on a mobile device!")
    console.log("Info is reported below:")
    console.log("--------------------------")
    console.log(navigator.userAgent)
    if (isMobileDevice) {
        console.log("You are using a Mobile Device");
    } else {
        console.log("You are using Desktop");
    }

}

