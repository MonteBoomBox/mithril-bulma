import m from 'mithril'
    
var Footer = {
    view: function(vnode) {
        return m('footer.footer', vnode.attrs, vnode.children)
    }
}
    
export default Footer