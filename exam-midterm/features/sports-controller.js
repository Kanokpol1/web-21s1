const { db } = require('../_services/firebase-admin-initialized')

const sportCreateForm = async (req, res) => {
  res.render('sport-create-form')
}

module.exports = {
  sportCreateForm,
}
