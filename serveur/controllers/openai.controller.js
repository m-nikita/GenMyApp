const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const generateAnswer = async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.body.prompt,
            temperature: 0.9,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        })
        if (!response) {
            throw new Error("No response from OpenAI")
        }
        res.answer = await response.data.choices[0].text;
        return res.json({status: 'ok', answer: res.answer});
    } catch (err) {
        console.error(err)
        console.log(err.response.data)
    }
}
const generatePost = async (req, res, next) => {
    const prompt = req.body.prompt;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.9,
            max_tokens: 2047,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        })
        if (!response) {
            throw new Error("No response from OpenAI")
        }
        res.answer = await response.data.choices[0].text;
        next()
    } catch (err) {
        console.error(err)
        console.log(err.response.data)
    }
}


module.exports = { generateAnswer, generatePost }
