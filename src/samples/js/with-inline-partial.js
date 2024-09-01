import Template from '../handlebars/with-inline-partial.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}