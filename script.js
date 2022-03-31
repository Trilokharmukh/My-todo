
closeAndMin();




//// ......... open dialog box section   


var plusBtn = document.querySelector(".plus");

plusBtn.addEventListener("click", plusBtnClick)

function plusBtnClick() {
    document
        .querySelector(".dialog")
        .style
        .display = "flex"

     

}


///.........close dialog box 

let closedia = document.querySelector('.cross');
closedia.addEventListener('click', closeDialog)

function closeDialog() {
    document
        .querySelector(".dialog")
        .style
        .display = "none"
}


////........... add ticket wala section  . ...........

function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main");
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="box">
        <header>
            <div class="box-heading">${title.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">x</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>`;
    title.value = ""
    boxContent.value = ""
   closeAndMin();
}


function addDelTktLogic() {
    var closeBtnArr = document
        .querySelectorAll(".icon.color-3")
    var minimizeIcons = document
        .querySelectorAll(".icon.color-1")

    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    
    
}






function closeAndMin()
{

    // ............close
    let closeBtnArr = document.querySelectorAll('.icon.color-3');
    console.log(closeBtnArr);

    for(let i=0; i<closeBtnArr.length; i++)
    {
        closeBtnArr[i].addEventListener('click',closediv);
    }

    function closediv(e)
    {
        console.log(e.target.closest('.box'));
        //e.target.closest.style.display='none';

        let cbox = e.target.closest('.box');
        cbox.style.display='none';

    }

    // ............. minimize

    let minBtnArr = document.querySelectorAll('.icon.color-1');
    for(let j=0; j<minBtnArr.length; j++)
    {
        minBtnArr[j].addEventListener('click',mindiv);
    }

    function mindiv(e)
    {
        let box = e.target.closest('.box');
        console.log(box);

        let textArea = box.querySelector('main');
        console.log(textArea);
        if(textArea.style.display != "none")
        {
            textArea.style.display = "none"
        }
        else
        {
            textArea.style.display = "flex"
        }
    }

}

