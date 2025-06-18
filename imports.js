var geometrytheresienwiese = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.5484113184154, 48.13608599093949],
          [11.547209688776729, 48.13494037254295],
          [11.547038027399775, 48.13385201138984],
          [11.546866366022822, 48.13299276260501],
          [11.545836397761104, 48.1317897901504],
          [11.544892260187861, 48.13075864847307],
          [11.545235582941768, 48.12941240456605],
          [11.544892260187861, 48.12777967843141],
          [11.546823450678584, 48.127321360010775],
          [11.547810503596065, 48.12660522929061],
          [11.550385424250361, 48.12723542485156],
          [11.551801630610225, 48.12820934823624],
          [11.553132006281611, 48.12975612976964],
          [11.553604075068233, 48.131675219875405],
          [11.553518244379756, 48.13330782216227],
          [11.552874514216182, 48.134453476984056],
          [11.552059122675654, 48.1351981389108],
          [11.550857493036983, 48.13582822902889],
          [11.54965586339831, 48.136114631071905]]]),
    stadtgrenze = ee.FeatureCollection("projects/bainka/assets/stadtgrenze_munich"),
    forest = 
    /* color: #008c00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.874625524306882, 48.12233636799871]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.873595556045164, 48.11958610468361]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.880891164565671, 48.121362333247504]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.89367993714868, 48.12416979507448]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.929900487685789, 48.12245095910815]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.928269704604734, 48.118841216363144]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.934277852798093, 48.121362333247504]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.933076223159421, 48.11866931752461]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.931445440078367, 48.11419974583742]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.923634847427, 48.10789584289468]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.891190847182859, 48.099871575259506]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.886727651382078, 48.10462897082556]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.893079122329343, 48.1076092834777]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.89642651917993, 48.11213673545646]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.883380254531492, 48.11362669570644]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.877801259780515, 48.11431435509668]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.871363958144773, 48.11471548549106]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.866557439590085, 48.11563234320471]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.867158254409421, 48.11947150718344]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.870333989883054, 48.12319579508859]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.863982518935789, 48.12451355536583]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.871020635390867, 48.127550004688786]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.865269979262937, 48.12795103174517]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.865355809951414, 48.13282039613194]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.874110540176023, 48.13912124114171]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.880719503188718, 48.14204227965568]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.874968847060789, 48.142500466694564]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.888959249282468, 48.14524950304388]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.88715680482446, 48.14187045846172]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.892735799575437, 48.14043859281283]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.899430593276609, 48.13940762481539]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.906554540420164, 48.14204227965568]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.900374730849851, 48.143130467195284]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.890675863052, 48.13219026910291]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.902863820815671, 48.13442432095046]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.915824254775632, 48.13700195230375]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.921059926772703, 48.13597091529102]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.935221990371335, 48.137746577269766]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.939170202041257, 48.137288347799505]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.940543493056882, 48.14049586820561]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.935736974502195, 48.14187045846172]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.943290075088132, 48.144504986903584]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.946465810561765, 48.139980387370066]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.944749196792234, 48.13620003641648]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.943633397842039, 48.13236212269586]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.941315969253171, 48.12434167550773]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.93908437135278, 48.12038828002712]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.93711026551782, 48.117064900629146]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.937196096206296, 48.11276710852705]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.91736920716821, 48.104399708848106]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.923634847427, 48.10669228260644]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.909215291762937, 48.10170580401535]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.912820180678953, 48.097406727309995]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.915738424087156, 48.09700546180789]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.893336614394773, 48.087316815587535]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.87591298463403, 48.09402453432066]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.863725026870359, 48.09591629680134]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.86544164063989, 48.09935568663011]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.868874868178953, 48.10227898708004]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.86492665650903, 48.10462897082556]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.870505651260007, 48.10738003479375]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.864325841689695, 48.11305363918457]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.457906194435088, 48.06102338132346]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.460051961647002, 48.061597017864095]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.463227697120635, 48.06486662408777]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.468120046363799, 48.06440774451475]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.471553273902861, 48.065153421743496]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.473441549049346, 48.06704624619299]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.4750723321304, 48.068996356153875]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.476703115211455, 48.07065962684738]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.469407506690947, 48.070028737395134]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.463141866432158, 48.0594745307348]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.44511742185208, 48.06331788913307]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.44185585568997, 48.060449738390666]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.442799993263213, 48.059187701437956]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.437049337135283, 48.06125283670677]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.437907644020049, 48.0626869096809]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.439280935035674, 48.06779188519723]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.440997548805205, 48.06997138342505]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.443400808082549, 48.07071698005044]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.446147390113799, 48.0691684211323]),
            {
              "Class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.430097051368682, 48.05528666434521]),
            {
              "Class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.433186956153838, 48.05792563354691]),
            {
              "Class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.435246892677275, 48.05981872378158]),
            {
              "Class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.446319051490752, 48.055516145297496]),
            {
              "Class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.444259114967315, 48.05477032846308]),
            {
              "Class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.44812149594876, 48.0535081522867]),
            {
              "Class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.448207326637236, 48.05213119753574]),
            {
              "Class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.460652776466338, 48.05712248332595]),
            {
              "Class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.464515157447783, 48.058040368269985]),
            {
              "Class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48305458615872, 48.063547334288955]),
            {
              "Class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.483655400978057, 48.06245746068974]),
            {
              "Class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.485972829566924, 48.061539654497665]),
            {
              "Class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.488204427467315, 48.06067919633084]),
            {
              "Class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.491723485694854, 48.06274427176888]),
            {
              "Class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496015020118682, 48.0616543811666]),
            {
              "Class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.503396459327666, 48.05809773553566]),
            {
              "Class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.471467443214385, 48.053967129021466]),
            {
              "Class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.46932167600247, 48.05178695309486]),
            {
              "Class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.457047887550322, 48.050868956668545]),
            {
              "Class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.442799993263213, 48.0492624235452]),
            {
              "Class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.440310903297393, 48.05190170149752]),
            {
              "Class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.43387360166165, 48.05230331889321]),
            {
              "Class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.435590215431182, 48.05431135888775]),
            {
              "Class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.442714162574736, 48.04817224752632]),
            {
              "Class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.427178807960479, 48.07960595374602]),
            {
              "Class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.427350469337432, 48.08167026982256]),
            {
              "Class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.421256490455596, 48.08109685699939]),
            {
              "Class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([11.426577993141143, 48.07335515829412]),
            {
              "Class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([11.43464607785794, 48.075821159126306]),
            {
              "Class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([11.435847707496611, 48.0730110557587]),
            {
              "Class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([11.438336797462432, 48.07513298473637]),
            {
              "Class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623585081349454, 48.14129552239218]),
            {
              "Class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623585081349454, 48.141528199393726]),
            {
              "Class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([11.624062514554105, 48.141563995761906]),
            {
              "Class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62491009260281, 48.141324159618506]),
            {
              "Class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625092482815823, 48.14145302693933]),
            {
              "Class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496543891691378, 48.15580735962429]),
            {
              "Class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([11.497573859953096, 48.15648013995225]),
            {
              "Class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([11.497187621854952, 48.15424704788814]),
            {
              "Class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([11.495642669462374, 48.15300162740636]),
            {
              "Class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([11.492209441923311, 48.15308751944455]),
            {
              "Class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([11.490685947202852, 48.15307320411485]),
            {
              "Class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([11.488969333433321, 48.15373170514813]),
            {
              "Class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([11.491286762022188, 48.156952512357705]),
            {
              "Class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([11.49471998956125, 48.157224482375845]),
            {
              "Class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([11.488489909463476, 48.15879754403228]),
            {
              "Class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([11.486794753366064, 48.15922695427474]),
            {
              "Class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([11.487846179299902, 48.16100181181263]),
            {
              "Class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([11.488790316873144, 48.16198940756092]),
            {
              "Class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([11.494068904214453, 48.16186059180244]),
            {
              "Class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([11.495420737557959, 48.1613453255338]),
            {
              "Class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([11.594514556019808, 48.15556946023081]),
            {
              "Class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([11.594868607609774, 48.155565881571874]),
            {
              "Class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([11.595072455494906, 48.15559451083646]),
            {
              "Class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([11.595195837109591, 48.156120570729556]),
            {
              "Class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([11.595560617535616, 48.156424752560376]),
            {
              "Class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([11.594852514355685, 48.15677187550522]),
            {
              "Class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([11.597389884083773, 48.15651421746151]),
            {
              "Class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([11.59773320683768, 48.156646625228944]),
            {
              "Class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([11.596998281567599, 48.15641401676176]),
            {
              "Class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([11.597679562657381, 48.15637465214756]),
            {
              "Class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([11.599026031582857, 48.15629950143666]),
            {
              "Class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([11.599503464787508, 48.15629592282864]),
            {
              "Class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([11.5997180415087, 48.15640685956141]),
            {
              "Class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([11.594262428372408, 48.15501834381247]),
            {
              "Class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([11.593758173077608, 48.15472131108005]),
            {
              "Class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([11.593012518971468, 48.154846566056406]),
            {
              "Class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([11.593044705479647, 48.15495750592296]),
            {
              "Class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([11.593264646618868, 48.15525095860713]),
            {
              "Class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([11.59245461949637, 48.1556159827744]),
            {
              "Class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528242986909415, 48.125715489287465]),
            {
              "Class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528420012704398, 48.125862299441984]),
            {
              "Class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529793303720023, 48.12556867871334]),
            {
              "Class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530238550416495, 48.12574771594272]),
            {
              "Class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529997151605155, 48.12549706364686]),
            {
              "Class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542424430940468, 48.13170911994105]),
            {
              "Class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543229093644936, 48.13162319212379]),
            {
              "Class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544301977250893, 48.13139405057476]),
            {
              "Class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544688215349037, 48.13135108642049]),
            {
              "Class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546512117479164, 48.13207431156039]),
            {
              "Class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54685544023307, 48.13239653730303]),
            {
              "Class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547027101610023, 48.13273308203098]),
            {
              "Class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546276083085854, 48.13163751343666]),
            {
              "Class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544183960054237, 48.13132244363099]),
            {
              "Class": 2,
              "system:index": "164"
            })]),
    water = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.738703867326063, 48.219281259108115]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.750720163712781, 48.219395633791045]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.758959909806531, 48.221054037978114]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.758273264298719, 48.21870938186054]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.777070185075086, 48.2223692858558]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.78694071424989, 48.22025343576791]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.771405359635633, 48.21899532128286]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.769431253800672, 48.2225980211675]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.726687570939344, 48.21750841884666]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.721194406876844, 48.21459167709428]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.719134470353406, 48.21241831050579]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.722739359269422, 48.21293306356102]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.751835962662977, 48.21733685040201]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.746686121354383, 48.21653619005824]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.746256967912, 48.21951000821845]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.733468195328992, 48.2185950056444]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.756299158463758, 48.2172224711195]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.780245920548719, 48.219338446481515]),
            {
              "Class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.763208528886121, 48.195185396367414]),
            {
              "Class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.761298796067518, 48.19455603501191]),
            {
              "Class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.760783811936658, 48.19378362641905]),
            {
              "Class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.764839311967176, 48.19037916831333]),
            {
              "Class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.765676161179822, 48.19092275242841]),
            {
              "Class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.766405722031873, 48.189864188569665]),
            {
              "Class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.767650267014783, 48.193640586512956]),
            {
              "Class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.76672758711366, 48.19568601919795]),
            {
              "Class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.766169687638563, 48.19618663713702]),
            {
              "Class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.758573671708387, 48.19341172183267]),
            {
              "Class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.759539266953748, 48.19185255399512]),
            {
              "Class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.598100335602707, 48.14878128802085]),
            {
              "Class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.597338588242478, 48.14789365554466]),
            {
              "Class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.59654465437407, 48.14660512947137]),
            {
              "Class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.596448094849533, 48.14593937832534]),
            {
              "Class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.596115500931687, 48.144300018798766]),
            {
              "Class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.599226863388962, 48.14998386236969]),
            {
              "Class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.59976330519194, 48.150570822948794]),
            {
              "Class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.490936084085059, 48.155362132698635]),
            {
              "Class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.49150457687678, 48.154856584201326]),
            {
              "Class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.492963698580882, 48.15504267670809]),
            {
              "Class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.491890814974925, 48.15445576727896]),
            {
              "Class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.688144850905182, 48.1704524796587]),
            {
              "Class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.68818776624942, 48.16946504685599]),
            {
              "Class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.685290980513336, 48.17351483148402]),
            {
              "Class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.626471200021426, 48.17702910472949]),
            {
              "Class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.626535573037783, 48.177311699733]),
            {
              "Class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.626776971849123, 48.17783753692277]),
            {
              "Class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625945487054507, 48.1758808229325]),
            {
              "Class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623225727113406, 48.17641025200294]),
            {
              "Class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62363342288367, 48.17676439407282]),
            {
              "Class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623928465875307, 48.177122110851975]),
            {
              "Class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.624389805825869, 48.17774095498612]),
            {
              "Class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62636391166083, 48.18003383258994]),
            {
              "Class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625806012185732, 48.179461517050925]),
            {
              "Class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.628778226909233, 48.181312383722045]),
            {
              "Class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62860656553228, 48.18105842582418]),
            {
              "Class": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.628043301639153, 48.18032158311241]),
            {
              "Class": 0,
              "system:index": "55"
            })]),
    urban = 
    /* color: #db4a18 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.57478657484526, 48.14011905703563]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.575365931992478, 48.14093523043024]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.576374442582077, 48.14159388721698]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.577104003434128, 48.14385616572768]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57755461454863, 48.144586373581944]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.577855021958298, 48.145889267674555]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.581610114579147, 48.14598948892718]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.580623061661667, 48.14680556898525]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.581245334153122, 48.147020324738634]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.573220164780563, 48.147950922619316]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57229748487944, 48.14820862366443]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57255497694487, 48.14961163998729]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.574529082779831, 48.14883855410503]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.574486167435593, 48.14845200679669]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.573263080124802, 48.14875265495479]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.571482093338913, 48.13881601647559]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.573649318222946, 48.13868714253501]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57457199812407, 48.137870933398816]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57405701399321, 48.13715494978853]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.574228675370163, 48.136639435406465]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.575988204483933, 48.137355426205886]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.576245696549362, 48.138458032508545]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.578155429367966, 48.1375988608031]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.579464347367233, 48.13789957253553]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.580601603989548, 48.1372122288448]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.582382590775437, 48.13768477862069]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.582253844742722, 48.1383148382228]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.581138045792526, 48.139374466479744]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.580987842087692, 48.13999018636609]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.581502826218552, 48.140219289554956]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568005950455612, 48.13652487595196]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.569207580094284, 48.137341106487746]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568199069504685, 48.13905944414734]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.564100654129929, 48.1404197540065]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.563027770523972, 48.14064885527831]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.562426955704636, 48.14092091171059]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561633021836228, 48.141493657381524]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.572512061600632, 48.14471523271317]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.572876842026657, 48.14514476081421]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.573735148911423, 48.14508749060845]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.572233111863083, 48.14713486077297]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56255570173735, 48.14694873958735]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561504275803513, 48.145717459357606]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56255570173735, 48.14533088854176]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561611564164108, 48.14346958089344]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.559701831345505, 48.14444319639003]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.630633926640591, 48.14321060171416]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.630381798993191, 48.14347548556583]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.631502962361417, 48.143407474977586]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.631878471623502, 48.14335020283338]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.631556606541714, 48.14278463697805]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.631819463025174, 48.1428240120179]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.632312989483914, 48.14284906884572]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.634630418072781, 48.142841909753315]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.635451174031338, 48.14295645511207]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.635477996121487, 48.142845489299646]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63591787839993, 48.14298867094818]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.636223650227628, 48.14300298909108]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.636550879727444, 48.14304236396342]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.635386801014981, 48.14248037428813]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62294135118588, 48.14186826388354]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.621407127629361, 48.14198997062721]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.622361994038663, 48.141352796828876]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623831844578824, 48.141467345510556]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62393913293942, 48.14171791986059]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.624035692463956, 48.14198281141498]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.624110794316373, 48.142233383248886]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.624218082676968, 48.14248395385965]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565221136802295, 48.14257911240509]),
            {
              "Class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565650290244678, 48.14246456620426]),
            {
              "Class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.567023581260303, 48.14221399549884]),
            {
              "Class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56760293840752, 48.142586271534135]),
            {
              "Class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47594346622574, 48.113919869732186]),
            {
              "Class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478078504601594, 48.11428518784476]),
            {
              "Class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478657861748811, 48.11320713378094]),
            {
              "Class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47894217590439, 48.113683486040024]),
            {
              "Class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.479038735428926, 48.11381600430442]),
            {
              "Class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.480310102501985, 48.11336114288911]),
            {
              "Class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.481501003304597, 48.11343993806829]),
            {
              "Class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.481838961640474, 48.11279166504732]),
            {
              "Class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.481313248673555, 48.11274510368682]),
            {
              "Class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478754421273347, 48.11246573463776]),
            {
              "Class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.4776654444133, 48.11227590608395]),
            {
              "Class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477756639519807, 48.11245498964401]),
            {
              "Class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477858563462373, 48.11263765423232]),
            {
              "Class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477129002610322, 48.11282031817128]),
            {
              "Class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477145095864412, 48.11299939983403]),
            {
              "Class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47619559387314, 48.11261616431445]),
            {
              "Class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47519244770157, 48.11246931630187]),
            {
              "Class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.474661370316621, 48.11268421569019]),
            {
              "Class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478786412409328, 48.10526911086249]),
            {
              "Class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478357258966945, 48.10514731708113]),
            {
              "Class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478131953409694, 48.105462547451424]),
            {
              "Class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47672647588589, 48.104875071114606]),
            {
              "Class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.476833764246486, 48.106307928445226]),
            {
              "Class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47823924177029, 48.10601419594741]),
            {
              "Class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.473593655756495, 48.10628643588034]),
            {
              "Class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.472552958658717, 48.10671628547015]),
            {
              "Class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.472005788019679, 48.1067234495995]),
            {
              "Class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478260699442409, 48.107232100232515]),
            {
              "Class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477842274836085, 48.10745418554984]),
            {
              "Class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478539649179957, 48.10748284164991]),
            {
              "Class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.478840056589625, 48.10753298978658]),
            {
              "Class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53409485720703, 48.12726126625061]),
            {
              "Class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53437380694458, 48.127683779186285]),
            {
              "Class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.534186052313537, 48.12703210523843]),
            {
              "Class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.531723784437865, 48.12736152387191]),
            {
              "Class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53212075137207, 48.126810104532815]),
            {
              "Class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([11.532002734175414, 48.12664181303592]),
            {
              "Class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([11.531519936552733, 48.12638042302176]),
            {
              "Class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529991787187125, 48.12655695643386]),
            {
              "Class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530018609277274, 48.12667332846474]),
            {
              "Class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530053477994468, 48.12677269206704]),
            {
              "Class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530376684180762, 48.126623199006836]),
            {
              "Class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530402165166404, 48.126723457873695]),
            {
              "Class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530438374988105, 48.12682908753957]),
            {
              "Class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530070912353064, 48.12687563613694]),
            {
              "Class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53035120319512, 48.12651398823273]),
            {
              "Class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529964965096976, 48.12645311655296]),
            {
              "Class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530319016686942, 48.12641104343797]),
            {
              "Class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530296217910315, 48.126300041862876]),
            {
              "Class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529927414170768, 48.12633942954603]),
            {
              "Class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529901933185126, 48.12623469404922]),
            {
              "Class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53025196146157, 48.12619709663931]),
            {
              "Class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528598379603888, 48.12803844221505]),
            {
              "Class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528761994353797, 48.128054554816416]),
            {
              "Class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528574239722754, 48.12821478541051]),
            {
              "Class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52844549369004, 48.12833741966159]),
            {
              "Class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52835563968804, 48.12827565500239]),
            {
              "Class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528937679044272, 48.12837233008828]),
            {
              "Class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52906508397248, 48.12843051408001]),
            {
              "Class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529203217736747, 48.12828639668758]),
            {
              "Class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529329281560447, 48.12815839145954]),
            {
              "Class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529704790822532, 48.12832846826631]),
            {
              "Class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529824149123694, 48.128381281475896]),
            {
              "Class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529567998162772, 48.12845557793308]),
            {
              "Class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529966306201484, 48.128242534792236]),
            {
              "Class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529871087781455, 48.12819419714988]),
            {
              "Class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529515695086982, 48.12787015474303]),
            {
              "Class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([11.5296270067611, 48.127890743133555]),
            {
              "Class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528999369851615, 48.12782271189862]),
            {
              "Class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528900128118064, 48.12777347871185]),
            {
              "Class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([11.541497557551788, 48.13265908867398]),
            {
              "Class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542785017878936, 48.13301711307488]),
            {
              "Class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54345020571463, 48.13295982933846]),
            {
              "Class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544351427943633, 48.13281661971792]),
            {
              "Class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54495224276297, 48.13278797774588]),
            {
              "Class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544973700435088, 48.13380475796996]),
            {
              "Class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54542431154959, 48.13380475796996]),
            {
              "Class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542193760965187, 48.132623286096624]),
            {
              "Class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545176377389748, 48.13219365322093]),
            {
              "Class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545648446176369, 48.13219365322093]),
            {
              "Class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544564833734352, 48.13212204739218]),
            {
              "Class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544543376062233, 48.131921550540454]),
            {
              "Class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543953290078957, 48.13188574744883]),
            {
              "Class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543964018915016, 48.132172171482786]),
            {
              "Class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([11.540144553277809, 48.13140598361278]),
            {
              "Class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([11.539951434228737, 48.13166376772366]),
            {
              "Class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54737042436393, 48.13237982790839]),
            {
              "Class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547327509019691, 48.132172171482786]),
            {
              "Class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547257771585304, 48.13180698055941]),
            {
              "Class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545825471971352, 48.132768884531814]),
            {
              "Class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546007862184364, 48.133091105915945]),
            {
              "Class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545546522233803, 48.133098266368194]),
            {
              "Class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([11.544838419053871, 48.13327011692235]),
            {
              "Class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543443670366127, 48.133341721150146]),
            {
              "Class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([11.541716327760536, 48.13344912730466]),
            {
              "Class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545675268266518, 48.130498956600974]),
            {
              "Class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545707454774696, 48.130942925162074]),
            {
              "Class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542649736497719, 48.1297900311022]),
            {
              "Class": 1,
              "system:index": "169"
            })]),
    crop = 
    /* color: #e3e261 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.723863840777211, 48.19417438685503]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.719357729632192, 48.19580500112585]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.726009607989125, 48.1994951470681]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.732275248247914, 48.199723984575414]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.735150576311879, 48.194374640525545]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.73961377211266, 48.195661966862694]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.74712395735436, 48.19777883318042]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.744720698077016, 48.20318502722087]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.742274523455434, 48.19171406360113]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.750471354204945, 48.19494678955735]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.737596750933461, 48.190283588798415]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.728112459856801, 48.187880301236234]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.723863840777211, 48.19019775904041]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.728327036577992, 48.1915137995326]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.728756190020375, 48.193173106762856]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.718070269305043, 48.19508982581703]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.721718073565297, 48.201554647834584]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.719786883074574, 48.19832233879929]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.71189045973473, 48.19580500112585]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.710560084063344, 48.194317425270974]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.713864565569692, 48.1993235182668]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.717855692583852, 48.18805196837113]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.71665406294518, 48.191284925353095]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.722275973040395, 48.18570580108986]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.730215311724477, 48.18564857615593]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.736738444048695, 48.18066976232563]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.741287470537953, 48.18227219196537]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.746265650469594, 48.18361704960738]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.7486259944027, 48.185076323302496]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.747638941485219, 48.18653555545219]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.746179819781117, 48.18833807898482]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.748025179583363, 48.18942528474974]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.75158715315514, 48.190970221687124]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.74935555525475, 48.193173106762856]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.69999323456198, 48.21416145762136]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.702139001773894, 48.216677893252765]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.707803827213347, 48.21730698283581]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.71097956268698, 48.2210527653017]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.715013605045378, 48.22276829934674]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.720034700321257, 48.22862927353743]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.703168970035613, 48.223454496866445]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.696388345645964, 48.22128150649624]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.693040948795378, 48.221224321293434]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.696087938236296, 48.21662070290737]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.701409440921843, 48.211273123381375]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.707031351017058, 48.21296038792365]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.712782007144988, 48.216534917269485]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.716386896061003, 48.22151024666867]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.719863038944304, 48.226342143948685]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.689951044010222, 48.210615361126095]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.68776236145407, 48.21015778240023]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.703126054691374, 48.21018638119037]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.704413515018523, 48.21427584374227]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.706516366886198, 48.2251127695614]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.717931848453581, 48.23317464015534]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.648451906131804, 48.22971562428698]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.645919900821745, 48.23440382088962]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.65055475799948, 48.23691926150549]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.632101159977019, 48.23791968646669]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.635233980106413, 48.237205099204886]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63081369964987, 48.2348611829274]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62806711761862, 48.235461464397765]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.628925424503386, 48.23780535317553]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.633989435123503, 48.234575332132884]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.627423387455046, 48.232231295379584]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.632659059452116, 48.23088771370586]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.635748964237273, 48.227485721519216]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.64630613891989, 48.2251127695614]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.647336107181609, 48.227685844966956]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.650211435245573, 48.231888256603824]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.776613145541587, 48.125921598037856]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.786912828158775, 48.12861423357439]),
            {
              "Class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.793435960482993, 48.12970270574379]),
            {
              "Class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.753267198275962, 48.128499656214544]),
            {
              "Class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.7553271347994, 48.13159315520748]),
            {
              "Class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.753181367587485, 48.134113646237964]),
            {
              "Class": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.752666383456626, 48.13892514920352]),
            {
              "Class": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.768716722201743, 48.137665037247025]),
            {
              "Class": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.772235780429282, 48.15049382235732]),
            {
              "Class": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.767858415316978, 48.15043655812017]),
            {
              "Class": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.763738542270103, 48.1516390936809]),
            {
              "Class": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.769489198398032, 48.1542731207255]),
            {
              "Class": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.629315729671491, 48.14483368802605]),
            {
              "Class": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63034033351518, 48.1447871557067]),
            {
              "Class": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.628623719745649, 48.1453455407547]),
            {
              "Class": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63307618671037, 48.14445426942251]),
            {
              "Class": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.633757467800153, 48.143828924480665]),
            {
              "Class": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63383256965257, 48.14475958022653]),
            {
              "Class": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.783271742522379, 48.056374262992435]),
            {
              "Class": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.783936930358072, 48.058224384969826]),
            {
              "Class": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.779323530852457, 48.058525561324906]),
            {
              "Class": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.617085498349207, 48.095891442586186]),
            {
              "Class": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.620969337002771, 48.09567647297837]),
            {
              "Class": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62251428939535, 48.09342640381472]),
            {
              "Class": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.622085135952966, 48.09164920953071]),
            {
              "Class": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.618372958676355, 48.09182119875872]),
            {
              "Class": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.618651908413904, 48.08994361854989]),
            {
              "Class": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62075476028158, 48.089800289000145]),
            {
              "Class": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625432532803552, 48.08786530098072]),
            {
              "Class": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62124828674032, 48.08825230440885]),
            {
              "Class": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625926059262293, 48.08961395998828]),
            {
              "Class": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.613029998318689, 48.0966939878475]),
            {
              "Class": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.613566440121668, 48.095088884797846]),
            {
              "Class": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.500630497127705, 48.08462984056205]),
            {
              "Class": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.524684547573262, 48.08715263589349]),
            {
              "Class": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.534125923305684, 48.08914498338836]),
            {
              "Class": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53697979369753, 48.08720997071292]),
            {
              "Class": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.536679386287862, 48.086593618054465]),
            {
              "Class": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496870598250343, 48.07757275351185]),
            {
              "Class": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496720394545509, 48.076999295015966]),
            {
              "Class": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([11.499338230544044, 48.07619644238346]),
            {
              "Class": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([11.503007492476417, 48.076311136383694]),
            {
              "Class": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496398529463722, 48.07639715671608]),
            {
              "Class": 3,
              "system:index": "112"
            })]),
    barren = 
    /* color: #ae6dab */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.46191406886634, 47.953112302286954]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477317108516933, 47.94089033566933]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.495422394662173, 47.897064637470656]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.524657117220034, 47.907161247429414]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.590966132853868, 48.382812155660304]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.591169980739, 48.38299385716564]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.591808346484545, 48.382569885977546]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.592360881541612, 48.3830116710038]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.589776349138718, 48.38373868377999]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.605621700930303, 48.39609711364306]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.73559495203038, 48.09280606905456]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.736174309177597, 48.0926197509334]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.739886486454209, 48.094210599318]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.740165436191758, 48.09436824827932]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.747160637302597, 48.09498450776316]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.746774399204453, 48.09435391657555]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.749478065891465, 48.0939096317769]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.740723335666855, 48.091817142078504]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.74158164255162, 48.09211812186711]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.719759190006455, 48.090842528770374]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.715295994205674, 48.09107185121055]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.714287483616074, 48.092247112665824]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.71463080636998, 48.093694653883304]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.71986647836705, 48.08973890022425]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.721926414890488, 48.08907957836327]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.722849094791611, 48.093250363388364]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.725938999576767, 48.091043185961446]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.7330605363738, 48.086897184977275]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.727245507229513, 48.085334778786276]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.728468594540304, 48.08473273804537]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.752159525135792, 48.09052182083248]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.754906107167042, 48.09118112420328]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.757116247395313, 48.091353114996814]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.75896160719756, 48.090536153604326]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.752996374348438, 48.08971917923316]),
            {
              "Class": 4,
              "system:index": "34"
            })]),
    green = 
    /* color: #8fffa2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.506299585755722, 48.15947209953348]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.506492704804794, 48.1601305184448]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.506878942902938, 48.15690991073959]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.507522673066513, 48.15716756679615]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.494798273499862, 48.15921445505046]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.495399088319198, 48.15920014143013]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.492888540681259, 48.159300336688574]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.49112901156749, 48.15934327745371]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.489390940125839, 48.159701115765436]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.485914797242538, 48.16030227851016]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484906286652938, 48.16068873655456]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484284014161483, 48.16127557468456]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.485399813111679, 48.1613900789028]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.486837477143661, 48.16190534472194]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.494154543336288, 48.1564804811032]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.492759794648544, 48.156408909147714]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.4948411888441, 48.15660931037151]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.483726114686386, 48.160788928905646]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484970659669296, 48.16025933854772]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48320245266356, 48.15648627011169]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.483138079647203, 48.15608546592014]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47848176479735, 48.15786043214112]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48721503734984, 48.1532368030697]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48820209026732, 48.15336564048258]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.487279410366197, 48.15246377179918]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.486142153743883, 48.15295049654959]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.493480677608629, 48.15250671828639]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.536397718703686, 48.16177059990626]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.536483549392162, 48.16147718451189]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.552065063288577, 48.16194433686691]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.552546019110505, 48.16416678346806]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.557470554861847, 48.16539046509521]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.558382505926911, 48.16268544559644]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55245733159925, 48.132711307826725]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542651175440803, 48.13106436510553]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.552092551173224, 48.13252513434105]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551770686091437, 48.129689485512664]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.5487022389784, 48.129016353956565]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549324511469855, 48.12925982809107]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549067019404426, 48.128658301661844]),
            {
              "Class": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548530577601447, 48.12825728012816]),
            {
              "Class": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.563171929114917, 48.14219967713587]),
            {
              "Class": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.569417650179732, 48.144769878660334]),
            {
              "Class": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565812761263716, 48.145306787653396]),
            {
              "Class": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.566134626345503, 48.145836532355396]),
            {
              "Class": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568248207049239, 48.14650228483548]),
            {
              "Class": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549095735302206, 48.12973572253709]),
            {
              "Class": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548897251835104, 48.13016895640738]),
            {
              "Class": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550699696293112, 48.13008660644893]),
            {
              "Class": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55025981401467, 48.12890862954486]),
            {
              "Class": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54922984575295, 48.12898023985448]),
            {
              "Class": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54748640989327, 48.129084074626014]),
            {
              "Class": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547400579204794, 48.12874750598319]),
            {
              "Class": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54723428224587, 48.128403774028776]),
            {
              "Class": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54627405141854, 48.12884059965827]),
            {
              "Class": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546354517688986, 48.12921297267105]),
            {
              "Class": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546595916500326, 48.12944570443294]),
            {
              "Class": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546660289516684, 48.12983597532798]),
            {
              "Class": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54748640989327, 48.12966411328093]),
            {
              "Class": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547368392696615, 48.12942780202715]),
            {
              "Class": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548350081196066, 48.130272788775514]),
            {
              "Class": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549959406605002, 48.12846822394548]),
            {
              "Class": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551311239948507, 48.128797633367654]),
            {
              "Class": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55047975515389, 48.12855415704191]),
            {
              "Class": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55147753690743, 48.12921297267105]),
            {
              "Class": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551472172489401, 48.12972140069386]),
            {
              "Class": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.552212462177511, 48.12985745804341]),
            {
              "Class": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55175648664498, 48.13061754102189]),
            {
              "Class": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551048383465048, 48.13162362323792]),
            {
              "Class": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550989576126808, 48.1319470607291]),
            {
              "Class": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55245406224894, 48.13239817732053]),
            {
              "Class": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.552271672035927, 48.131896936418755]),
            {
              "Class": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551311441208595, 48.13293521571447]),
            {
              "Class": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551295347954506, 48.132673857730985]),
            {
              "Class": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551507808011054, 48.13377873210248]),
            {
              "Class": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551421977322578, 48.13410094714971]),
            {
              "Class": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551459528248786, 48.13465833707234]),
            {
              "Class": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551840401928901, 48.13460821540855]),
            {
              "Class": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547768808644294, 48.13492326505383]),
            {
              "Class": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54764542702961, 48.13453661294685]),
            {
              "Class": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547409392636299, 48.1335628095546]),
            {
              "Class": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550499297421455, 48.135331394674665]),
            {
              "Class": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.533724712362975, 48.126369680937955]),
            {
              "Class": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.533907102575988, 48.126756394540536]),
            {
              "Class": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.533188270559997, 48.12746178129753]),
            {
              "Class": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.533225821486205, 48.127730327009004]),
            {
              "Class": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53409485720703, 48.12614767736906]),
            {
              "Class": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.534293340674132, 48.12611903167736]),
            {
              "Class": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.532447980871886, 48.12562489098088]),
            {
              "Class": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.531487750044555, 48.12597938370157]),
            {
              "Class": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.532196562997367, 48.12518553694569]),
            {
              "Class": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528849166146781, 48.12448011892653]),
            {
              "Class": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52861313175347, 48.12451950800531]),
            {
              "Class": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528505843392875, 48.12435478983855]),
            {
              "Class": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528967183343436, 48.12402535192031]),
            {
              "Class": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528830390683677, 48.128124376030584]),
            {
              "Class": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528457563630607, 48.12805186938321]),
            {
              "Class": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528729807845618, 48.12778243020388]),
            {
              "Class": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529205899945762, 48.128378596059775]),
            {
              "Class": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529313188306357, 48.128306089771286]),
            {
              "Class": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529006075374152, 48.12831862172969]),
            {
              "Class": 5,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528425377122428, 48.128139593462116]),
            {
              "Class": 5,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.528532665483024, 48.12838665230773]),
            {
              "Class": 5,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52654917191651, 48.128231345527226]),
            {
              "Class": 5,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.5266101921716, 48.12807648584905]),
            {
              "Class": 5,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52681202839997, 48.12824074450999]),
            {
              "Class": 5,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.526904564610984, 48.12818793115587]),
            {
              "Class": 5,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.527101036421325, 48.12828013070485]),
            {
              "Class": 5,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([11.527274709455039, 48.128153468175164]),
            {
              "Class": 5,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([11.525835704318549, 48.127816445859295]),
            {
              "Class": 5,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([11.526089173070456, 48.12800621699712]),
            {
              "Class": 5,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([11.526305090896155, 48.12773856787811]),
            {
              "Class": 5,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([11.526594769469764, 48.12784419545624]),
            {
              "Class": 5,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52636007618096, 48.12795429854797]),
            {
              "Class": 5,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([11.542209854219276, 48.131215033028134]),
            {
              "Class": 5,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54234932908805, 48.130942925162074]),
            {
              "Class": 5,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543272008989174, 48.13097872891103]),
            {
              "Class": 5,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546007862184364, 48.130205362379634]),
            {
              "Class": 5,
              "system:index": "117"
            })]),
    asphalt = 
    /* color: #cccfc9 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.549002646388068, 48.132023894678554]),
            {
              "Class": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54921722310926, 48.13314093637131]),
            {
              "Class": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54947471517469, 48.13442980043744]),
            {
              "Class": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550032614649787, 48.129460335335146]),
            {
              "Class": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550740717829719, 48.12940304763101]),
            {
              "Class": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550976752223029, 48.12997592179664]),
            {
              "Class": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.566018885284208, 48.13410042714235]),
            {
              "Class": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565804308563017, 48.134358197726925]),
            {
              "Class": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56648022523477, 48.133341428461975]),
            {
              "Class": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56697375169351, 48.133506117807954]),
            {
              "Class": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.569559401183866, 48.133864136303046]),
            {
              "Class": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57022458901956, 48.13412906838233]),
            {
              "Class": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57072884431436, 48.13385697595762]),
            {
              "Class": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.572509831100248, 48.13413622868982]),
            {
              "Class": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561461608802102, 48.14214020810321]),
            {
              "Class": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.560689132605813, 48.1424695298225]),
            {
              "Class": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.562942188178322, 48.1415531511027]),
            {
              "Class": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.564111631308815, 48.141202345544144]),
            {
              "Class": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56782824396477, 48.14273661301383]),
            {
              "Class": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568203753226856, 48.14319479385517]),
            {
              "Class": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568654364341358, 48.14393217005941]),
            {
              "Class": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.569685871081221, 48.14476271983582]),
            {
              "Class": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.569439107851851, 48.1443331885377]),
            {
              "Class": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568591529803145, 48.14466965502625]),
            {
              "Class": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56747573085295, 48.14516361247106]),
            {
              "Class": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.566574508623946, 48.14539985130773]),
            {
              "Class": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.475730316644315, 48.10754526659918]),
            {
              "Class": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.475840287213925, 48.10751750603621]),
            {
              "Class": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.475632416015271, 48.10738676253797]),
            {
              "Class": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477504597907666, 48.10754437109739]),
            {
              "Class": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477527396684293, 48.10724885465196]),
            {
              "Class": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477968620067243, 48.107118110470296]),
            {
              "Class": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477390154791921, 48.108679155666856]),
            {
              "Class": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.477376743746847, 48.10890660759989]),
            {
              "Class": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.476019545985311, 48.10861647188631]),
            {
              "Class": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.475241705370992, 48.108555578997716]),
            {
              "Class": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.474729403449148, 48.10851438670864]),
            {
              "Class": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.474013253642172, 48.10856632480683]),
            {
              "Class": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47405616898641, 48.10848035827101]),
            {
              "Class": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.47505395073995, 48.1088206416333]),
            {
              "Class": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.480928910031722, 48.11063765800502]),
            {
              "Class": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.479695093884871, 48.110497967941654]),
            {
              "Class": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.480617773785994, 48.11099583591959]),
            {
              "Class": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.483257067456648, 48.11093494585023]),
            {
              "Class": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484067094579146, 48.10991054916064]),
            {
              "Class": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484528434529707, 48.10960967352611]),
            {
              "Class": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48448015476744, 48.108864640564065]),
            {
              "Class": 6,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.487961839890048, 48.114588222309884]),
            {
              "Class": 6,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.562450186860316, 48.13140662303302]),
            {
              "Class": 6,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.563287036072962, 48.1318291018653]),
            {
              "Class": 6,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.558394686829798, 48.12951616670249]),
            {
              "Class": 6,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.558437602174036, 48.13086240788945]),
            {
              "Class": 6,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.560004012238734, 48.13023225683372]),
            {
              "Class": 6,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565003649842494, 48.1291294738798]),
            {
              "Class": 6,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.555798308503382, 48.130010269960955]),
            {
              "Class": 6,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.5488674804089, 48.131234766242336]),
            {
              "Class": 6,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547569291245692, 48.13055449413508]),
            {
              "Class": 6,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546753899705164, 48.13065474532757]),
            {
              "Class": 6,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548516111027949, 48.130259110019374]),
            {
              "Class": 6,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550704793584101, 48.13031729187352]),
            {
              "Class": 6,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551391439091914, 48.13031729187352]),
            {
              "Class": 6,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551573829304926, 48.13210030996181]),
            {
              "Class": 6,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55174549068188, 48.13298105508923]),
            {
              "Class": 6,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551974384186389, 48.13431303673604]),
            {
              "Class": 6,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549560396072986, 48.13483573468636]),
            {
              "Class": 6,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.532196562997367, 48.12549169251285]),
            {
              "Class": 6,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53206379365113, 48.12584439578707]),
            {
              "Class": 6,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.531221580020453, 48.125756667787776]),
            {
              "Class": 6,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.53181703042176, 48.125257152446565]),
            {
              "Class": 6,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.532475512734916, 48.125220449514856]),
            {
              "Class": 6,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549892172775257, 48.13191381035126]),
            {
              "Class": 6,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547907338104237, 48.13214294958099]),
            {
              "Class": 6,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547875151596058, 48.133209865655154]),
            {
              "Class": 6,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547950253448475, 48.133639490028415]),
            {
              "Class": 6,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550374970397938, 48.13277307719069]),
            {
              "Class": 6,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549187410750838, 48.130726348307334]),
            {
              "Class": 6,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550034988799544, 48.13114167201221]),
            {
              "Class": 6,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550925482192488, 48.13081943839533]),
            {
              "Class": 6,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548200357833357, 48.13106290398148]),
            {
              "Class": 6,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.546966541686507, 48.13125624347764]),
            {
              "Class": 6,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547299135604353, 48.130260895336164]),
            {
              "Class": 6,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547985781112166, 48.13021076937995]),
            {
              "Class": 6,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549938429275008, 48.13010335645187]),
            {
              "Class": 6,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548350561538191, 48.1307979560823]),
            {
              "Class": 6,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547728289046736, 48.13137081468741]),
            {
              "Class": 6,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54844203884568, 48.131871494818895]),
            {
              "Class": 6,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54843131000962, 48.13225100642523]),
            {
              "Class": 6,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54812673642355, 48.13305416508839]),
            {
              "Class": 6,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548201838275967, 48.134593640456444]),
            {
              "Class": 6,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548995772144375, 48.13525237860614]),
            {
              "Class": 6,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54884556843954, 48.13393489385545]),
            {
              "Class": 6,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54959658696371, 48.134078100357186]),
            {
              "Class": 6,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.550454893848476, 48.1341497034583]),
            {
              "Class": 6,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549939909717617, 48.132989720926965]),
            {
              "Class": 6,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54785851552206, 48.1279628271457]),
            {
              "Class": 6,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.547300616046963, 48.12804876108781]),
            {
              "Class": 6,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54809454991537, 48.12759044506842]),
            {
              "Class": 6,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549467840930996, 48.12799147180906]),
            {
              "Class": 6,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549553671619472, 48.128836482190195]),
            {
              "Class": 6,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549660959980068, 48.12948097228731]),
            {
              "Class": 6,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.548416414997158, 48.12953825990451]),
            {
              "Class": 6,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.551785269519863, 48.130268671422265]),
            {
              "Class": 6,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55262211873251, 48.130268671422265]),
            {
              "Class": 6,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543186178300697, 48.13257555073079]),
            {
              "Class": 6,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543443670366127, 48.132639995412006]),
            {
              "Class": 6,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543572416398842, 48.13228912894681]),
            {
              "Class": 6,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.543186178300697, 48.13246098220888]),
            {
              "Class": 6,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54460238466056, 48.132418018947305]),
            {
              "Class": 6,
              "system:index": "107"
            })]),
    geometrySchlosspark = 
    /* color: #9999ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.49243249688733, 48.16517648427539],
          [11.489600084167604, 48.163802518212485],
          [11.488312623840455, 48.16245714078016],
          [11.485394380432252, 48.16211363450426],
          [11.483377359253053, 48.162485766199325],
          [11.482519052368287, 48.16128348484077],
          [11.481617830139283, 48.159537264112785],
          [11.481574914795045, 48.157819611966865],
          [11.483634851318483, 48.15326755565417],
          [11.485308549743776, 48.15152361662223],
          [11.487325570922975, 48.15003475556701],
          [11.488312623840455, 48.14888944843815],
          [11.490157983642701, 48.1493475743569],
          [11.492647073608522, 48.14863175081165],
          [11.494149110656862, 48.148603117662155],
          [11.499470613342408, 48.14871765016425],
          [11.498612306457643, 48.15338463219662],
          [11.498232483498878, 48.15988966837962],
          [11.496816277139015, 48.161378243496095]]]),
    geometryInnenstadt = 
    /* color: #ffff99 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.57318811039294, 48.142185827359896],
          [11.567587657969844, 48.140381681184195],
          [11.566965385478388, 48.140310086773994],
          [11.565613552134883, 48.13912160497866],
          [11.565141483348262, 48.136186080233884],
          [11.567265792888056, 48.132634586924745],
          [11.568317218821894, 48.13256298171086],
          [11.57042007068957, 48.13180396030476],
          [11.573617263835322, 48.133508162494294],
          [11.575591369670283, 48.13471109469276],
          [11.576299472850215, 48.13442468482072],
          [11.581814094584834, 48.134696774237085],
          [11.583788200419795, 48.13592831882576],
          [11.58490399936999, 48.13919320104637],
          [11.582994266551387, 48.141040345073314],
          [11.577265068095576, 48.14211423546585]]]),
    geometryForst = 
    /* color: #99ffff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.413708532234432, 48.070062453581954],
          [11.419373357673885, 48.055894090276546],
          [11.41903003491998, 48.04906664466226],
          [11.433277929207089, 48.039828071495556],
          [11.450873220344784, 48.05009942563518],
          [11.45645221509576, 48.079238259508635],
          [11.445036733528378, 48.0821053632918],
          [11.425295675178768, 48.073905021451985]]]),
    geometryIsar = 
    /* color: #ff99ff */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.627979518507097, 48.18273532271216],
          [11.618366481397722, 48.18599722737108],
          [11.614389106262157, 48.18165816320246],
          [11.611513778198193, 48.179569246774925],
          [11.610011741149853, 48.17742301110901],
          [11.610784217346142, 48.17504773890146],
          [11.607222243774364, 48.172443398332284],
          [11.605806037414501, 48.170525832265845],
          [11.606621428955028, 48.168837169937326],
          [11.614432021606396, 48.168178862779804]]]),
    geometrymunich = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[11.320662923560784, 48.26919096671258],
          [11.320662923560784, 47.99973688019252],
          [11.828780599342034, 47.99973688019252],
          [11.828780599342034, 48.26919096671258]]], null, false),
    munich = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[11.546, 48.142],
          [11.546, 48.128],
          [11.568, 48.128],
          [11.568, 48.142]]]),
    trainingPoints = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([11.558817592912751, 48.13707499018407]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([11.564310756975251, 48.14406257426567]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([11.595896450334626, 48.154828464700934]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([11.60653945570572, 48.1619281350909]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([11.600702968889314, 48.17051513296139]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57855865126236, 48.173033712963715]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549204555803376, 48.170744099891344]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530321804338532, 48.16307315120563]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([11.602419582658845, 48.135471148166]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([11.637953487688142, 48.16066858784419]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([11.664046016985017, 48.159179992135094]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([11.626108852678376, 48.141771667891284]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([11.572035518938142, 48.13627307543759]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([11.568430630022126, 48.13535658610474]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57907363539322, 48.13741866409837]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54937621718033, 48.13295072377114]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549032894426423, 48.12916985520572]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([11.493586269670564, 48.152079941421704]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([11.494616237932282, 48.159179992135094]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([11.492727962785798, 48.1616991288009]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([11.486891475969392, 48.15883646391419]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([11.487578121477204, 48.15333969953324]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([11.610830990129548, 48.172117880002546]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([11.618212429338532, 48.179673012759686]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([11.622332302385407, 48.18230560047499]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([11.62027236586197, 48.176696881239074]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([11.61477920179947, 48.17715475887208]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([11.614435879045564, 48.17291923473809]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([11.612890926652986, 48.170057196034456]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([11.652201381975251, 48.16799642925816]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([11.559675899797517, 48.10659342435418]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([11.564997402483064, 48.12011755412849]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([11.52963515883072, 48.12424285120777]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([11.592463222795564, 48.11965916733604]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([11.611345974260407, 48.1183985825673]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([11.61804076796158, 48.10487400031495]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([11.555727688127595, 48.09593206807894]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([11.537531582170564, 48.09673461270612]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([11.510237423235017, 48.10120570345256]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([11.530321804338532, 48.10097642620667]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([11.642931667619782, 48.125617876613696]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([11.64001342421158, 48.14555160858142]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625593868547517, 48.15322517734652]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([11.587141720110017, 48.151163734278754]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([11.562765804582673, 48.1616991288009]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54662963514908, 48.160439575931214]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([11.540278164201814, 48.15311065490424]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([11.545771328264314, 48.15185089116959]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([11.527231899553376, 48.12275319881213]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([11.504572597795564, 48.11988836124351]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([11.499079433733064, 48.133065291200325]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([11.509722439104157, 48.142229857345605]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([11.536158291154939, 48.137991448843266]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([11.553496090227204, 48.14154257163045]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([11.556929317766267, 48.14074072666592]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([11.559160915666657, 48.140626176362815]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561049190813142, 48.146811526954856]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([11.565169063860017, 48.15299613220634]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([11.57358047133072, 48.15734781504202]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([11.583365169817048, 48.15986704167592]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([11.600224738164172, 48.18409594755031]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([11.592499976201282, 48.1791742151319]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([11.625115637822375, 48.16097114677606]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([11.617219214482532, 48.15787941792335]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([11.614472632451282, 48.15421490541072]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([11.61275601868175, 48.14768684417475]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([11.614129309697375, 48.142647071061624]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([11.614472632451282, 48.13600297768661]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([11.623914008183704, 48.12408727763529]),
            {
              "Class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([11.633870368046985, 48.118586791249356]),
            {
              "Class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([11.650692330550871, 48.10345827062074]),
            {
              "Class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([11.6549838649747, 48.09944594700031]),
            {
              "Class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([11.67867313499423, 48.152154355165806]),
            {
              "Class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([11.670605050277434, 48.136920308796256]),
            {
              "Class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([11.648804055404387, 48.138982323986795]),
            {
              "Class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([11.662365304183684, 48.145855109828226]),
            {
              "Class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([11.64897571678134, 48.1543302784139]),
            {
              "Class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([11.634212838363371, 48.170932969481285]),
            {
              "Class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([11.589752541732512, 48.16795633061305]),
            {
              "Class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56057010765048, 48.168872237897446]),
            {
              "Class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55009876365634, 48.17814487791683]),
            {
              "Class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([11.529156075668059, 48.17562654896599]),
            {
              "Class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([11.516968117904387, 48.150665512410534]),
            {
              "Class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([11.574245791866824, 48.081979118142826]),
            {
              "Class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([11.576649051144168, 48.06833024066796]),
            {
              "Class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([11.594158511593387, 48.06546236921594]),
            {
              "Class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([11.617332797482058, 48.06110289855602]),
            {
              "Class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([11.63999209923987, 48.05743147899958]),
            {
              "Class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([11.644626956417605, 48.05651358320016]),
            {
              "Class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([11.626430850460574, 48.05135011441479]),
            {
              "Class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([11.592270236446902, 48.05559567103648]),
            {
              "Class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([11.524120669796512, 48.06029979790079]),
            {
              "Class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([11.535278659298465, 48.05995560807037]),
            {
              "Class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([11.54111514611487, 48.06603595629044]),
            {
              "Class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([11.56686435265784, 48.07635943060308]),
            {
              "Class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([11.55484805627112, 48.08266720096238]),
            {
              "Class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([11.562229495480105, 48.06523293259638]),
            {
              "Class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([11.571155887081668, 48.05375979761616]),
            {
              "Class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([11.502834659054324, 48.06225016347298]),
            {
              "Class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([11.48669848962073, 48.061791260574445]),
            {
              "Class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([11.471420627071902, 48.06592123938691]),
            {
              "Class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([11.46472583337073, 48.07704758858939]),
            {
              "Class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([11.484295230343387, 48.07440959965778]),
            {
              "Class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([11.496998172237918, 48.07039500916516]),
            {
              "Class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([11.51965747399573, 48.09046482966702]),
            {
              "Class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([11.549183230831668, 48.11877862372187]),
            {
              "Class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([11.561542849972293, 48.13317097875049]),
            {
              "Class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([11.559139590694949, 48.129963000711896]),
            {
              "Class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([11.575619082882449, 48.12973385175486]),
            {
              "Class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([11.587978702023074, 48.13213986480775]),
            {
              "Class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([11.602398257687137, 48.125494411618305]),
            {
              "Class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([11.603771548702762, 48.12091083943015]),
            {
              "Class": 1,
              "system:index": "111"
            })]);
