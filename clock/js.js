p = 0
a = 1
function timemove(second)
{
    meneat = parseInt(second / 60)
    hour = parseInt(meneat / 60)
    second =second%60
    meneat =meneat%60
    if (hour<10)
    document.querySelector(".hour").innerHTML="0"+hour
    else
    document.querySelector(".hour").innerHTML=hour
    if (meneat<10)
    document.querySelector(".meneat").innerHTML="0"+meneat
    else
    document.querySelector(".meneat").innerHTML=meneat
    if (second<10)
    document.querySelector(".second").innerHTML="0"+second
    else
    document.querySelector(".second").innerHTML=second
}
function start(p)
{   


        p = 0
        if (p == 0)
        {
        timer = setInterval(() => {
            
            timemove(a)
            a = a + 1
        }, 1000);
        }
}
function stop()
{
    clearTimeout(timer)
}



    

