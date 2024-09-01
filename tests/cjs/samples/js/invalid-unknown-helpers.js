import Template from '../handlebars/invalid-unknown-helpers.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}