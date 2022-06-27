<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred" @close="handleError">

      <p>{{error}}</p>
    </base-dialog>
    <base-dialog :show="success" title="Success" @close="handleSuccess" >

      <p>New user was created</p>
    </base-dialog>

    <section class="gradient-custom" style="background-color:#888888; height:82%;">
      <div class="container py-5">
        <div class="row framerow justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form @submit.prevent="validateForm">
                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" id="name" aria-label="Name"
                          aria-describedby="basic-addon1" v-model.trim="form.name.val" />


                      </div>
                      <b class="errorMessage" v-if="!nameIsValid">{{form.name.nameVoid}}</b>

                    </div>
                    <div class="col-md-6 mb-4">

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>

                        <input type="text" class="form-control" placeholder="Username" id="uname" aria-label="Username"
                          aria-describedby="basic-addon1" v-model.trim="form.uname.val" />

                      </div>

                      <b class="errorMessage" v-if="!unameIsValid">{{form.uname.unameVoid}}</b>



                    </div>
                  </div>

                  <div class="row">

                    <div class="col-md-6 mb-4">

                      <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" aria-label="Password"
                          aria-describedby="basic-addon1" v-model.trim="form.pwd.val">

                      </div>
                      <b class="errorMessage" v-if="!pwdIsValid">{{form.pwd.pwdVoid}}</b>
                      <p class="errorMessage" v-else-if="!pwdIsCorrect">{{form.pwd.pwdInvalid}}</p>

                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="email" aria-label="Email"
                          aria-describedby="basic-addon1" v-model.trim="form.email.val">

                      </div>
                      <b class="errorMessage" v-if="!emailIsValid">{{form.email.emailVoid}}</b>
                      <b class="errorMessage" v-else-if="!emailIsCorrect">{{form.email.emailIncorrect}}</b>




                    </div>

                  </div>


                  <div class="row">

                    <div class="col-md-6 mb-4">
                      <h6 class="mb-2 pb-1">Gender: </h6>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="female" v-model="form.gender.val" checked />
                        <label class="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="male" v-model="form.gender.val" />
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="other" v-model="form.gender.val" />
                        <label class="form-check-label" for="otherGender">Other</label>
                      </div>


                    </div>
                    <div class="col-md-6 mb-4">

                      <label class="form-label select-label">Language &puncsp;</label>




                      <select v-model="form.language.selected">
                        <option v-for="option in form.language.options" :value="option.value" :key="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                      <span>&nbsp; {{ form.language.selected }}</span>

                    </div>


                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>



                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {

  data() {
    return {
      form: {
      name: {
        val: null,  
        nameVoid: "Please enter a name."    
      },
       uname: {
        val: null,   
         unameVoid: "Please enter a username."   
      },

      pwd: {
        val: null,
        pwdVoid:"Please enter a password.",
        regPwd: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        pwdInvalid: "The password must at least have 8 characters in length, contain one number and one special character. (@$!%*#?&)"
      },

       email: {
        val: null,
        emailVoid:"Please enter your email address.",
        regEmail: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
        emailIncorrect: "Email address is not valid."      
      },
      gender: {
        val: "female"
      },
      language: {
        selected: 'EN',
        options: [
          { text: 'English', value: 'EN' },
          { text: 'German', value: 'DE' },
          { text: 'Spanish', value: 'ES' },
          { text: 'French', value: 'FR' }
        ]
      }     

    },
     dataSubmittedOk: false,
        nameIsValid: true,
        unameIsValid: true,
        pwdIsValid:true,
        pwdIsCorrect:true,
        emailIsValid: true,
        emailIsCorrect: true,
        error:null,
        success:null
       
  } 
  },
  methods: {

      validateForm() {

       this.nameIsValid = !!this.form.name.val;
       this.unameIsValid = !!this.form.uname.val;
       this.pwdIsValid = !!this.form.pwd.val;
       this.pwdIsCorrect = this.validatePwd(this.form.pwd.val)
       this.emailIsValid = !!this.form.email.val;
        this.emailIsCorrect = this.validateEmail(this.form.email.val);
     

      const formIsValid = this.nameIsValid && this.unameIsValid && this.pwdIsValid && this.pwdIsCorrect && this.emailIsValid && this.emailIsCorrect;

     
      if(formIsValid) {
         if(this.submitForm()) { 

          console.log(this.error);


          // this.$store.dispatch("logout");

          // this.$router.replace('/signin');
         }
      }

      },
      validateEmail(value) {
        return (this.form.email.regEmail.test(value)) },


      validatePwd(value) {
        return (this.form.pwd.regPwd.test(value))
      
       },
        
        
       async submitForm() {

        try {
        await this.$store.dispatch('signup', {
            email: this.form.email.val,
            password: this.form.pwd.val,
            name:this.form.name.val,
            uname:this.form.uname.val,
            gender:this.form.gender.val,
            language:this.form.language.selected
           
          }
          );

          this.success = true;
        }
        catch (err) {

          this.error = new Error(err.message || 'Failed to authenticate.');
          throw this.error;
          
        }

        
    },
      handleError() {
        this.error = null;
      },

      handleSuccess() {
        this.success = null;

           this.$store.dispatch("logout");

           this.$router.replace('/signin');
      }


  }
}

  


  
</script>


<style scoped>



.card {
    background-color: #888888;
      margin-bottom: 3rem;
}

.container {
    background-image: url("../../assets/unsplash_background.jpg");
    background-size: cover;
    
     
}
  
.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .75em;
padding-right: .75em;
}
.card-registration .select-arrow {
top: 13px;
}

 b.errorMessage,p.errorMessage {

  background-color:#dc3545;
  padding: 5px 5px;
  border-radius: 25px;
  font-weight: bold;
  }

</style>