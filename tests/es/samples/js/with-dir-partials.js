import Template from '../handlebars/with-dir-partials.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}