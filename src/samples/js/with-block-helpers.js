import Template from '../handlebars/with-block-helpers.hbs'
const TemplateData = {
    "people": [
        {
            "firstname": "Yehuda",
            "lastname": "Katz"
        },
        {
            "firstname": "Carl",
            "lastname": "Lerche"
        },
        {
            "firstname": "Alan",
            "lastname": "Johnson"
        }
    ]
}

export default function load() {
    return Template(TemplateData)
}