/*
 * Phenix Blocks Documentation
 * Version  : 1.0
 * License  : MIT
 * Copyright: 2025 Phenix Design System
*/

//====> Import Modules <====//
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import PhenixDemo from './components/PhenixDemo.vue'

//====> Export Theme Configuration <====//
export default {
    //====> Extend Default Theme <====//
    ...DefaultTheme,

    //====> Enhance Vue App <====//
    enhanceApp({ app, router }) {
        //====> Register Global Components <====//
        app.component('PhenixDemo', PhenixDemo)
    },

    //====> Setup Theme Functionality <====//
    setup() {
        //====> Get Current Route <====//
        const route = useRoute()
        
        //====> Initialize Phenix on Page Load <====//
        onMounted(() => {
            //====> Check if Phenix is Loaded <====//
            if (window.Phenix) console.log('Phenix JS initialized')
        })

        //====> Handle Route Changes <====//
        watch(() => route.path, async () => {
            //====> Wait for DOM Update <====//
            await nextTick()
            //====> Re-Initialize Phenix Components <====//
            if (window.Phenix) console.log('Phenix JS re-initialized after route change')
        })
    }
}
