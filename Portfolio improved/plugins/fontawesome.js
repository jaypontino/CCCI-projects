import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faTwitter, faLinkedinIn, faGithub, faHome, faUser, faEnvelope)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
