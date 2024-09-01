import Template from '../templates/simple.hbs'
import { TemplateData } from '../data/template-data.js'

export default function load() {
    Template(TemplateData)
}