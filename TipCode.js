function calcValues(form){
    //convert form values from strings to numbers
    let tip = Number(form.tip.value);
    let cost = Number(form.cost.value);
    let ppl = Number(form.numPeople.value);

    //store values in variables before changing html
    let tipAmount=(form.cost.value*(form.tip.value*.01));
    let total=(tipAmount + cost);

    //make the changes to html using the calculated values
    document.getElementById('tipA').innerHTML='$'+tipAmount.toFixed(2);
    document.getElementById('ttl').innerHTML='$'+total.toFixed(2);
    document.getElementById('ttlPP').innerHTML='$'+(total/ppl).toFixed(2);
}