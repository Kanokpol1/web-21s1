const { db } = require('../_services/firebase-admin-initialized')
const { firestore } = require('firebase-admin')

const covies = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('covid-latest').get()

    // 3. Response
    const payload = (await query)
      .docs
      .map(doc => doc.data())
      .map(({ date, stateId, stateName, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }) => ({ date: date.toMillis(), stateId, stateName, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }))

    res.json({
      result: 'ok',
      payload,
      count: payload.length
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      result: 'error',
      payload: [],
      count: 0
    })
  }
}

const covie = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId.toUpperCase()

    // 2. Query
    const query = db.collection('covid-history').doc(stateId).get()

    // 3. Response
    const snapshot = await query
    if (!snapshot.exists) return res.status(404).json({ result: 'not found' })

    const data = snapshot.data()

    const payload = {
      stateId, // this is already a variable
      stateName: data.stateName,
      history: data.history.map(({ date, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }) => ({ date: date.toMillis(), cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }))
    }

    res.json({ result: 'ok', payload })
  } catch (err) {
    console.error(err)
    res.status(500).json({ result: 'error' })
  }
}

const createCovie = async (req, res) => {
  try {
    // 1. Inputs
    const { stateId, date, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent } = req.body
    const record = { stateId, date: firestore.Timestamp.fromMillis(date), cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }

    const historyRecord = {
      history: firestore.FieldValue.arrayUnion({
        date: firestore.Timestamp.fromMillis(date),
        cases,
        casesNew,
        vaccineOne,
        vaccineOnePercent,
        vaccineComplete,
        vaccineCompletePercent
      })
    }

    // 2. Query
    const query = db.collection('covid-latest').doc(stateId).set(record, { merge: true })
    const queryhistory = db.collection('covid-history').doc(stateId).set(historyRecord, { merge: true })

    // 3. Response
    await query
    await queryhistory

    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const updateCovie = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId.toUpperCase()
    const { date, cases, casesNew } = req.body
    const record = { date: firestore.Timestamp.fromMillis(date), cases, casesNew }

    const historyRecord = {
      history: firestore.FieldValue.arrayUnion({ date: firestore.Timestamp.fromMillis(date), cases, casesNew })
    }
    // 2. Query
    const query = db.collection('covie-latest').doc(stateId).set(record, { merge: true })
    const queryhistory = db.collection('covid-history').doc(stateId).set(historyRecord, { merge: true })

    // 3. Response
    await query
    await queryhistory

    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const deleteCovie = async (req, res) => {
  // 1. Inputs

  // 2. Query

  // 3. Response

  res.sendStatus(403)
}

module.exports = {
  covies,
  covie,
  createCovie,
  updateCovie,
  deleteCovie
}
