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

## 5. Query Cache
1) 캐시를 이해하는 것은 매우 중요하다. 
2) apollo client와 마찬가지로 기본적으로 캐시처리되어 있기 때문에 데이터를 일일히 로딩하지 않는다. (5분 정도 캐싱된다?) -> 지정한 쿼리키로 유니크처리되서 저장된다. 
3) 캐시타임은 기본적으로 5분인데 3번째 인자에 cacheTime으로 캐시 저장 시간을 설정할 수 있다. 
4) cacheTime이 지나면 카비지 콜렉터로 수집된다. 

## 6. Stale Time
1) 3번째 인자값으로 staleTime 값을 주면 fresh -> stale 상태로 변경되는데 걸리는 시간 
2) fresh 상태일때는 쿼리 인스턴스가 새롭게 mount 되어도 네트워크 fetch가 일어나지 않는다. 
3) 데이터가 한번 fetch 되고 나서 staleTime이 지나지 않았다면 unmount 후 mount되어도 fetch가 일어나지 않는다. 
4) 확실히 db값을 바꿔도 staleTime값을 많이주면 바로바로 업데이트되지 않는다. (stale time의 기본값은 0이다.)

## 7. Refetch Defaults
1) useQuery는 cacheTime, staleTime과 더불어 2개의 기본값이 더 제공된다.
2) refetchOnMount: 기본값은 true, 데이터가 stale 상태일 경우 마운트 시 마다 refetch를 실행하는 옵션, "always"로 설정하면 마운트 시 마다 매번 refetch를 실행한다. 
3) refetchOnWindowFocus : 기본값은 true, -> 윈도우 창이 focus될때면 refetch된다. 

## 8. Polling 
1) refetchInterval 옵션을 이용하면 지정한 시간마다 자동으로 쿼리를 가져온다. 
2) devTool에서 확인하면 계속 fetching과 stale를 왔다갔다 하는 것을 볼 수 있다. 
3) 단 윈도우 focus가 안되어 있으면 값을 실행안하는데 refetchIntervalInBackground를 true로 설정하면 포커스가 없을 때도 계속 데이터를 가져온다. 

## 9. useQuery on Click 
1) 세번째 인자값으로 enable: false를 주면 마운트 시 가져오기가 비활성화 되므로 데이터가 출력되지 않는다. 
2) 영상에서는 onClick에 그냥 refetch를 넣었는데 이렇게 하면 ts에서는 에러가 나와서 따로 state를 선언해야 했다. 

## 10. Success and Error Callbacks 
1) onSuccess랑 onError로 하면 됨. 
2) apollo client에서는 onCompleted 였음. 
3) 쿼리는 오류 발생 시 콜백을 호출하기 전에 세번까지 재시도를 함. 

## 11. Data Transformation 
1) select 옵션을 통해서 구조화되지 않은 배열을 구조화할 수 있다. 
2) 따라서 데이터 필터링에 쓸 수 있다. 

## 12. Custom Query Hooks 
1) Hooks 폴더에 넣고 저장하면 onSuccess, onError랑 바꿔가면서 쓰면 되서 편리하다. 

## 13. Query by Id 
1) query로 인자값 넘길려면 첫번째 인자를 배열로 하면 된다. 그리고 값넘겨주고 나머지는 axios로 촤라락

## 14. Parallel Queries 
1) 단일 컴포넌트가 여러 쿼리를 요청할 때 쓰는 것 
2) useQuery 두번 요청한 후 각각 data 고유 값을 넣어주고 2개 다 출력해줄 수 있음. 

## 15. Dynamic Parallel Queries 
1) useQuries를 사용해서 쿼리를 두번 호출할 수 있음.

## 16. Dependent Queries 
1) 종속 쿼리를 처리할 때 사용됨. 
2) enabled를 이용해서 !!channelId 이런식으로 넣어서 종속성있는 데이터를 가져올 수 있음. 


## 17. Paginated Queries 
1) pagination 강의는 json server 관련된 내용이여서 걍 axios에 적절한 값만 넣어줘서 요청하면 될듯 
2) 그리고 새로운 요청을 하면 그전 데이터가 사라지는데 여기서 keepPreviousData : true로 설정하면 마지막 data값을 유지하므로 화면의 목록이 사라지는 깜빡임 현상을 방지할 수 있다. 
3) 따라서 파지네이션할 때 필수로 true로 해줘야 한다. 

## 18. Infinite Queries 
1) 일단 useQuery대신에 useInfiniteQuery를 써야하는데 코드가 복잡해 지니 예시 코드 보면서 추후 참고하여 작성하면 될 듯 