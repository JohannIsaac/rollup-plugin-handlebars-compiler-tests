import Template from '../handlebars/invalid-syntax-error.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}