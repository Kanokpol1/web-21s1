const { db } = require('../_services/firebase-admin-initialized')

const sportCreateForm = async (req, res) => {
  res.render('sport-create-form')
}

const sportCreate = async (req, res) => {
  // 1. Inputs
  const slug = req.body.slug
  const name = req.body.name
  const eventCount = parseInt(req.body.eventCount) || 0
  const description = req.body.description

  const data = { slug, name, eventCount, description }

  // 2. Queries
  const query = db.collection('sport')
    .doc(slug)
    .set(data, { merge: true })

  // 3. Response
  await query
  res.redirect(`/sport/${slug}`)
}

const sportlish = async (req, res) => {
  const slug = req.params.slug

  const query = db.collection('sports')
    .orderBy('name')
    .get()

  const sport = (await query).docs.map(doc => doc.data())
  res.render('list', { sport })
}

const sportDetails = async (req, res) => {
  // 1. Inputs
  const slug = req.params.slug

  // 2. Queries
  const query = db.collection('sports')
    .doc(slug)
    .get()

  // 3. Response
  const sports = (await query).data()
  res.render('detail', { sports })
}

const sprotTeblish = async (req, res) => {
  // 1. Inputs
  const slug = req.params.slug

  // 2. Queries
  const query = db.collection('events')
    .where('sportSlug', '==', slug)
    .get()

  // 3. Response
  const sports = (await query).data()
  res.render('table', { sports })
}

module.exports = {
  sportCreateForm,
  sportlish,
  sportCreate,
  sportDetails,
  sprotTeblish
}
