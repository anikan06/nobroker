var frnds = 0;
var totlBill;
var divtest;
var clicks = 0;
var billToPay;
var frndName = [];
var tmp_values = [];

/*var addTsks = document.getElementById('addTsk');

addTsks.addEventListener("click", add_fields);*/

function add_fields() {
    console.log("add");
    clicks += 1;
    console.log(clicks);
    frnds++;
    var objTo = document.getElementById('tskDiv');
    divtest = document.createElement("div");
    divtest.classList.toggle("card");
    divtest.innerHTML =
        '<div class="card-body" id="dr1" draggable="true" ondragstart="drag(event)">'+
        '<textarea class="form-control" aria-label="With textarea" id="text1"></textarea>'+
        '<a href="#" class="card-link"><i class="fa fa-pencil-square-o"></i></a>'+

        '<a href="#" class="card-link remove"><i class="fa fa-trash"></i></a>'+
        '<a href="#" class="card-link text-right" id="save" onclick="saveTasks1();"><i class="fa fa-envelope"></i></a>'+
        '</div>';

    objTo.appendChild(divtest);

}

function add_fieldsn() {
    console.log("add");
    clicks += 1;
    console.log(clicks);
    frnds++;
    var objTo = document.getElementById('tskDiv1');
    divtest = document.createElement("div");
    divtest.classList.toggle("card");
    divtest.innerHTML =
        '<div class="card-body" id="tsk-'+frnds+'" draggable="true" ondragstart="drag(event)">'+
        '<textarea class="form-control" aria-label="With textarea" id="text2"></textarea>'+
        '<a href="#" class="card-link"><i class="fa fa-pencil-square-o"></i></a>'+

        '<a href="#" class="card-link remove"><i class="fa fa-trash"></i></a>'+
        '<a href="#" class="card-link text-right" id="save" onclick="saveTasks2();"><i class="fa fa-envelope"></i></a>'+
        '</div>';

    objTo.appendChild(divtest);

}

function add_fieldsnw() {
    console.log("add");
    clicks += 1;
    console.log(clicks);
    frnds++;
    var objTo = document.getElementById('tskDiv2');
    divtest = document.createElement("div");
    divtest.classList.toggle("card");
    divtest.innerHTML =
        '<div class="card-body" id="tsk-'+frnds+'" draggable="true" ondragstart="drag(event)">'+
        '<textarea class="form-control" aria-label="With textarea" id="text3"></textarea>'+
        '<a href="#" class="card-link"><i class="fa fa-pencil-square-o"></i></a>'+

        '<a href="#" class="card-link remove"><i class="fa fa-trash"></i></a>'+
        '<a href="#" class="card-link text-right" id="save" onclick="saveTasks3();"><i class="fa fa-envelope"></i></a>'+
        '</div>';

    objTo.appendChild(divtest);

}

/*$(document).on('click', '.remove', function(){
    console.log(clicks);
    var $this = $(this);
    $this.add($this.prev()).add($this.next()).remove();
});*/
$(document).on('click','.remove',function() {
    $(this).closest("div.card").remove();
});

/*var sv = document.getElementById("save");
sv.addEventListener("click", function ()
{
    var task = document.getElementById("text1").value ;
    localStorage.setItem("task", task) ;
    console.log(task)
} , false);*/

function saveTasks1() {
    console.log("test");
    var task = document.getElementById("text3").value ;
    localStorage.setItem("To Do", task) ;
    console.log(task);
}
function saveTasks2() {
    console.log("test");
    var task = document.getElementById("text3").value ;
    localStorage.setItem("In Proogress", task) ;
    console.log(task);
}
function saveTasks3() {
    console.log("test");
    var task = document.getElementById("text3").value ;
    localStorage.setItem("Done", task) ;
    console.log(task);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}