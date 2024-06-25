const added = document.querySelector("#added");
const addone = document.querySelector("#adding");
const storvalue = document.querySelector("#storvalue");
const save = document.querySelector("#saved");
// let p = 0;
adding.addEventListener("click", function () {
    added.innerHTML = +added.innerHTML + 1;
});
save.addEventListener("click", function () {
    switch (storvalue.innerHTML) {
        case "null":
            storvalue.innerHTML = added.innerHTML;
            added.innerHTML = 0;
            break;
        default:
            storvalue.innerHTML += "," + added.innerHTML;
            added.innerHTML = 0;
            break;
    }
});
