// @ts-check
import { join } from 'path'
import { readFileSync } from 'fs'
import express from 'express'
import serveStatic from 'serve-static'

import shopify from './shopify.js'
import productCreator from './product-creator.js'
import GDPRWebhookHandlers from './gdpr.js'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import mailGen from 'mailgen'
import cors from 'cors'


import shippingRoute from './routes/shippingRoute.js'
import currencyRoute from './routes/currencyRoute.js'

// @ts-ignore
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10)

const STATIC_PATH =
  process.env.NODE_ENV === 'production'
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Api is working");
});

app.use('/api', shippingRoute)
app.use('/api', currencyRoute)

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin())
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot(),
)
app.post(
  shopify.config.webhooks.path,
  // @ts-ignore
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers }),
)

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use('/api/*', shopify.validateAuthenticatedSession())

app.use(express.json())

app.get('/api/products/count', async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  })
  res.status(200).send(countData)
})

app.get('/api/products/create', async (_req, res) => {
  let status = 200
  let error = null

  try {
    await productCreator(res.locals.shopify.session)
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`)
    status = 500
    error = e.message
  }
  res.status(status).send({ success: status === 200, error })
})

// app.post('/', async (req, res) => {
//   const {email} = req.body;
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'leonard80@ethereal.email', // generated ethereal user
//       pass: 'wzz9bgkcRVmKV88dpS', // generated ethereal password
//     },
//   })

//   const msg = {
//     from: '"The express app" <theExpressApp@example.com>', // sender address
//     to: email, // list of receivers
//     subject: 'wassap', // Subject line
//     text: 'Hello world?', // plain text body
//   }
//   // send mail with defined transport object
//   const info = await transporter.sendMail(msg)

//   console.log('Message sent: %s', info.messageId)
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//   res.send('Email Sent!')
// })

// app.post('/', async (req, res) => {
//   const { email } = req.body
//   let config = {
//     service: 'gmail',
//     auth: {
//       user: 'rushang.v2web@gmail.com',
//       pass: 'xjggkodynbfgiysx',
//     },
//   }

//   let transporter = nodemailer.createTransport(config)
//   let mailGenerater = new mailGen({
//     theme: 'default',
//     product: {
//       name: 'Rush',
//       link: 'https://mailgen.js',
//     },
//   })

//   let response = {
//     body: {
//       name: 'user',
//       intro:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//       table: {
//         data: [
//           {
//             item: 'product',
//             price: 10.99,
//             stock: '3 remaining'
//           },
//         ],
//       },
//     },
//   }
//   let mail = mailGenerater.generate(response)
//   console.log('receive email')

//   let message = {
//     form: '"hey Foo 👻" <foo@gmail.com>',
//     to: email,
//     subject: 'test mail',
//     html: mail,
//   }

//   transporter
//     .sendMail(message)
//     .then(() => {
//       return res.json({
//         msg: 'Email Sent!',
//       })
//     })
//     .catch((error) => {
//       return res.json({ error })
//     })
// })

// app.post('/', async (req, res) => {
//   const { email, stock } = req.body
//   let config = {
//     service: 'gmail',
//     auth: {
//       user: 'rushang.v2web@gmail.com',
//       pass: 'xjggkodynbfgiysx',
//     },
//   }

//   let transporter = nodemailer.createTransport(config)
//   let mailGenerater = new mailGen({
//     theme: 'default',
//     product: {
//       name: 'Rush',
//       link: 'https://mailgen.js',
//     },
//   })

//   let response = {
//     body: {
//       name: 'user',
//       intro: `Hello,\n\nThis is to inform you that the stock of the product is less than 4. Thank you.`,
//       table: {
//         data: [
//           {
//             item: 'product',
//             price: 10.99,
//             stock: stock,
//           },
//         ],
//       },
//     },
//   }

//   if (response.body.table.data[0].stock <= 3) {
//     let mail = mailGenerater.generate(response)
//     console.log('receive email')

//     let message = {
//       from: '"hey Foo 👻" <foo@gmail.com>',
//       to: email,
//       subject: 'Product Stock Alert',
//       html: mail,
//     }

//     setTimeout(function () {
//       transporter.sendMail(message, function (error, info) {
//         if (error) {
//           return res.json({ error })
//         } else {
//           return res.json({ msg: 'Email Sent!' })
//         }
//       })
//     }, 5000) // Delay time specified in milliseconds (1 minute)
//   } else {
//     return res.json({
//       msg: 'If Product stock is less than 4. email sent automatically',
//     })
//   }

//   // Check if the product stock is less than 3
//   // if (response.body.table.data[0].stock <= 3) {

//   //   let mail = mailGenerater.generate(response)
//   //   console.log('receive email')

//   //   let message = {
//   //     from: '"hey Foo 👻" <foo@gmail.com>',
//   //     to: email,
//   //     subject: 'test mail',
//   //     html: mail,
//   //   }

//   //   transporter
//   //     .sendMail(message)
//   //     .then(() => {
//   //       return res.json({
//   //         msg: 'Email Sent!',
//   //       })
//   //     })
//   //     .catch((error) => {
//   //       return res.json({ error })
//   //     })
//   // } else {
//   //   return res.json({
//   //     msg: 'If Product stock is less than 4. email sent automatically',
//   //   })
//   // }
// })

app.use(serveStatic(STATIC_PATH, { index: false }))

app.use('/*', shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(readFileSync(join(STATIC_PATH, 'index.html')))
})
app.listen(PORT)

// const port = 3000; // Replace with your desired port number
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
