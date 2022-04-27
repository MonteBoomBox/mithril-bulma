import m from 'mithril'
    
var Card = {
    view: function(vnode) {
        return m('.card', { ...vnode.attrs }, vnode.children)
    },

    Header: {
        view: function(vnode) {
            return m("header.card-header", { ...vnode.attrs }, [
                m("p.card-header-title", vnode.children)
            ])
        }
    },

    Image: {
        view: function(vnode) {
            return m(".card-image", vnode.attrs, vnode.children)
        }
    },

    Content: {
        view: function(vnode) {
            return m(".card-content", { ...vnode.attrs }, vnode.children)
        }
    },

    Footer: {
        view: function(vnode) {
            return m("footer.card-footer", { ...vnode.attrs }, vnode.children)
        }
    },

    FooterItem: {
        view: function(vnode) {
            return m("a.card-footer-item", { ...vnode.attrs }, vnode.children)
        }
    }
}
    
export default Card