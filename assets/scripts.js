function daysUntilWedding() {
    var now = Date.now();
    var wedding = Date.parse("November 17, 2018");
    var diff = wedding - now;
    var output = Math.ceil(diff / 1000 / 60 / 60 / 24);
    document.write(output.toString());
}