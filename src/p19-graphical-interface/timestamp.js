function getTimestamp() {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Le mois de janvier porte le numéro 0
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    timestamp = year + '-' + format(month) + '-' + format(day) + '_' + format(hours) + '-' + format(minutes) + '-' + format(seconds);
    return timestamp;

    function format(n) {
        if (n < 10) {
            n = '0' + n;
        }
        return n;
    }

}