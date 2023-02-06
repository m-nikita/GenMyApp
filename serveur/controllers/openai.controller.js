const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const generateAnswer = async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        })
        if (!response) {
            throw new Error("No response from OpenAI")
        }
        res.answer = await response.data.choices[0].text;
        // TODO remove return and uncomment next() when adding second controller for data persistance
        return res.json({status: 'ok', answer: res.answer});
        //next()
    } catch (err) {
        console.error(err)
        console.log(err.response.data)
    }
}


module.exports = { generateAnswer }
