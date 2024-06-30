const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51PUKza2LGrAf9sT3yd8ClyOGb4sDMWRECcN9jukm9q8k5jABsJHd2nV9gmWvCRxCV5iAcDuxmBqqaEx0NECFzF7500HXJfmKZg")



dotenv.config({
    path: './.env'
})
 
app.use(express.json())
app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true
    }
))



app.get("/",(req,res)=>{
    res.send("welcome to this page")
})


app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const { products } = req.body;
        if (!products || !Array.isArray(products)) {
            return res.status(400).json({ error: 'Invalid product data' });
        }

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.dish,
                },
                unit_amount: product.price * 100,
            },
            quantity: product.qnty,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "https://ecommerce-paymentgateway-frontend.vercel.app/success", // Replace with your actual success URL
            cancel_url: "https://ecommerce-paymentgateway-frontend.vercel.app/cancel", // Replace with your actual cancel URL
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});


const PORT = process.env.PORT
app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`server started at ${PORT}`);
})













