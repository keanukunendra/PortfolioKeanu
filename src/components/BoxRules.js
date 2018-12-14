import React, { Component } from 'react';
import axios from 'axios';

class BoxRules extends Component {

  state = {
    iconRules: [],
    hover: false
  }

  componentDidMount (){
    axios.get('http://staging-krama.herokuapp.com/api/v1/rules')
    .then(res => {
        const iconRules = res.data.slice(2, 6);
        this.setState({iconRules});
        console.log(res.data);
    })
  }

  hoverOn = (i) => {
    this.setState ({hover:i})
    console.log(i)
  }

  hoverOff = () => {
    this.setState ({hover: false})
  }
  
  render () {
    return (
      <div>
        
          <div className="box-rules-flex">
          <div className="box-rules">
            <div className="box-rules-title">What you should know</div>
            <div className="icon-flex">    
              {this.state.iconRules.map ((iconRule, index) =>
                <i className= {iconRule.img} alt={iconRule.desc} onMouseOver={()=>this.hoverOn(index)} onMouseOut={this.hoverOff}></i>                            
              )}
            </div>

            <div className="icon-rules-line">
              {this.state.iconRules.map ((iconRule, index) =>
                <p>{this.state.hover === index ? iconRule.desc : ""}</p>
              )}
            </div>
            
            <p>{this.state.hover === false ? "Hover the icon to see the rules" : ""}</p>
            
          </div>
          </div>
        
      </div>
    )
  }
}
  // state = {
  //   descRules: 'Hover the icon so you could see rules here :)'
  //   }
  

  // RulesShirt = () => {
  //   return (
  //     this.setState({
  //       descRules: 'Berpakaian yang sopan dan menutup aurat. Hindari menggunakan pakaian yang berwarna merah'
  //     })
  //   );
  // } 
  
  // RulesTrash = () => {
  //   return (
  //     this.setState({
  //       descRules: 'Dilarang membuang sampah sembarangan. Pisahkan antara sampah Organik dan Non-Organik' 
  //     })
  //   );
  // }
  
  // RulesSmiley = () => {
  //   return (
  //     this.setState({
  //       descRules: 'Hindari berbicara kasar atau tidak sopan'
  //     })
  //   );
  // }
  
  // RulesCamera = () => {
  //   return (
  //     this.setState({
  //       descRules: 'Dilarang mengambil gambar pada area area tertentu'
  //     })
  //   );
  // }

  // RulesMouseOver = () => {
  //   return (
  //     this.setState({
  //       descRules: 'Hover the icon so you could see rules here :)'
  //     })
  //   );
  // }

  // render (){
  //   return (
  //     <div className="box-rules-flex">
  //     <div className="box-rules">
  //       <div className="box-rules-title">What you should know</div>

  //       <div className="icon-flex" onMouseOut={this.RulesMouseOver}>    
  //           <i className='bx bx-t-shirt bx-sm bx-border box-hover-blue box-rules-icon' onMouseOver={this.RulesShirt}></i>
  //           <i className='bx bx-trash bx-sm bx-border box-hover-blue box-rules-icon' onMouseOver={this.RulesTrash}></i>
  //           <i className='bx bx-smiley-happy bx-sm bx-border box-hover-blue box-rules-icon' onMouseOver={this.RulesSmiley}></i>
  //           <i className='bx bx-camera-off bx-sm bx-border box-hover-red box-rules-icon' onMouseOver={this.RulesCamera}></i>
  //       </div>
      
  //       <div>
  //           <p>{this.state.descRules}</p>
  //       </div>
  //     </div>
  //     </div>
  //   );  
  // }


export default BoxRules;
