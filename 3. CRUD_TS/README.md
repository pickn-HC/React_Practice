# TypeScript 학습

## TypeScript가 적용된 코드 폴더 생성
```npx create-react-app my-app --template typescript```


## 각 변수에 Data Type 설정
- 한 변수에 data type 설정\
   ```const {variable_name}: {data_type} = {initial_value}```
- 배열에 data type 설정\
   ```const {array_name}: Array<{data_type} = {initial_value}```
- 객체에 data type 설정
   ```
    interface SubjectType {
        title: string;
        sub: string;
    }

    const Subject: SubjectType[] = [{ title: "WEB", sub: "World Wide Web!" }];
    ```
