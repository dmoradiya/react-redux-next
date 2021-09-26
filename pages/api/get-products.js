const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.SITE_URL,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: "wc/v3",
  
});

export default async function ahandler(req, res) {
  const responseData = {
    success: false,
    products: [],
    error: "",
  };

  try {
    const { data } = await api.get("products");

    responseData.success = true;
    responseData.products = data;
    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
