const StartPage = document.querySelector("#start_page"); //시작페이지
const StartButton = StartPage.querySelector("#Startinput"); //시작버튼

const MainPage = document.querySelector("#main_page"); //메인 페이지
const ShowResultButton = MainPage.querySelector("#ShowResultbutton");

const EndPage = document.querySelector("#end_page"); //결과 페이지

const QuestionText = MainPage.querySelector("#question_text")
const Answer1Button = MainPage.querySelector("#answer1")
const Answer2Button = MainPage.querySelector("#answer2")


//질문 리스트
const questions =[
    {question : "친한 친구들이랑 놀다가 집에 돌아오는 길. 그때 내 기분은?"
    ,type : "E/I"
    ,option : ["피곤하고 빨리 집에 가서 쉬고싶다.", "간만에 활력도 돌고 즐거운 시간 보내서 재밌었어."]
    },

    {question: "백두산 올라가기 vs 춤추면서 한라산 내려오기"
    ,type : "N/S"
    ,option: ["하...씨 뭐하지.. 음. 춤추면서 한라산 내려오기?", "뭐야 그게;;"]    
    },

    {question: "친한친구가 교통사고가 났다고 전화가 왔다. 그때의 나는?"
    ,type : "T/F"
    ,option : ["얼마나 다쳤는데? 병원은?", "헐 놀랐겠다. 괜찮아?"]
    },

    {question:"친한 친구랑 여행을 하던 중 피곤해서 숙소에 잠깐 온 상황, 근데 아직 일정이 남아있다면?"
    ,type : "J/P"
    ,option : ["웬만하면 일정대로 진행한다.", "쉬다가 가고 싶어지면 즉흥적으로 다시 출발한다."]
    }

];

//답변을 저장할 배열
let answers = [];
//현재 질문을 지정하는 변수
let currentQuestionIndex = 0

//질문 출력 함수
function ShowQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    
    // 질문 텍스트와 선택지를 화면에 표시
    QuestionText.innerText = currentQuestion.question;
    Answer1Button.innerText = currentQuestion.option[0];
    Answer2Button.innerText = currentQuestion.option[1];
}

function NextQuestion(answer){
    answers.push(answer) //선택한 답변을 배열에 저장
    
    currentQuestionIndex++; //질문 배열을 순차적으로 진행하도록 인덱스를 1씩 증가
    
    if (currentQuestionIndex < questions.length){
        ShowQuestion()
    } else {
        Show_EndPage()
    }

    
}









//페이지 출력 함수들
//질문 페이지 출력 함수
function Show_NextPage(){
    StartPage.classList.add("hidden");
    MainPage.classList.remove("hidden");
    ShowQuestion()
}

//결과 페이지 출력 함수
function Show_EndPage(){
    MainPage.classList.add("hidden")
    EndPage.classList.remove("hidden")
}




//이벤트 리스너 설정
StartButton.addEventListener("click", Show_NextPage);
Answer1Button.addEventListener("click", () => NextQuestion("option1"))
Answer2Button.addEventListener("click", ()=> NextQuestion("option2"))

