import m from 'mithril'
import Button from './components/Button'
import Breadcrumb from './components/Breadcrumb'
import Card from './components/Card'
import Dropdown from './components/Dropdown'
import Group from './components/Group'
import Menu from './components/Menu'
import Message from './components/Message'
import Modal from './components/Modal'
import Notification from './components/Notification'
import Progress from './components/Progress'
import Subtitle from './components/Subtitle'
import Tag from './components/Tag'
import Title from './components/Title'
import Box from "./components/Box"
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import Panel from './components/Panel'
import Pagination from './components/Pagination'
import Input from './components/input/Input'
import Select from './components/input/Select'
import InputButton from './components/input/InputButton'
import Level from './components/layout/Level'
import Columns from './components/layout/Columns'
import Content from './components/Content'
import Image from './components/Image'
import Table from './components/Table'
import FileInput from './components/input/FileInput'
import Hero from './components/layout/Hero'
    
var Main = {
    view: function(vnode) {
        return [
            m('.full-container.p-6', [
                m(Modal, { active: true, hasClose: true }, [
                    m(Modal.Background),
                    m(Modal.Content, "JSADASD")
                ])
            ])
        ]
    }
}
    
export default Main