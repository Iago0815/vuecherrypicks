import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {

    state() {

        return {

            newCP: false,

            currentCP: [ 
              
              { 
                  id: null,  
                  headline: null,
                  body: null,
                  section_id: null,
                  updated: null,
                  newdate:null
                   
                }],

            cherrypicks: [

                { 
                  newdate: 1650062796251,  
                  headline: "German G: Wallet explanation",
                  body: "Der Betrag von {amount} wurde Ihnen am {date} auf Ihr Booking Wallet gutgeschrieben. Sie finden Ihr Wallet wenn Sie sich in Ihr Booking.com Kundenkonto einloggen. <br/> Die Gutschrift können Sie für künftige Reservierungen nutzen, oder auf Ihr Konto auszahlen lassen.",
                  section_id: 1,
                  updated: 1650062830098 
                },
                 { 
                     
                  newdate: 1650062796252,  
                  headline: "Wallet Link",
                  body: "https://secure.booking.com/myboogkinpay/overview.de.html",
                  section_id: 1,
                  updated: 1650062830098

                 },

                 {
                  id: 1650062796254,  
                  headline: "ask G for invoice / WPM",
                  body: "Bitte fotografieren Sie die Rechnung, und senden Sie diese per Email an uns zurück. Wir benötigen die Rechnung damit sichergestellt ist, dass Sie in der Unterkunft waren.",
                  section_id: 2,
                  updated: 1650062830098
                  
                 },

                  {
                  id: 1650062796255,  
                  headline: "(G)(G) WPM info",
                  body: "Vielen Dank für Ihre Anfrage. Bitte senden Sie einen Link zum Alternativangebot, auch ein Screenshot ist möglich. Bitte bedenken Sie, dass das Alternativangebot die gleiche Unterkunft handeln muss.",
                  section_id: 2,
                  updated: 1650062830098
                  
                 },

                 {
                  id: 1650062796256,  
                  headline: "WPM, does G have screenshot, link to better offerin/price",
                  body: "Vielen Dank für Ihre offenen Worte. Haben Sie einen Screenshot oder einen Link zu dem besserne Preis? Gerne helfen wir Ihnen hier weiter.",
                  section_id: 2,
                  updated: 1650062830098

                 },

                 {
                  id: 1650062796257,  
                  headline: "GERMAN (G). I asked P to confirm the new dates",
                  body: "Ich habe die Unterkunft gebeten uns nochmals die veränderten Daten zu bestätigen. Wir melden uns in kürze.",
                  section_id: 3,
                   updated: 1650062830098

                 },

                 {
                  id: 1650062796258,  
                  headline: "ADMIN: new dates (04-04 until 05-04)",
                  body: " new dates (..-.. until ..-..)",
                  section_id: 3
                  , updated: 1650062830098

                 },

                  {
                  id: 1650062796259,  
                  headline: "Admin notes: for G - change dates request for P",
                  body: "* Reason for contacting: G is informed that CS asked P if a modification / change dates was possible",
                  section_id: 3,
                   updated: 1650062830098

                 }
                
            ],

        }

    },
    mutations,
    actions,
    getters

}