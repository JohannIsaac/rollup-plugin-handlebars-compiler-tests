import Template from '../handlebars/with-plugin-partial.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}