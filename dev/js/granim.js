var granimInstance = new Granim({
    element: '#canvas-advanced',
    direction: 'left-right',
    isPausedWhenNotInView: false,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ]
            ]
        }
    }
});



var granimInstance2 = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: false,
    image : {
        source: 'https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg',
        blendingMode: 'color'
    },
    states : {
        "default-state": {
            gradients: [
                ['#010914', '#041B44'],
                ['#062B79', '#16498A'],
                ['#5995B7', '#FAFBBD'],
                ['#FDE050', '#F1B351'],
                ['#FFEC8F', '#FFF9E1'],
                ['#5995B7', '#FAFBBD'],
                ['#062B79', '#16498A']
            ],
            transitionSpeed: 3500
        }
    }
});


var granimInstance3 = new Granim({
    element: '#canvas-basic',
    direction: 'radial',
    isPausedWhenNotInView: false,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

console.log(granimInstance);
console.log(granimInstance2);
console.log(granimInstance3);
