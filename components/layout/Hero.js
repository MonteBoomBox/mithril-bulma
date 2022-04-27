import m from 'mithril'
import Util from '../Utility'
    
var Hero = {
    view: function(vnode) {
        return m(`section.hero.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Body: {
        view: function(vnode) {
            return m(".hero-body", vnode.attrs, vnode.children)
        }
    }
}
    
export default Hero