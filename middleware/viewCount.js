let count = 0;
const viewCount = (req, res, next) => {
    count++
    console.log(count)
    // it can send response
    // res.send('Count API call')
    next()
}

module.exports = viewCount;