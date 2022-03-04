score = 0;

function updatescore()
{
score = score+1;
document.getElementById("score").innerHTMl = "score:" +score;
}

function savescore()
{
    localStorage.setitem("score", score);
}

function nextpage ()
{
   window.location = "activity_2.html";
}