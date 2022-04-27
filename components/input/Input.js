import m from 'mithril'
import Util from '../Utility'
    
var Input = {
    view: function(vnode) {
        return m(`${vnode.attrs.as}.${vnode.attrs.as}.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
export default Input