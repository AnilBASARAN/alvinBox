const Box=(props)=>{

    const {children}=props;
    
    const propMe=(obj)=>{
     let result = "";
      for(let key in obj){
        result += obj[key];
        result += " ";
      }
      return result;
    }


    return(
      <div className={propMe(props)}>
        {children}
      </div>
    );
  };
  
  export default Box;