import Template from '../handlebars/simple.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}