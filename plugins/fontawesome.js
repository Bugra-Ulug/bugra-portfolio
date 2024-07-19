// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faCircle, faCoffee, faEnvelope, faImage } from '@fortawesome/free-solid-svg-icons'


// Disable automatic adding of CSS
config.autoAddCss = false

// Add icons to the library
library.add(faHome, faUser, faCircle, faCoffee, faEnvelope,faImage)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
