
module.exports = {
  handle200(res, data) {
    res.status(200).json(data)
  },

  handle404(res, msg) {
    res.status(404).json({ msg })
  },

  handle500(res) {
    res.status(500).json({ msg: 'An error occured. Try again later' })
  },

  handle201(res, data) {
    res.status(201).json(data)
  },

  handleErr(err, res) {
    switch(err.name) {
      case 'SequelizeValidationError': {
        const resErrors = err.errors.map(({message}) => { message });
        return res.status(400).json({ errors: resErrors })
      }
      case 'SequelizeUniqueConstraintError': {
        const resErrors = err.errors.map(({message}) => { message });
        return res.status(409).json({ errors: resErrors })
      }
      default: {
        return this.handle500(res)
      }
    }
  },
}
