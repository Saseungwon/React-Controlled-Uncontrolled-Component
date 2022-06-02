## Controlled Component & Uncontrolled Component

#### 상태를 가지고 있는 엘리먼트

- input
- select
- textarea

엘리먼트의 상태를 누가 관리하느냐에 따라

- Controlled : 엘리먼트가 가지고 있는 컴포넌트가 관리
- Uncontrolled : 엘리먼트의 상태를 관리하지 않고, 엘리먼트의 참조만 컴포넌트가 소유

#### ControlledComponent.jsx

```jsx
import React from "react";

class ControlledComponent extends React.Component {
  state = {
    value: "",
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  change = (e) => {
    //console.log(e.target.value);

    // 바뀐 값을 넣으려면 다시 렌더해줘야 한다.
    this.setState({ value: e.target.value });
  };

  click = () => {
    // input에 넣은 텍스트 보내기
    console.log(this.state.value);
  };
}

export default ControlledComponent;
```

#### UncontrolledComponent.jsx

React에서 지향하는 방법 : Ref에서 가지고 있다가 사용함 **inputRef = React.createRef();**
React에서 지양하는 방식 : 실제 DOM에 접근해서 사용

```jsx
import React from "react";

class UncontrolledComponent extends React.Component {
  // React에서 지향하는 방법 : Ref에서 가지고 있다가 사용함
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        {/* <input id="my-input" /> */}
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  conponentDidMount() {
    console.log("conponentDidMount", this.inputRef);
  }

  click = () => {
    // React에서 지양하는 방식 : 실제 DOM에 접근해서 사용
    // input 엘리먼트의 현재 상태값을 꺼내서 전송하기
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    // React에서 지향하는 방식 : 필요할 때만 꺼내쓸 수 있다.
    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
```

#### App.js

```js
import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UncontrolledComponent />
      </header>
    </div>
  );
}

export default App;
```
