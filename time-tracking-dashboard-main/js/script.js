DailyHours=[
    {
        now:5,
        last:7
    },
    {
        now:1,
        last:2
    },
    {
        now:0,
        last:1
    },
    {
        now:1,
        last:1
    },
    {
        now:1,
        last:3
    },
    {
        now:0,
        last:1
    }

]

WeeklyHours=[
    {
        now:32,
        last:36
    },
    {
        now:10,
        last:8
    },
    {
        now:4,
        last:7
    },
    {
        now:4,
        last:5
    },
    {
        now:5,
        last:10
    },
    {
        now:2,
        last:2
    }

]


MonthlyHours=[
    {
        now:103,
        last:128
    },
    {
        now:23,
        last:29
    },
    {
        now:13,
        last:19
    },
    {
        now:11,
        last:18
    },
    {
        now:21,
        last:23
    },
    {
        now:7,
        last:11
    }

]

function activateDaily(event){
    const collection=document.querySelectorAll("a")
    const hoursNumber=document.getElementsByClassName("hours-number")
    const LastHours=document.getElementsByClassName("last")
    const lastText=document.getElementsByClassName("last-text")
    for (let i = 0; i < collection.length; i++) {
        collection[i].removeAttribute("id");
    }
    event.target.id="active"
    switch (document.getElementById("active").innerText) {
        case "Daily":
            for (let i = 0; i < hoursNumber.length; i++) {
                hoursNumber[i].innerHTML=DailyHours[i].now
                LastHours[i].innerHTML=DailyHours[i].last
                lastText[i].innerHTML="Yesterday -"
            }
            break;
        case "Weekly":
            for (let i = 0; i < hoursNumber.length; i++) {
                hoursNumber[i].innerHTML=WeeklyHours[i].now
                LastHours[i].innerHTML=WeeklyHours[i].last
                lastText[i].innerHTML="Last Week -"
            }
            break;
        case "Monthly":
            for (let i = 0; i < hoursNumber.length; i++) {
                hoursNumber[i].innerHTML=MonthlyHours[i].now
                LastHours[i].innerHTML=MonthlyHours[i].last
                lastText[i].innerHTML="Last Month -"
            }
            break;
        default:
            break;
    }
    
}

