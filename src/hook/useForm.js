import {useState} from 'react';

function useForm(callback,defaults){


    const [inputs,setInputs] =useState(defaults)


const handleSubmit = (event) =>{
    event.preventDefault();
    callback(inputs)
}

    const handleInputChange = (event) =>{ // se uso para jalar la info de cada input
        
        const{name,value} = event.target; 

        setInputs({...inputs,[name]:value})
    
    }
    return{ 
        inputs,
        handleInputChange,
        handleSubmit,
    }
}

export default useForm;
