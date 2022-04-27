import m from 'mithril'
import Util from './Utility'
    
var Button = {
    view: function(vnode) {
        return m(`button.button.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
export default Button