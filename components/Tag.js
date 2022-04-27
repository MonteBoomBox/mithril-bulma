import m from 'mithril'
import Util from './Utility'
    
var Tag = {
    view: function(vnode) {
        return m(`span.tag.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
export default Tag