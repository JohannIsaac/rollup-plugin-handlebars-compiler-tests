import Template from '../../handlebars/nested-templates/with-cousin-dir-partial.hbs'
import { TemplateData } from '../../data/template-data.js'

export default function load() {
    return Template(TemplateData)
}