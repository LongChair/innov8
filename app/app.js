import React from 'react';
import ReactDOM from 'react-dom';
 
//import JqxGauge from '../node_modules/jqwidgets-framework/jqwidgets-react/react_jqxgauge.js';
import JqxGauge from 'jqwidgets-framework/jqwidgets-react/react_jqxgauge.js';

class Gauge extends React.Component {

    handleUp() {
        this.refs.gauge.val(this.refs.gauge.val() +1)
    }
    handleDown() {
        this.refs.gauge.val(this.refs.gauge.val() -1)
    }

    render() {
        let ranges =
        [
            { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
            { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
            { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
            { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
        ];
        return (
            <div>
            <JqxGauge ref='gauge'
                width={500} height={500} value={this.props.value}
                ranges={ranges} colorScheme={'scheme05'}
            />
            <button onClick={() => this.handleUp()}>
            Up
            </button>
            <button onClick={() => this.handleDown()}>
            Down
            </button>
            </div>
        )
    }
    
   
}

class App extends React.Component {

  handleclick() {
      alert('click');
  }  

  render () {
    return (
        <div onclick={() => this.handleclick()} >
        <Gauge value="100"/>
        <Gauge value="150"/>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

