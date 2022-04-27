import m from 'mithril'
import Util from './Utility'
    
var Pagination = {
    view: function(vnode) {
        return m(`nav.pagination.${Util.getClasses(vnode.attrs)}`, vnode.attrs, [
            m("ul.pagination-list", vnode.children)
        ])
    },

    Previous: {
        view: function(vnode) {
            return m(`a.pagination-previous.${vnode.attrs.disabled && "is-disabled"}`, vnode.attrs, vnode.children)
        }
    },

    Next: {
        view: function(vnode) {
            return m(`a.pagination-next.${vnode.attrs.disabled && "is-disabled"}`, vnode.attrs, vnode.children)
        }
    },

    Item: {
        view: function(vnode) {
            return m("li", m(`a.pagination-link.${vnode.attrs.current && "is-current"}`, vnode.attrs, vnode.children))
        }
    },

    Dots: {
        view: function(vnode) {
            return m("li", m("span.pagination-ellipsis", m.trust("&hellip;")))
        }
    }
}
    
export default Pagination