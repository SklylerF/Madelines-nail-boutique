const Gallery = require('../models/gallery');

const gallerydata = [
    {
        filename: 'image1.jpg',
    },
    {

        filename: 'image2.jpg',
    },
    {

        filename: 'image3.jpg',
    },
    {

        filename: 'image4.jpg',
    },
    {

        filename: 'image5.jpg',
    },
    {

        filename: 'image6.jpg',
    },
    {

        filename: 'image7.jpg',
    }
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;