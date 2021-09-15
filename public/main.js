const getType = obj => Object.prototype.toString.call(obj).slice(8, -1);
let origen = $('#origen'); 
origen.empty(); 
origen.append(''); 
origen.prop('selectedIndex', 0); 
const url = 'http://data.fixer.io/api/latest?access_key=7331723b42398f23ae5ef1fc5a83a1da&format=1'; 
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        if(getType(entry) == 'Object') {
            $.each(entry, function (key, money) {
 
            origen.append($('<option></option>').attr('value', money).text(key)); 
        }
    );}
});
});

let destino = $('#destino'); 
destino.empty(); 
destino.append(''); 
destino.prop('selectedIndex', 0); 
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        if(getType(entry) == 'Object') {
            $.each(entry, function (key, money) {
 
            destino.append($('<option></option>').attr('value', money).text(key)); 
        }
    );}
});
});

const calcularImporte=()=>{
    $('#conversion').val($('#importe').val() * $('#origen').val() * $('#destino').val())
}

    