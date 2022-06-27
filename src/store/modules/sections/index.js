import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {

    state() {

        return {
                currentSection: [{
                    id:1,
                    text: "WALLET",
                   

                }],


                sections: [

                {
                    id:1,
                    text: "WALLET"
                }
                ,
                 {
                    id:2,
                    text: "WPM"
                },
                 {
                    id:3,
                    text: "MODIFICATION: CHANGE DATES"

                }
                
            ]
        }

    },
    mutations,
    actions,
    getters

}