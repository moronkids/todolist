class allTask {
    constructor(taskname) {
        this.task = [
            {
                name: "memotong rumput",
                important: 1
            },
            {
                name: "memotong rambut",
                important: 1
            }
        ];
    }

    set addIt(taskname) {
        let data = {
            name: taskname,
            important: 0
        }
        this.task.push(data);
    }
    get result() {
        // let array()
        let data = this.task
        return data;
    }
}

const button = document.getElementById('addtask');
console.log(button)
// buttonAdd.addEventListener('click', function() {
//     alert('dor');
// })
if (button) {
    localStorage.setItem('point', 0)
    button.addEventListener('click', function () {
        localStorage.setItem('index', localStorage.getItem('point')+1);
        // local
        let html;
        // alert("clicked");
        let task = new allTask();
        task.addIt = document.getElementById('taskinput').value;
        let taskx = task.result
        // console.log(taskx[1], task, document.getElementById('taskinput').value)

        // document.getElementsByClassName("labell")[0].innerHTML =
        // taskx.forEach((val, i ,arr) => {
        //     console.log(val.name, "duar")
        //     html =
        //         '<div class="add-todo-list" style="display: relative;">' +
        //         ' <input type="checkbox" class="cb">' +
        //         '<p class="task">'+val.name+'</p>' +
        //         '<div class="star"></div>' +
        //         '<div class="pencil"></div>' +
        //         '<div class="trash"></div>' +
        //         '</div>';
        //         console.log(html, "cek")
        //         document.getElementsByClassName("labell")[0].innerHTML += html;
        //     });
        // });
        let index = parseInt(localStorage.getItem('index'))
        localStorage.setItem('point', localStorage.getItem('index'))
        html =
            `<div id=${index} class="add-todo-list" style="display: relative;">` +
            `<input onclick="check(this, ${index})" type="checkbox" class="cb">` +
        '<p class="task">' + document.getElementById('taskinput').value+'</p>' +
            `<div onclick=star(${index}) class="star"></div>` +
            `<div onclick=edit(${index}) class="pencil"></div>` +
            `<div onclick="deletex(${index})" class="trash"></div>` +
            '</div>';
            console.log(html, "cek")
            document.getElementsByClassName("labell")[0].innerHTML += html;
})}
function star(id) {
    let validatex = validate(id);
    if(validatex) {

        let star = document.getElementById(id).getElementsByClassName('bl')
        console.log(star.length);
        if(star.length == 0) {
            document.getElementById(id).getElementsByClassName('star')[0].className += " bl"
            // document.getElementById("MyElement").classList.add('MyClass');

            // document.getElementById("MyElement").classList.remove('MyClass');
        }
        else {
            console.log("sini")
            var element = document.getElementById(id).getElementsByClassName('star');
            element[0].classList.remove("bl");
        }
    }
    else {
        alert("Please checked first!")
    }
}

function edit(id) {
    let validatex = validate(id);
    if(validatex) {

        let value = document.getElementById(id).getElementsByClassName('task')[0].textContent;
        let html =
            `<div id="${id+"e"}"class="add-todo1">`+
                `<div class="add-todo-list-label1">`+
            `<Input id="taskinput" class="label-input" value="${value}" ></Input>`+
                    `<div style="width: 30%; height: 100%;">`+
            `<div onclick=submitx("${id + "e"}") class="label-add"></div>`+
                    `</div>`+
                `</div>`+
            `</div>`
        // var newNode = document.createElement(html);
        let parent = document.getElementById(`${id}`);
        console.log(parent, "diarrrr")
        parent.insertAdjacentHTML("afterend", html)
    }
    else {
        alert("Please checked first!")
    }
}

function submitx(id) {
    // alert("duar", id)
    // console.log("test", id)
    // let regex =
    let newval = document.getElementById(id).getElementsByTagName('input')[0].value;
    console.log(newval, "bew");
    document.getElementById(id.replace(/e/g, "")).getElementsByClassName('task')[0].textContent = newval;
    document.getElementById(id).remove();
}
function deletex(tdelete) {
    let validatex = validate(tdelete);
    console.log(validatex, "valdd")
    if(validatex) {
        document.getElementById(tdelete).remove()
    }
    else {
        alert("Please checked first!")
    }
}

function check(e, x) {

    if(e.checked) {
        e.checked = true;
        e.checked = "checked";
        return true
    }
    else {
    e.checked = false;
        return false;
    }
}
function validate(x) {
    let parent = document.getElementById(x).getElementsByTagName("input")[0];
    console.log(parent, "child")
    if (parent.checked) {
        return true;
    } else {
        return false;
    }
}