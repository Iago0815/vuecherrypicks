export default {


async loadSections(context) {

     const userId = context.getters.userId;
      const token = context.getters.token;


     const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/sections/${userId}.json?auth=`+token)

      const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Failed to fetch!');
      throw error;
    }

    const sections = [];

    for(const key in data) {

    const section = {

        id:key,
        text:data[key].sectionText

      };

      sections.push(section)


    }

    context.commit('setSections',sections);
  },

  //current section is set by displayCurretnCP in AccordionCherryPicks.vue
  // the headline of the current section can be shown within cherrypicks.vue

  setCurrentSection(context,payload) {

    const sections = context.state.sections;
    const currentSec = sections.filter((sec) => sec.id == payload.value);



    context.commit('setCurrentSection',currentSec);

    },

    async newSection(context,payload) {

        const data = payload;
        const userId = context.rootGetters.userId;
      //  const timestamp = (new Date()).getTime();

         const token = context.rootGetters.token;

        const newSection = {sectionText: data.value,

        }

        const response = await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/sections/${userId}.json?auth=`+token,{method:'POST',
        body:JSON.stringify(newSection)
      });


      const res = await response.json();

      if(!res.ok) {
        //do nothing

      } else {
        return res.json();
      }


        context.commit('newSection',data)
    },

    async deleteSection(context,payload) {

        const userId = context.rootGetters.userId;
          const mysection = payload.value;

           const token = context.rootGetters.token;

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

    console.log(cps);

    var allCPsofSection = []

    allCPsofSection = cps.filter(cp => cp.section_id == mysection);
    
    if(allCPsofSection.length > 0) {

      alert("Please delete all CPs before you delete the section");
    }

    else {


               await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/sections/${userId}/${mysection}.json?auth=`+token,{method:'DELETE',

        });

      context.commit('deleteSection',mysection)



    }

     
     


     
      //        await fetch(`https://vuecherrypicks-default-rtdb.europe-west1.firebasedatabase.app/cps/${userId}.json?section_id=${mysection}`,{method:'DELETE',

      //  });





       
    }



}