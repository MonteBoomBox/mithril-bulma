import m from 'mithril'
import Util from '../Utility'
    
var FileInput = {
    getFileName: function(e) {
        var files = e.target.files
        this.fileName = files[0].name
    },
    fileName: "",
    view: function(vnode) {
        return m(`.file.${vnode.attrs.hasName ? "has-name" : ""}.${Util.getClasses(vnode.attrs)}`, m("label.file-label", [
            m("input.file-input", { onchange: (e) => this.getFileName(e), type: "file", ...vnode.attrs }),
            m("span.file-cta", [
                m("span.file-icon", m(`i.${vnode.attrs.icon}`)),
                m("span.file-label", vnode.children)
            ]),
            vnode.attrs.hasName && m("span.file-name", this.fileName == "" ? "No File Selected" : this.fileName)
        ]))
    }
}
    
export default FileInput