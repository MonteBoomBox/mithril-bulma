import m from 'mithril'
import Util from './Utility'
    
var Tabs = {
    view: function(vnode) {
        return m(`.tabs.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, m("ul", vnode.children))
    },

    Item: {
        getActiveClass: function(attrs) {
            if (attrs.href) {
                if (m.route.get() == attrs.href.substring(2)) {
                    return "is-active"
                }
            }
        },
        view: function(vnode) {
            return m(`li.${this.getActiveClass(vnode.attrs)}`, { ...vnode.attrs }, m("a", { ...vnode.attrs }, vnode.children))
        }
    }
}
    
export default Tabs