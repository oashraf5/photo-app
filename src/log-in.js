
import React from 'react'





export login ={
        login:true,
        userName:'blah';
        password:'bleh';
      }
  
    submitButton  => {
    <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '} //https://react-bootstrap.github.io/components/buttons/
      }
    
    render() {
      return (
       
        <label>login username</label>
        <input 
          
            placeholder="login" 
            name="user!" 
            value={this.state.user!} 
            />
      
   
        <label>Pass</label>
        <input 
          
            placeholder="Pass" 
            name="pass!"
            value={this.state.pass!} 
           />
        
  
        <button onClick={this.handleClick}  type="submit">
          Login   
        </button>
  
        </form>
  
      );
    }
  }
  



