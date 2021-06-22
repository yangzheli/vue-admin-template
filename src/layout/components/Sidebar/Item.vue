<script>
export default {
    functional: true,
    props: {
        iconClass: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render: function (h, context) {
        const { iconClass, title } = context.props
        const vnodes = []

        if (iconClass) {
            if (iconClass.includes('el-icon')) { vnodes.push(<i class={[iconClass, 'sub-el-icon']}></i>) } else vnodes.push(<svg-icon iconClass={iconClass}></svg-icon>)
        }

        if (title) vnodes.push(<span slot="title">{title}</span>)

        return vnodes
    }
}
</script>

<style lang="scss" scoped>
span {
  margin: 0 1rem;
}
</style>
