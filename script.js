const PythThm = () => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    if (a > 0 && b > 0 && c > 0) {
        return "Re-enter values";
    } else 
    if (a > 0 && b > 0) {
        return (Math.sqrt(a*a + b*b));
    } else 
    if (a > 0 && c > 0) {
        return (Math.sqrt(c*c - a*a));
    } else 
    if (b > 0 && c > 0) {
        return (Math.sqrt(c*c - b*b));
    } else 
        return "Re-enter values";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML= PythThm ();
}



