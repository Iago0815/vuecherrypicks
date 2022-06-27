export default {

  async loadCPs(context) {

     const userId = context.getters.userId;
      const token = context.getters.token;

     const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}.json?auth=`+token)

      const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Failed to fetch!');
      throw error;
    }

    const cps = [];

    for(const key in data) {

    const cp = {

        id:key,
        headline:data[key].headline,
        body:data[key].body,
        section_id:data[key].section_id,
        newdate:data[key].newdate,
        updated:data[key].updated
      };

      cps.push(cp)
    }


    context.commit('setCPs',cps);

    


  },

  async loadOneCP(context) {

     const userId = context.getters.userId;
    // const secId = context.getters.getCurrentSection;
     const token = context.getters.token;

     const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}.json?auth=`+token, {method:'GET',
       
      })

      const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Failed to fetch!');
      throw error;
    }
      
    const cps = [];

        for(const key in data) {

    const cp = {

        id:key,
        headline:data[key].headline,
        body:data[key].body,
        section_id:data[key].section_id,
        newdate:data[key].newdate,
        updated:data[key].updated
      };

      cps.push(cp)
    }

    
    //CHECK THIS!!!
    // var allCPsofSection = []

    // allCPsofSection = cps.filter(cp => cp.section_id == secId);
    
    // console.log(allCPsofSection);


  },

   getCurrentCP(context,payload) {

     const cps = context.state.cherrypicks;
     const currentCP = cps.filter((cp) => cp.id == payload.value);   

     context.commit('getCurrentCP',currentCP)

   },

    newCP(context,payload) {

        context.commit('newCP',payload);


    },

    async addNewCP(context,payload) {

      const userId = context.rootGetters.userId;
      const token = context.rootGetters.token;

      const timestamp = (new Date()).getTime();
      

      const newCP = {

            headline: payload.newCPHeadline,
            body: payload.newCPText,
            section_id: payload.secID,
            updated: timestamp,
            newdate: timestamp

      }

      const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}.json?auth=`+token,{method:'POST',
      
        body:JSON.stringify(newCP)
      });


      const res = await response.json();

      if(!res.ok) {
        //do nothing
        
      } else {
        return res.json();
      }


      context.commit('addNewCP', {...newCP})
    },

    async updateCP(context,{id,updatedHeadline,updatedText}) {

       const userId = context.rootGetters.userId;      

      const objIndex = context.state.cherrypicks.findIndex(cp => cp.id == id);
      const uphd = updatedHeadline;
      const uptx = updatedText
      const token = context.getters.token;

      const timestamp = (new Date()).getTime();


          const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}/${id}.json?auth=`+token,{method:'PATCH',
      
        body:JSON.stringify({
            body:uptx,
            headline:uphd,
            updated:timestamp

        })
      });


      const res = await response.json();

      if(!res.ok) {
        //do nothing
        
      } else {
        return res.json();
      }

        

      context.commit('updateCP',{objIndex:objIndex,uphd:uphd,uptx:uptx,timestamp:timestamp})

     
    },

    // DELETE CP: https://stackoverflow.com/questions/68333644/how-can-i-delete-some-data-from-firebase-realtime-database

    async deleteCP(context,payload) {

       const myid = payload.id;
       const userId = context.rootGetters.userId;
       const token = context.rootGetters.token;

         const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}/${myid}.json?auth=`+token,{method:'DELETE',
      
       
      });


      const res = await response.json();

      if(!res.ok) {
        //do nothing
        
      } else {
        return res.json();
      }



       context.commit('deleteCP',myid)

    }








}