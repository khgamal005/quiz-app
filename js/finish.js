export class Finish{
    constructor(score)
    {
        this.scoreElement=document.getElementById("score")
        this.scoreElement.innerHTML=score
        this.try=document.getElementById("try")
        this.finish=document.getElementById("finish")
        this.settings=document.getElementById("settings")
        this.try.addEventListener("click",this.tryAgain.bind(this))
         // this.inCorrect=document.getElementById("inCorrect")
        // this.correct=document.getElementById("correct")
    }

    tryAgain()
    {
        
        $(this.finish).fadeOut(300,()=>$(this.settings).fadeIn(300))
        window.location.href="index.html"
        // $(this.correct).hide(0)
        // $(this.inCorrect).hide(0)
    }


}

