(function _schematics() {

    // Constructor for a schematic
    var CutMaker = function(quant, thick, wide, long, angle_left, angle_right) {
        return {
            'quant': quant,
            'thick': thick,
            'wide': wide,
            'long': long,
            'angle_left': angle_left,
            'angle_right': angle_right
        }
    }

    var SpecialMaker = function(name, quant, cost, url) {
        return {
            'name': name,
            'quant': quant,
            'cost': cost,
            'url': url
        }
    }

    // Database of schematics
    var list = {
        'Benches': {
            'Backed Bench (2\' x 6\')': {
                cut_quant: 4,
                image: 'http://i.imgur.com/ZGL2MjL.png',
                cuts: [
                    CutMaker(7, 2, 6, 60),
                    CutMaker(8, 2, 6, 17),
                    CutMaker(2, 2, 6, 35, 10, 0),
                    CutMaker(2, 2, 6, 72)
                ]
            },
            'Backed Bench with Armrest': {
                cut_quant: 7,
                image: 'http://i.imgur.com/ufMtPF3.png',
                cuts: [
                    CutMaker(8, 2, 4, 72),
                    CutMaker(1, 2, 4, 60),
                    CutMaker(2, 2, 4, 36.5),
                    CutMaker(2, 2, 4, 21),
                    CutMaker(4, 2, 4, 19.5),
                    CutMaker(6, 2, 4, 16.5),
                    CutMaker(2, 2, 4, 14)
                ]
            },
            'Concreted Simple Bench': {
                cut_quant: 3,
                image: 'http://i.imgur.com/ilZCQuO.png',
                cuts: [
                    CutMaker(1, 2, 12, 72),
                    CutMaker(3, 4, 4, 36),
                    CutMaker(2, 2, 4, 66)
                ]
            },
            'Backless Bench': {
                cut_quant: 2,
                image: 'http://i.imgur.com/yKzoDfO.png',
                cuts: [
                    CutMaker(7, 2, 6, 60),
                    CutMaker(8, 2, 6, 17)
                ]
            },
            'Backless Bench (6\')': {
                cut_quant: 5,
                image: 'http://i.imgur.com/TXCpAaS.png',
                cuts: [
                    CutMaker(3, 2, 6, 72),
                    CutMaker(4, 2, 6, 18.5),
                    CutMaker(4, 2, 6, 17),
                    CutMaker(4, 2, 4, 21, 45, -45),
                    CutMaker(2, 2, 4, 15.5)
                ]
            },
            'Mural Bench': {
                cut_quant: 4,
                image: 'http://i.imgur.com/M23sCpo.png',
                cuts: [
                    CutMaker(7, 2, 6, 60),
                    CutMaker(8, 2, 6, 17),
                    CutMaker(2, 2, 6, 35, 10),
                    CutMaker(1, 2, 12, 72)
                ]
            },
            'Children\'s Bench': {
                cut_quant: 4,
                image: 'http://i.imgur.com/PQfP7Su.png',
                cuts: [
                    CutMaker(2, 2, 4, 72),
                    CutMaker(7, 2, 4, 60),
                    CutMaker(9, 2, 4, 10.75),
                    CutMaker(2, 2, 4, 22, 10)
                ]
            },
            'Children\'s Mural Bench': {
                cut_quant: 4,
                image: 'http://i.imgur.com/8l6mEIv.png',
                cuts: [
                    CutMaker(7, 2, 4, 60),
                    CutMaker(9, 2, 4, 10.75),
                    CutMaker(2, 2, 4, 22, 10),
                    CutMaker(1, 2, 8, 72)
                ]
            },
            'Double Planter Bench': {
                cut_quant: 9,
                image: 'http://i.imgur.com/G3Icibn.png',
                cuts: [
                    CutMaker(26, 2, 4, 22.5),
                    CutMaker(12, 2, 4, 21),
                    CutMaker(8, 2, 4, 17),
                    CutMaker(4, 2, 4, 14),
                    CutMaker(8, 2, 4, 24, 45, 45),
                    CutMaker(1, 2, 4, 96),
                    CutMaker(1, 2, 4, 93),
                    CutMaker(5, 2, 4, 45),
                    CutMaker(14, 2, 4, 21)
                ]
            },
            'Single Planter Bench': {
                cut_quant: 11,
                image: 'http://i.imgur.com/TjcO04e.png',
                cuts: [
                    CutMaker(1, 2, 4, 73.5),
                    CutMaker(1, 2, 4, 72),
                    CutMaker(2, 2, 4, 46),
                    CutMaker(4, 2, 4, 24, 45, -45),
                    CutMaker(3, 2, 4, 24),
                    CutMaker(13, 2, 4, 22.5),
                    CutMaker(23, 2, 4, 21),
                    CutMaker(4, 2, 4, 17),
                    CutMaker(2, 2, 4, 15),
                    CutMaker(2, 2, 4, 14),
                    CutMaker(2, 2, 4, 13.5)
                ]
            }
        },
        'Tables': {
            'Picnic Table': {
                cut_quant: 5,
                image: 'http://i.imgur.com/pO3P9gm.png',
                cuts: [
                    CutMaker(2, 2, 6, 66, 38, 38),
                    CutMaker(4, 2, 6, 39.5, 38, 38),
                    CutMaker(4, 2, 4, 34.25, 38, 38),
                    CutMaker(2, 2, 4, 32, 26, -26),
                    CutMaker(10, 2, 6, 96)
                ]
            },
            'Picnic Table (3 leg)': {
                cut_quant: 5,
                image: 'http://i.imgur.com/B0H0jBA.png',
                cuts: [
                    CutMaker(3, 2, 6, 66, 38, -38),
                    CutMaker(6, 2, 6, 39.5, 38, 38),
                    CutMaker(5, 2, 4, 34.25, 38, -38),
                    CutMaker(2, 2, 4, 32, 26, 26),
                    CutMaker(10, 2, 6, 96)
                ]
            },
            'Toddler Picnic Table': {
                cut_quant: 6,
                image: 'http://i.imgur.com/1BzZFwm.png',
                cuts: [
                    CutMaker(2, 2, 6, 64, 45, -45),
                    CutMaker(9, 2, 6, 60),
                    CutMaker(1, 2, 6, 45),
                    CutMaker(4, 2, 6, 28, 38, 38),
                    CutMaker(2, 2, 4, 29.5, 45, -45),
                    CutMaker(1, 2, 4, 29.5)
                ]
            }
        },
        'Garden': {
            'Planter Box': {
                cut_quant: 2,
                image: 'http://i.imgur.com/ZMcbcD6.png',
                cuts: [
                    CutMaker(4, 4, 4, 96),
                    CutMaker(4, 4, 4, 48)
                ]
            },
            'Two Tier Planter': {
                cut_quant: 3,
                image: 'http://i.imgur.com/Vv0fUw1.png',
                cuts: [
                    CutMaker(10, 4, 4, 96),
                    CutMaker(2, 4, 4, 92.5),
                    CutMaker(8, 4, 4, 48)
                ]
            },
            'Garden Bed (3\' x 4\')': {
                cut_quant: 5,
                image: 'http://i.imgur.com/s1QJbEk.png',
                cuts: [
                    CutMaker(2, 2, 6, 36, 45, -45),
                    CutMaker(2, 2, 6, 48, 45, -45),
                    CutMaker(4, 2, 8, 34.5),
                    CutMaker(4, 2, 8, 46.5),
                    CutMaker(4, 4, 4, 15)
                ]
            },
            'Garden Bed (4\' x 8\')': {
                cut_quant: 5,
                image: 'http://i.imgur.com/ojZ5gSQ.png',
                cuts: [
                    CutMaker(2, 2, 6, 96, 45, -45),
                    CutMaker(2, 2, 6, 48, 45, -45),
                    CutMaker(4, 2, 8, 94.5),
                    CutMaker(4, 2, 8, 46.5),
                    CutMaker(6, 4, 4, 15)
                ]
            },
            'Victory Garden Bed (4\' x 8\')': {
                cut_quant: 6,
                image: 'http://i.imgur.com/sBxZ7VD.png',
                cuts: [
                    CutMaker(5, 2, 4, 46),
                    CutMaker(2, 2, 6, 48, 45, -45),
                    CutMaker(2, 2, 6, 96, 45, -45),
                    CutMaker(4, 2, 8, 46.5),
                    CutMaker(4, 2, 8, 94.5),
                    CutMaker(6, 4, 4, 15),
                    CutMaker(1, 0.5, 48, 96)
                ]
            },
            'Garden Box (24\' x 6\')': {
                cut_quant: 5,
                image: 'http://i.imgur.com/NzpKd0M.png',
                cuts: [
                    CutMaker(2, 2, 4, 72, 45, -45),
                    CutMaker(12, 2, 4, 70.5),
                    CutMaker(2, 2, 4, 24, 45, -45),
                    CutMaker(12, 2, 4, 22.5),
                    CutMaker(4, 2, 4, 21)
                ]
            },
            'Garden Box with Wheels': {
                cut_quant: 4,
                image: 'http://i.imgur.com/PjUjxEw.png',
                cuts: [
                    CutMaker(12, 2, 4, 22.5),
                    CutMaker(12, 2, 4, 34.5),
                    CutMaker(9, 1, 4, 24),
                    CutMaker(4, 1, 4, 21)
                ],
                specials: [
                    SpecialMaker('Swivel Casters', 4, 3.67, 'http://www.homedepot.com/p/Shepherd-2-1-2-in-Polypropylene-Swivel-Plate-Caster-with-175-lb-Load-Rating-9393/100212297'),
                    SpecialMaker('1&frasl8\' Fender Washers', 16, 1.18, 'http://www.homedepot.com/p/Everbilt-1-8-in-x-1-in-Stainless-Steel-Fender-Washer-3-Piece-815841/204284499?MERCH=REC-_-SearchPLPHorizontal1_rr-_-NA-_-204284499-_-N')
                ]
            }
        },
        'Outdoor Classroom': {
            'Stage': {
                cut_quant: 4,
                image: 'http://i.imgur.com/sSlTXSs.png',
                cuts: [
                    CutMaker(2, 2, 6, 96),
                    CutMaker(8, 2, 6, 93),
                    CutMaker(17, 1.25, 6, 96),
                    CutMaker(8, 4, 4, 27)
                ]
            },
            'Ramp': {
                cut_quant: 3,
                image: 'http://i.imgur.com/jjIoS9u.png',
                cuts: [
                    CutMaker(2, 2, 4, 48),
                    CutMaker(4, 2, 4, 93),
                    CutMaker(18, 1.25, 6, 48)
                ]
            },
            'Podium': {
                cut_quant: 5,
                image: 'http://i.imgur.com/1mPKK82.png',
                cuts: [
                    CutMaker(1, 2, 12, 18),
                    CutMaker(1, 2, 12, 4),
                    CutMaker(1, 4, 4, 48, 45),
                    CutMaker(2, 2, 4, 10.5),
                    CutMaker(2, 2, 4, 3.5)
                ]
            }
        },
        'Exercise': {
            'Chin-up Bars': {
                cut_quant: 2,
                image: 'http://i.imgur.com/6LWk1NR.png',
                cuts: [
                    CutMaker(2, 4, 4, 96),
                    CutMaker(1, 4, 4, 72)
                ],
                specials: [
                    SpecialMaker('1\' x 4\' Galvanized Steel Pipe', 2),
                    SpecialMaker('1\' Galvanized Pipe Cap', 4, 3.35, 'http://www.homedepot.com/p/LDR-Industries-1-in-Galvanized-Iron-Cap-311-CA-1/100575690'),
                    SpecialMaker('80lb Concrete Bag', 3, 4.15, 'http://www.homedepot.com/p/SAKRETE-80-lb-Gray-Concrete-Mix-65200390/100350291'),
                    SpecialMaker('Marine Strength Epoxy', 1, 5.77, 'http://www.homedepot.com/p/Loctite-0-85-fl-oz-Marine-Epoxy-1919324/205361752')
                ]
            },
            'Push-up Bars': {
                cut_quant: 1,
                image: 'http://i.imgur.com/fEtV5Bo.png',
                cuts: [
                    CutMaker(2, 4, 4, 24)
                ],
                specials: [
                    SpecialMaker('1\' x 4\' Galvanized Steel Pipe', 1),
                    SpecialMaker('1\' Galvanized Pipe Cap', 2, 3.35, 'http://www.homedepot.com/p/LDR-Industries-1-in-Galvanized-Iron-Cap-311-CA-1/100575690'),
                    SpecialMaker('80lb Concrete Bag', 2, 4.15, 'http://www.homedepot.com/p/SAKRETE-80-lb-Gray-Concrete-Mix-65200390/100350291'),
                    SpecialMaker('Marine Strength Epoxy', 1, 5.77, 'http://www.homedepot.com/p/Loctite-0-85-fl-oz-Marine-Epoxy-1919324/205361752')
                ]
            },
            'Sit-up Bench': {
                cut_quant: 2,
                image: 'http://i.imgur.com/IMdFcCZ.png',
                cuts: [
                    CutMaker(10, 4, 4, 96),
                    CutMaker(4, 4, 4, 48)
                ],
                specials: [
                    SpecialMaker('1\' x 4\' Galvanized Steel Pipe', 3),
                    SpecialMaker('1\' Galvanized Pipe Cap', 6, 3.35, 'http://www.homedepot.com/p/LDR-Industries-1-in-Galvanized-Iron-Cap-311-CA-1/100575690'),
                    SpecialMaker('80lb Concrete Bag', 8, 3.30, 'http://www.homedepot.com/p/SAKRETE-60-lb-Gray-Concrete-Mix-65200940/100321247'),
                    SpecialMaker('Marine Strength Epoxy', 1, 5.77, 'http://www.homedepot.com/p/Loctite-0-85-fl-oz-Marine-Epoxy-1919324/205361752')
                ]
            }
        },
        'Misc': {
            'Bike Rack': {
                cut_quant: 4,
                image: 'http://i.imgur.com/rzfEgT9.png',
                cuts: [
                    CutMaker(2, 4, 4, 48),
                    CutMaker(8, 2, 4, 34.5),
                    CutMaker(1, 2, 4, 56),
                    CutMaker(1, 2, 4, 63)
                ]
            },
            'Dolly': {
                cut_quant: 2,
                image: 'http://i.imgur.com/pcKJXOo.png',
                cuts: [
                    CutMaker(4, 2, 4, 24),
                    CutMaker(2, 2, 4, 60)
                ],
                specials: [
                    SpecialMaker('Swivel Caster', 4, 3.67, 'http://www.homedepot.com/p/Shepherd-2-1-2-in-Polypropylene-Swivel-Plate-Caster-with-175-lb-Load-Rating-9393/100212297'),
                    SpecialMaker('1&frasl8\' Fender Washers', 16, 1.18, 'http://www.homedepot.com/p/Everbilt-1-8-in-x-1-in-Stainless-Steel-Fender-Washer-3-Piece-815841/204284499')
                ]
            },
            'Entrance Sign': {
                cut_quant: 6,
                image: 'http://i.imgur.com/KLXIEKX.png',
                cuts: [
                    CutMaker(3, 4, 4, 90),
                    CutMaker(1, 2, 8, 99),
                    CutMaker(2, 2, 8, 48),
                    CutMaker(2, 2, 4, 42.75),
                    CutMaker(1, 0.5, 48, 96),
                    CutMaker(1, 0.375, 48, 96)
                ],
                specials: [
                    SpecialMaker('60lbs Concrete Bag', 3, 3.30, 'http://www.homedepot.com/p/SAKRETE-60-lb-Gray-Concrete-Mix-65200940/100321247')
                ]
            }
        }
    }

    module.exports.list = list

})()
