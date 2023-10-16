import { Component } from "react";
class age extends Component{
    constructor(props){
        super(props);
        this.state={age:null,selectedDate:""};
    }
    handleChange=(event)=>{
        this.setState({
            selectedDate:event.target.value
        });
    };
    calculateAge=()=>{
        const {selectedDate}=this.state;
        const d=new Date(selectedDate);
        const today=new Date();
        const a=today.getFullYear()-d.getFullYear();
        this.setState({
            age:a 
        });
    };
    render(){
        return(
            <center>
                <div>
                    <div style={{width:"30%",marginTop:"10%"}} id="main" class="text-center border shadow pt-5 py-5">
                        <h1 ><b>Age calculator</b></h1>
                        <h5>Enter your date of birth</h5>
                        <input onChange={this.handleChange} style={{width:"40%", marginLeft:"2%"}} type="date" id="d" class="text-center" /><br></br>
                        <br></br>
                        <button onClick={this.calculateAge} style={{width:"30%"}} class="text-center btn btn-primary text-light">Calculate Age</button>
                        {this.state.age!==null &&(<h2>You are {this.state.age} years old. </h2>)}
                    </div>
                </div>
            </center> 
        )
    }

}
export default age;