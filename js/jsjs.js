function shakescreen(){
    document.body.classList.add("shake");
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 400);
}

const btn =
document.getElementById("run");

