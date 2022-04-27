import m from 'mithril'
import Util from './Utility'
    
var Notification = {
    view: function(vnode) {
        return m(`.notification.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, [
            vnode.attrs.hasDelete && m("button.delete"),
            vnode.children
        ])
    }
}
    
export default Notification