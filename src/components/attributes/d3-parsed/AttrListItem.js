import React, { Component } from 'react';
//
// As soon as we have the attribute object parsed the code commented out below is
// the over layout and styling.

class AttrListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  handleCheckbox(event) {
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  render() {

    let info = this.props.info;
    let updateValue = this.props.updateValue;

    let attributesDisplay = <div className="attr-display"></div>

    const nest = info.map(x => {
      return (
        <div className="input-group" key={x.id}>
          <div className="input-container" >
            <label style={{display: "inline"}}>
              {x.name ? x.name : x.type !== 'hidden' ? x.d3MethodName : null}
              <input className="form-control parsed-input" type={x.type} value={x.value} onChange={(e) => updateValue(x.id, e.target.value)} />
            </label>
          </div>
        </div>
      );
    });

    if (this.state.checkbox) {
      attributesDisplay = <div className="attr-display">
        {nest}
      </div>
      {/* //         <div className="input-group">
//           <div className="input-container">
//             <label>
//               width
//               <input type="number" className="form-control" onChange={this.updateWidth} />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               width
//               <input type="number" className="form-control" onChange={this.updateWidth} />
//             </label>
//           </div>
//         </div>
//         <div className="input-group">
//           <div className="input-container">
//             <label>
//               width
//               <input type="number" className="form-control" onChange={this.updateWidth} />
//             </label>
//           </div>
//           <div className="input-container">
//             <label>
//               width
//               <input type="number" className="form-control" onChange={this.updateWidth} />
//             </label>
//           </div>
//         </div>
//       </div> */}
    }
    //
    return (
      <div className="attr-container">
        <div onClick={this.handleCheckbox} checked={this.state.checkbox}>
          <h5 className="panel-headers">{info[0].methodObject}{info[0].d3MethodName}</h5>
        </div>
        {attributesDisplay}
      </div>
    );
  }
}

// const AttrListItem = ({info, updateValue}) => {
//   return (
//       <div>
//         <div className="attr-container">
//           <div className="parsed-header">
//             <h5 className="panel-headers parsed-method-obj">{info.methodObject}</h5>
//             <h5 className="panel-headers parsed-method-name">{info.d3MethodName}</h5>
//           </div>
//           <div className="parser-input">
//             <label>
//               {'(' + info.name}
//               <input className="form-control parsed-input" type={info.type} value={info.value} onChange={(e) => updateValue(info.id, e.target.value)} />
//               {')'}
//             </label>
//           </div>
//           <hr className="parser-hr" />
//         </div>
//       </div>
//   );
// };

export default AttrListItem;
