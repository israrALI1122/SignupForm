
const validation = (values) => {
    const errors= {};
    if(!values.fullName){
        errors.fullName="name is required"
    }
    if(!values.email){
        errors.email="email is required"
    }else if(!/^\S+@\S+\.\S+$/.test(values.email)){
        errors.email="email is required"
    }
    if(!values.password){
        errors.password="password is required"
    }else if(values.password.length < 5){
        errors.password="password must be more then five character"
    }
  return errors;
}

export default validation