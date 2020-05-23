const Album = require('./models/Album')


const album = async (req, res) => {
    const { title, singers, tracks } = req.body;

    try {
        const newAlbum = await new Album({
            title,
            singers,
            tracks
        }).save()
        res.send({
            message: "create succesfully",
            Album: newAlbum,
        })
    } catch (error) {
        res.status(404).send({ message: "Error" })
    }
}

const home = (req, res) => {
    res.send('home page')
}
module.exports = {
    home,
    album
}