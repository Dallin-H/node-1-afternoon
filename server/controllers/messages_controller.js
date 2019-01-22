let messages = [

]

let id = 0;

module.exports = {
    //create using text and time off of request body and assign unique id to message
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    //return  messages array
    read: (req, res) => {
        res.status(200).send(messages)
    },
    //update text, use id in url to determine which message
    update: (req, res) => {
        const { text } = req.body;
        const { id } = req.params
        messages = messages.map((message) => {
            if (message.id === +id) {
                message.text = text;
            }
            return message;
        })
        res.status(200).send(messages)
    },
    //delete message, use id in url to determine which message
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }

} 