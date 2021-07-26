import React from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form'
import CustomButton from '../customButton/CustomButton'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password:''
        }
    }

     handleSubmit= e=>{
        e.preventDefault();

        this.state.email='';
        this.state.password=''
    }

    handleChange=e=>{
        const {value, name}= e;
        this.setState({[name]:value})
    }

    render(){
        return(
            <>
            <div className='sign-in'>
                <h3> I already have an account</h3>
                <span>Sign in using Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type='email' name='email' value={this.state.email} label='Email' required/>
                    
                    <FormInput handleChange={this.handleChange} type='password' name='password' value={this.state.password} label='password' required/>
                    

                    <CustomButton type='submit'> Sign In</CustomButton>
                </form>
            </div>
            </>
        )
    }
}
export default SignIn;