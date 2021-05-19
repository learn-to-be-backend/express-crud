const fs = require('fs')
const tours = JSON.parse(fs.readFileSync('dev-data/data/tours-simple.json'))

// controller itu handling req dan res dari endpoint

exports.getAllTour = (req, res) => {
  res
    .status(200)
    .json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    })
}

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1
  const newTours = Object.assign({ id: newId }, req.body)

  tours.push(newTours)
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), error => {
    res
      .status(201)
      .json({
        status: 'success',
        message: 'data berhasil tersimpan'
      })
  })
}

exports.getTourById = (req, res) => {
  const id = parseInt(req.params.id)
  const tourId = tours.find(tour => tour.id === id)

  if (!tourId) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID tidak ditemukan!'
    })
  }

  res
    .status(200)
    .json({
      status: 'success',
      data: {
        tours: tourId
      }
    })
}

exports.updateTour = (req, res) => {
  const id = parseInt(req.params.id)
  const tourId = tours.find(tour => tour.id === id)

  if (!tourId) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID tidak ditemukan!'
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      tours: '<update success>'
    }
  })
}

exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id)
  const tourId = tours.find(tour => tour.id === id)

  if (!tourId) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID tidak ditemukan!'
    })
  }

  res.status(204).json({
    data: null
  })
}