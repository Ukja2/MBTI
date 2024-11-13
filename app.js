const StartPage = document.querySelector("#start_page"); //시작페이지
const StartButton = StartPage.querySelector("#Startinput"); //시작버튼

const MainPage = document.querySelector("#main_page"); //메인 페이지
const ShowResultButton = MainPage.querySelector("#ShowResultbutton");

const EndPage = document.querySelector("#end_page"); //결과 페이지

const QuestionText = MainPage.querySelector("#question_text")
const Answer1Button = MainPage.querySelector("#answer1")
const Answer2Button = MainPage.querySelector("#answer2")

const ResultText = EndPage.querySelector("#results")
const ResultImage = EndPage.querySelector("#result-image");

const ProfileId = document.querySelector("#profile_id")

//질문 리스트
const questions =[
    {question : "친한 친구들이랑 놀다가 집에 돌아오는 길. 그때 내 기분은?"
    ,type : "E/I"
    ,option : ["간만에 활력도 돌고 즐거운 시간 보내서 재밌었어.", "피곤하고 빨리 집에 가서 쉬고싶다."]},

    { question : "새로운 모임에서 아직 친하지 않은 사람들과 함께할 때 나는?"
    ,type : "E/I"
    ,option : ["먼저 말을 걸고 분위기를 주도하는 편이다.", "상대방이 먼저 다가올 때까지 기다리는 편이다."] },

    { question : "바쁜 일정을 마치고 저녁 시간이 생겼을 때 나는?"
    , type : "E/I"
    , option : ["친구들과 만나서 이야기하거나, 사람들과 어울리며 쉬고 싶다.", "집에서 혼자 휴식을 취하며 시간을 보내고 싶다."] },



    {question: "백두산 올라가기 vs 춤추면서 한라산 내려오기"
    ,type : "N/S"
    ,option: ["하...씨 뭐하지.. 음. 춤추면서 한라산 내려오기?", "뭐야 그게;;"]    
    },
    { question : "여행 준비를 할 때 나는?"
    , type : "N/S"
    , option : ["새로운 장소에서의 색다른 경험과 상상을 떠올리며 설렌다.", "여행지에 대해 구체적으로 조사하고 필요한 준비물을 꼼꼼히 챙긴다."] },
    { question : "어떤 주제에 대해 이야기할 때 나는?"
    , type : "N/S"
    , option : ["큰 그림과 가능성을 중심으로 이야기하는 것을 좋아한다.", "구체적이고 실질적인 정보나 사례를 이야기하는 것을 좋아한다."] },
    
    
    {question: "친한친구가 교통사고가 났다고 전화가 왔다. 그때의 나는?"
    ,type : "T/F"
    ,option : ["얼마나 다쳤는데? 병원은?", "헐 놀랐겠다. 괜찮아?"]
    },
    { question : "갈등 상황에 놓였을 때 나는?"
    , type : "T/F"
    , option : ["감정에 휘둘리지 않고 문제 해결에 집중한다.", "상대방의 감정을 이해하고 공감하려고 노력한다."] },
    { question : "친구가 고민을 털어놓을 때 나는?"
    , type : "T/F"
    , option : ["문제를 해결할 방법을 찾아주려고 한다.", "먼저 공감하고 친구의 감정을 이해하려고 한다."] },


    { question : "여행을 계획할 때 나는?"
    , type : "J/P"
    , option : ["일정과 계획을 미리 세워두고 여행하는 게 좋다.", "자세한 계획 없이 자유롭게 여행하고 싶다."] },
    {question:"친한 친구랑 여행을 하던 중 피곤해서 숙소에 잠깐 온 상황, 근데 아직 일정이 남아있다면?"
    ,type : "J/P"
    ,option : ["웬만하면 일정대로 진행한다.", "쉬다가 가고 싶어지면 즉흥적으로 다시 출발한다."]},
    { question : "주말이 다가올 때 나는?"
    , type : "P/J"
    , option : ["특별한 계획 없이 그날 기분에 따라 보내고 싶다.", "미리 주말 계획을 세워두고 그에 맞춰 시간을 보내고 싶다."]}
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
        CalcurateResult()
    }

    
}

function CalcurateResult(){
    let Score = {
        "E" : 0,
        "I" : 0,
        "N" : 0,
        "S" : 0,
        "T" : 0,
        "F" : 0,
        "P" : 0,
        "J" : 0
    }

    answers.forEach((answer, index) => {
        const type = questions[index].type;

        if (type === "E/I"){
            if (answer === "option1") Score.E ++;
            else Score.I ++;
        } else if (type == "N/S"){
            if (answer === "option1") Score.N ++;
            else Score.S ++;
        } else if (type === "T/F"){
            if (answer === "option1") Score.T ++;
            else Score.F ++;
        } else if (type === "J/P"){
            if (answer === "option1") Score.J ++;
            else Score.P ++;
        }
    });

    const FinalResult = 
        (Score.E >= Score.I ? "E" : "I") +
        (Score.N >= Score.S ? "N" : "S") +
        (Score.T >= Score.F ? "T" : "F") +
        (Score.J >= Score.P ? "J" : "P") ;

    ResultText.innerText = FinalResult;

    function createImage(FinalResult) {
        const existingImage = EndPage.querySelector("img");
        if (existingImage) {
            existingImage.remove(); // 기존 이미지를 제거
        }
    
        const img = document.createElement("img");  // <img> 요소 생성
        img.src = `C:/Users/qwe02/OneDrive/바탕 화면/MbtiProject/MBTI/Mbti_Image/${FinalResult}.jpg`;  // 이미지 경로 설정
        document.getElementById("end_page").appendChild(img);// 이미지 삽입
        }
    
    createImage(FinalResult)
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
    MainPage.classList.add("hidden");
    EndPage.classList.remove("hidden");
    CalcurateResult()
}




//이벤트 리스너 설정
StartButton.addEventListener("click", Show_NextPage);
Answer1Button.addEventListener("click", () => NextQuestion("option1"));
Answer2Button.addEventListener("click", ()=> NextQuestion("option2"));
