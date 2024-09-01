import Template from '../handlebars/with-helpers-commonjs.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}