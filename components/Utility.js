var Util = {
    getClasses: function(attrs) {
        const classes = []
        
        if (attrs.is) {
            var isClasses = attrs.is.split(" ")
            isClasses.map((isClass) => {
                classes.push(`is-${isClass}`)
            })
        }

        if (attrs.color) {
            classes.push(`has-text-${attrs.text}`)
        }

        if (attrs.background) {
            classes.push(`has-background-${attrs.background}`)
        }

        if (attrs.align) {
            classes.push(`has-text-${attrs.align}`)
        }

        if (attrs.weight) {
            classes.push(`has-text-weight-${attrs.weight}`)
        }

        if (attrs.margin) {
            if (typeof(attrs.margin) == "string") { classes.push(`m-${attrs.margin}`) }
            else if (typeof(attrs.margin) == "object") {
                if (attrs.margin.t) { classes.push(`mt-${attrs.margin.t}`) }
                if (attrs.margin.r) { classes.push(`mr-${attrs.margin.r}`) }
                if (attrs.margin.b) { classes.push(`mb-${attrs.margin.b}`) }
                if (attrs.margin.l) { classes.push(`ml-${attrs.margin.l}`) }
            }
        }

        if (attrs.padding) {
            if (typeof(attrs.padding) == "number") { classes.push(`p-${attrs.padding}`) }
            else if (typeof(attrs.padding) == "object") {
                if (attrs.padding.t) { classes.push(`pt-${attrs.padding.t}`) }
                if (attrs.padding.r) { classes.push(`pr-${attrs.padding.r}`) }
                if (attrs.padding.b) { classes.push(`pb-${attrs.padding.b}`) }
                if (attrs.padding.l) { classes.push(`pl-${attrs.padding.l}`) }
            }
        }

        return classes.join(" ")
    },

    getBreadcrumbSeparator: function(type) {
        return `has-${type}-separator`
    }
}

export default Util