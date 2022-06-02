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
