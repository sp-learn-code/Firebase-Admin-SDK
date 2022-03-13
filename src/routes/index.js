const { Router } = require('express')
const { db } = require('../firebase')

//Router necesita inicializarse
const router = Router()

router.get('/contacts', async (req, res) => {
    const querySnapshot = await db.collection('contacts').get()

    const contacts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(contacts)
    res.send('Hello')
})

router.post('/new-contact', async (req, res) => {
    //req.body es la informacion que nos envia el cliente 
    const { firstname, lastname, email, phone } = req.body

    await db.collection('contacts').add({
        firstname,
        lastname,
        email,
        phone
    })

    res.send("New contact created")
})

router.get('/edit-contact/:id', async (req, res) => {
    const doc = await db.collection('contacts').doc(req.params.id).get()
    console.log({ id: doc.id, ...doc.data() })

    res.send("Edit contact")
})

module.exports = router  