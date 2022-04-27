import m from 'mithril'
import Util from './Utility'
    
var Image = {
    view: function(vnode) {
        return m(`figure.image.${Util.getClasses(vnode.attrs)}`, [
            m(`img.${vnode.attrs.rounded && "is-rounded"}`, vnode.attrs)
        ])
    }
}
    
export default Image