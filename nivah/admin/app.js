let opened = false;
let mode = "insert";

const overTool = document.querySelector(".over-tool");
const form = document.getElementById("upload-testinomial");
const closebtn = document.getElementById("close-diag");

closebtn.addEventListener("click", function(e){
    e.preventDefault();
    if(opened){
        overTool.style.display = "none";
        opened = false;
    }
});


form.addEventListener("submit", function(e){
    e.preventDefault();
    const url = 'http://localhost/nivah_api/testinomials/addnew.php';
    const formData = new FormData(this);
    console.log(formData);
    fetch(url, {
        method: 'POST',
        body: formData,
    }).then(response => {
        overTool.style.display = "none";
        opened = false;
        window.location.reload();
    });
});

function openTool(event) {
    switch (event.target.id) {
        case 'insert-testinomial':
            if(opened){
                overTool.style.display = "none";
                opened = false;
            } else {
                overTool.style.display = "block";
                opened = true;
            }
            break;
        case 'edit-testinomial':
            if(opened){
                overTool.style.display = "none";
                opened = false;
            } else {
                overTool.style.display = "block";
                opened = true;
            }
            edit(event.target.value);
            break;
        case 'del-testinomial':
            del(event.target.value);
            break;
        default:
    }
}

function close(event) {
    console.log("close");
    event.preventDefault();

}

function edit(id) {
    console.log(id);
}

function del(id) {
    const url = 'http://localhost/nivah_api/testinomials/delete.php';

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"id": id}),
    }).then(response => {
        console.log(response);
    });
    window.location.reload();
}
