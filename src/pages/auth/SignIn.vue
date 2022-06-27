<template>
  <div>
    <base-dialog :show="!!error" title="An error ocurred" @close="handleError">

      <p>{{error}}</p>
    </base-dialog>

    <section class="gradient-custom" style="background-color:#888888;; height:82%;">
      <div class="container py-5">
        <div class="row framerow justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Sign In</h3>
                <form @submit.prevent="submitLogin">

                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="email" aria-label="Email"
                          aria-describedby="basic-addon1" v-model.trim="email">

                      </div>



                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" aria-label="Password"
                          aria-describedby="basic-addon1" v-model.trim="password">
                      </div>

                    </div>
                  </div>



                  <div class="mt-4 pt-2">
                    <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
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
      email: null,
      password: null,
      isLoading:false,
      error:null
      

    }
  },
  methods: {

    async submitLogin() {
     
        try {
         
          await this.$store.dispatch('signin',{
            email: this.email,
            password: this.password
          }
          
          );

          }
          catch(err){

            this.error = new Error(err.message || 'Failed to authenticate, try later');
            throw this.error;

          }

      this.$router.replace('/cps');
    },

    handleError() {
      this.error = null;
    },
  }
}

  
</script>


<style scoped>


.card {
    background-color: #888888;
     margin-bottom: 13rem;
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

</style>