
function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
}


function getDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if( dd < 10 ) {
        dd = "0" + dd
    };
    if( mm < 10 ) {
        mm = "0" + mm
    };
    today = mm + "/" + dd + "/" + yyyy + " at " + displayTime();
    console.log(today);
    return today;
}

module.exports = getDate;