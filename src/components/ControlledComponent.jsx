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
