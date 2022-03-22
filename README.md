# Learn-react-query 

link : https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=1

## 1. Project Setup 
별 내용 없고 그냥 axios 써서 전통적으로 어떻게 데이터를 받았는 지에 대해서 설명함. 

## 2. 
1) react-query를 설치하고 반응형 쿼리를 연결해줘야 한다. 
2) App에 QueryClientProvider를 연결하면 반응 쿼리가 제공하는 모든 훅 및 메서드에 엑세스 가능 
3) 이제 query로 db에서 데이터를 가져오려면 반응 쿼리에서 후크를 가져와야 한다. 
4) 사용법은 RQSuperHeores.page.tsx 파일에 정의되어 있음. 
5) 그냥 에로우 펑션을 2번째 파라미터 값으로 넣어도 되고 아니면 fetch 인자를 따로 정의해서 넣어도 되는 데 그게 더 깔끔한 거 같다. 

## 3. 
1) 근데 typescript로 하니깐 error.message를 출력하지를 못했다.(근데 콘솔에는 잘 나온다.) 물론 사용자에게 그대로 보여줄리 없을 테니 그냥 패스 

## 4. 
1) react-query는 관련된 모든 내부 작업을 시각화하는 데 도움이 되는 devtools를 지원한다. 
2) 특이한 점은 App.tsx 파일에서 따로 선언해 줘야 하는 거 <ReactQueryDevtools> <- 이 부분 
3) Devtools 살펴보면 Data Explorer를 많이 살펴볼 듯 
