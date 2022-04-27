import m from 'mithril'
import Util from './Utility'
    
var Delete = {
    view: function(vnode) {
        return m(`button.delete.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
export default Delete