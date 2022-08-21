import { Finish } from "./finish.js";


export class quiz{
    constructor(data,numberOfQ)
    {
        this.data=data;
        this.numberOfQ=numberOfQ
        this.quiz=document.getElementById("quiz")
        this.finish=document.getElementById("finish")
        this.alert2=document.getElementById("alert2")


        this.inCorrect=document.getElementById("inCorrect")
        this.correct=document.getElementById("correct")

        this.currentQuestionElement=document.getElementById("currentQuestion")
        this.totalQuestionsElement=document.getElementById("totalQuestions")
        this.question=document.getElementById("question")

        this.rowAnswers=document.getElementById("rowAnswers")
        this.answers=document.getElementsByName("answer")
        this.submit=document.getElementById("submit")

        this.currentQuestion=0;
        this.score=0;
        
        this.displayQuestion(this.data)
        this.displayAnswers(this.data)
  
        this.submit.addEventListener("click",this.showNext.bind(this))
    }
    displayQuestion(data)
    {
        this.question.innerHTML=this.data[this.currentQuestion].question
        this.currentQuestionElement.innerHTML=this.currentQuestion+1
        this.totalQuestionsElement.innerHTML= this.numberOfQ
    }
    displayAnswers(data)
    {

        let correctAnswer=this.data[this.currentQuestion].correct_answer
        let wrongtAnswers=this.data[this.currentQuestion].incorrect_answers
        let answers =[correctAnswer,...wrongtAnswers]
        answers.sort(()=>Math.random()-.5)
        let cartona=``
        for(let i=0;i<answers.length;i++)
        {
            cartona+=` <input  type="radio" value="${answers[i]}" name="answer" id="q${i}">
            <label  for="q${i}">${answers[i]}</label><br>`
        }
        this.rowAnswers.innerHTML=cartona

    }

    showNext(){
       
        let answers =[...this.answers]
        let chosenAnswer=answers.filter((e)=>e.checked)[0]?.value
        if(chosenAnswer==null)
        {
           this.alert2.classList.replace("d-none","d-block")
        }
        else 
        {
            this.alert2.classList.replace("d-block","d-none")
            console.log(this.data[this.currentQuestion].correct_answer)
            // To Show If Your Answer Correct Or Incorrect After Your Answer
            if(this.data[this.currentQuestion].correct_answer==chosenAnswer)
            {
                $(this.correct).fadeIn(300)
                $(this.inCorrect).fadeOut(0)
                this.score++;
            
            }
            else
            {
                $(this.inCorrect).fadeIn(300)
                $(this.correct).fadeOut(0)
            }
    
            // Next Question And Answers
            this.currentQuestion++;
            if(this.currentQuestion<this.numberOfQ)
            {
                this.displayQuestion(this.data)
                this.displayAnswers(this.data)
                
            }
            else
            {
                this.currentQuestion=0;
                $(this.correct).fadeOut(300)
                $(this.inCorrect).fadeOut(300)
    
                $(this.quiz).fadeOut(300,()=>$(this.finish).fadeIn(300))
                new Finish(this.score,this.currentQuestion)
                this.score=0;
               
            }
    

        }
        

       
    }
}