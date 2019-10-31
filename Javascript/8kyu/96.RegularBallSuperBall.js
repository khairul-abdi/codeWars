var Ball = function (ballType) {

    if (ballType == 'super') {
        this.ballType = ballType
    } else {
        this.ballType = 'regular'
    }

    console.log(ballType)
    // if (typeof ballType === "string") {
    //     this.ballType = ballType;
    // } else {
    //     this.ballType = "regular";
    // }
};


console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");