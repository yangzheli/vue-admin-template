import store from '@/store/index.js'

const {
    body
} = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
    watch: {
        $route: function(route) {
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('app/closeSideBar', {
                    withoutAnimation: false
                })
            }
        }
    },
    beforeMount: function() {
        window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy: function() {
        window.removeEventListener('resize', this.$_resizeHandler)
    },
    mounted: function() {
        const isMobile = this.$_isMobile()
        if (isMobile) {
            store.dispatch('app/toggleDevice', 'mobile')
            store.dispatch('app/closeSideBar', {
                withoutAnimation: true
            })
        }
    },
    methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
        $_isMobile: function() {
            const rect = body.getBoundingClientRect()
            return rect.width <= WIDTH
        },
        $_resizeHandler: function() {
            const isMobile = this.$_isMobile()
            store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

            if (isMobile) {
                store.dispatch('app/closeSideBar', {
                    withoutAnimation: true
                })
            }
        }
    }
}
