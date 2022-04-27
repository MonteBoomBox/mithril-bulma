import m from 'mithril'
import Util from '../Utility'
    
var Section = {
    view: function(vnode) {
        return m(`section.section.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
export default Section