import Template from '../handlebars/with-partial-block.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}