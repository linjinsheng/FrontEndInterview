import React, {Component} from 'react'

class Sync extends Component {
  state = {
    num: 0
  }

  //  https://www.bilibili.com/video/BV1yb4y1i7rP?spm_id_from=333.337.search-card.all.click&vd_source=7f0b239b468644acab41441987770602
  onClick = () => {
    console.log('更新前, num:', this.state.num);
    setTimeout(()=>{
      this.setState({
        num: this.state.num + 1
      })
      console.log('更新后, num:', this.state.num);
    }, 1000);
  }

  render() {
    const {num} = this.state;
    return (
      <div>
        <p>{num}</p>
        <button onClick={this.onClick}>+1</button>
      </div>
    );
  }
}

export default Sync
