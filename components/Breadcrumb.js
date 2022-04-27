import m from 'mithril'
import Util from './Utility'
    
var Breadcrumb = {
    view: function(vnode) {
        return m(`nav.breadcrumb.${Util.getClasses(vnode.attrs)}.${vnode.attrs.separator && Util.getBreadcrumbSeparator(vnode.attrs.separator)}`, { ...vnode.attrs }, m("ul", vnode.children))
    },

    Item: {
        view: function(vnode) {
            return m("li", { ...vnode.attrs }, m("a", { href: vnode.attrs.href }, vnode.children))
        }
    }
}
    
export default Breadcrumb