var feet = document.getElementById('feet');
var inches = document.getElementById('inches');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inches.value = i;

});

inches.addEventListener('input', function(){
    let k = this.value;
    let j = k/12;
    feet.value = j;

});