var currentDate = new Date();
var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();

document.getElementById("btnYes").addEventListener("mouseover", function(e) {
    e.target.innerHTML = 'Yieee';
    
});

document.getElementById("btnYes").addEventListener("click", function(e) {
    if(month == 12 && date == 24 || date == 25){
        window.location.href = 'christmas.html';
    }
    if(month == 1 && date == 1){
        window.location.href = 'newyear.html';
    }
    else{
        window.location.href = 'https://www.youtube.com/watch?v=ekzHIouo8Q4&t=171s';
    }
});

document.getElementById("btnNo").addEventListener("mouseover", function(e) {
    const $target = e.target;
    $target.style.top = `${Math.random() * 200}px`;
    $target.style.right = `${Math.random() * 200}px`;
});