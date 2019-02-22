import {AbstractControl, FormGroup} from '@angular/forms';
export function symbolValidator(el: AbstractControl){
    //return an object if ther is error(is ther is no @ symbol used in the password)
   if(el.hasError('required')) return null;
    if(el.value.indexOf('@')===-1){
      return {
        symbol:true
      }
    }
    // return null if there is no error(if there is an @ symbol used in the password)
  return null;
  }
  export function passwordMatch(form:FormGroup){
      const password= form.get('password');
      const confirmpassword=form.get('confirmPassword');
      if(password.value==confirmpassword.value){
          confirmpassword.setErrors(null);
          }
          else{
              confirmpassword.setErrors({
                  passwordMatch:true
              })
          }
          return null;
        }