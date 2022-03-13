const { Router } = require('express')
const { db } = require('../firebase')

//Router necesita inicializarse
const router = Router()

router.get('/', async (req, res) => {
    const querySnapshot = await db.collection('contacts').get()

    const contacts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(contacts)
    res.render('index', {contacts})
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

    res.redirect('/')
})

router.get('/edit-contact/:id', async (req, res) => {
    const doc = await db.collection('contacts').doc(req.params.id).get()
    console.log({ id: doc.id, ...doc.data() })

    res.send("Edit contact")
})

router.get('/delete-contact/:id', async (req, res) =>{
    await db.collection('contac ts').doc(req.params.id).delete()

    res.redirect('/')
})

router.post('/update-contact/:id', async (req,res) => {
    const {id} = req.params
    await db.collection('contacts').doc(id).update(req.body)
    res.send("Contact updated")
})

module.exports = router  