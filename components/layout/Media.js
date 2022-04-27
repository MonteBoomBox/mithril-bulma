import m from 'mithril'
    
var Media = {
    view: function(vnode) {
        return m('article.media', vnode.attrs, vnode.children)
    },

    Left: {
        view: function(vnode) {
            return m("figure.media-left", m("p.image.is-64x64", m("img", vnode.attrs)))
        }
    },

    Content: {
        view: function(vnode) {
            return m(".media-content", vnode.attrs, vnode.children)
        }
    },

    Right: {
        view: function(vnode) {
            return m(".media-right", vnode.attrs, vnode.children)
        }
    }
}
    
export default Media