## MBTI Test Web Application
사용 언어 : HTML , JavaScript 

### 주요 기능
#### 1. 페이지 구성
세 개의 페이지로 구성했다.
`StartPage` : 프로그램 실행 시 보이는 시작화면, StartButton을 통해 MainPage로(질문 화면) 이동할 수 있다.
`MainPage` : 각 질문과 두 개의 선택지가 표시되는 메인 페이지입니 사용자의 선택에 따라 질문을 순차적으로 진행한다.
`EndPage` : 모든 질문에 대한 답변이 완료되면 최종 MBTI 결과를 표시하는 화면이다.

#### 2. 주요 변수
`StartButton`, `ShowResultButton` : 각각 테스트 시작과 결과 확인을 위한 버튼 요소를 담는 변수
`QuestionText` , `Answer1Button` , `Answer2Button` : 질문과 선택지를 표시할 HTML 요소들을 변수로 할당
`ResultText` , `ResultImage` : 결과 페이지에서 최종 MBTI 유형과 해당 이미지를 표시할 요소

#### 3. 질문과 답변 배열
`questions` : 질문(question)과 그에 대한 두 개의 선택지(option) 및 MBTI 성향 유형 정보(type)를 포함한 배열
`answers` : 사용자가 선택한 답변을 순서대로 저장하여, 최종 결과를 계산할 때 사용된다.

#### 4. 함수

1. `ShowQuestion()`
기능 : 현재 질문을 화면에 표시한다.
- 작동 방식:
currentQuestionIndex 변수에 따라 questions 배열에서 이에 해당되는 객체를 가져온다.
QuestionText.innerText에 현재 질문 텍스트를 할당하고, Answer1Button과 Answer2Button에 각각 선택지 텍스트를 할당하여 화면에 표시한다.

2. `NextQuestion(answer)`
기능: 사용자가 선택한 답변을 저장하고, 다음 질문을 화면에 출력하거나 결과 페이지로 전환한다.

- 작동 방식:
매개변수 answer로 전달받은 사용자의 답변을 answers 배열에 저장한다.
currentQuestionIndex 값을 1 증가시켜 다음 질문을 준비한다.
currentQuestionIndex가 questions 배열 길이보다 작다면 ShowQuestion()을 호출하여 다음 질문을 출력하고, 모든 질문이 완료되면 Show_EndPage()와 CalcurateResult() 함수를 호출하여 결과 페이지를 출력한다.

3. `createImage(FinalResult)`
기능: 최종 MBTI 결과에 따라 해당 이미지를 결과 페이지에 출력한다.

- 작동 방식:
결과 페이지에서 기존 이미지가 있는 경우 제거하여, 중복 이미지가 나타나지 않도록 한다. `<img>` 요소를 생성하고 src 속성에 최종 결과와 연결된 이미지 파일 경로를 `템플릿 리터럴`로 설정한다. 생성된 이미지 요소를 결과 페이지에 추가하여 사용자에게 결과 이미지를 보여준다.

4. `CalcurateResult()`
기능: 사용자의 답변을 바탕으로 MBTI 유형을 계산한다.

- 작동 방식:
(1) Score 객체를 생성하여 각 성향 유형의 점수를 초기화한다.

(2) answers 배열을 `forEach`를 통해 순차적으로 순회하면서 동시에 type 변수에 question[index]를 할당하여 현재의 배열 위치에 맞춰 type도 순차적으로 진행된다.

(3) 위의 현재 type에 따라 현재의 배열에 저장된 답변을 조건문을 통해 해당 성향 유형(E/I, N/S, T/F, J/P)의 점수를 증가시킨다.

(4) 점수가 높은 성향에 따라 최종 MBTI 결과 문자열을 구성한다.

(5) ResultText 요소에 최종 MBTI 결과를 표시하고, createImage(FinalResult) 함수를 호출하여 결과에 맞는 이미지를 화면에 출력한다.

5. `Show_NextPage()`
기능: 시작 페이지에서 메인 질문 페이지로 이동하여 첫 번째 질문을 출력한다.

- 작동 방식: StartPage 요소에 hidden 클래스를 추가하여 시작 페이지를 숨기고, MainPage 요소에서는 hidden 클래스를 제거하여 질문 페이지가 표시되도록 한다.
ShowQuestion() 함수를 호출하여 첫 번째 질문을 화면에 출력한다.

#### 5. 이벤트 리스너 설정
StartButton 클릭 시 Show_NextPage() 함수가 실행되어 첫 번째 질문으로 이동한다.

Answer1Button 클릭 시 "option1" 문자열을 NextQuestion() 함수에 전달하여 해당 선택지가 선택되었음을 저장하고, 다음 질문으로 이동한다.

Answer2Button 클릭 시 "option2" 문자열을 NextQuestion() 함수에 전달하여 해당 선택지가 선택되었음을 저장하고, 다음 질문으로 이동한다.
