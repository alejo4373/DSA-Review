const arr = [21, 247, 273, 383, 469, 486, 622, 759, 1019, 1134, 1296, 1347, 1352, 1427, 1543, 1594, 1609, 1696, 1767, 1837, 1922, 2036, 2206, 2344, 2383, 2431, 2432, 2440, 2466, 2515, 2538, 2571, 2628, 2703, 2719, 2787, 2819, 2833, 3050, 3180, 3197, 3278, 3302, 3370, 3413, 3472, 3475, 3505, 3772, 3835, 3883, 4040, 4109, 4195, 4209, 4233, 4386, 4465, 4587, 4602, 4690, 4777, 4872, 5076, 5204, 5281, 5319, 5417, 5514, 5520, 5567, 5636, 5654, 5750, 5904, 6080, 6271, 6301, 6425, 6482, 6501, 6569, 6882, 6931, 7158, 7208, 7219, 7397, 7530, 7949, 7976, 8065, 8066, 8321, 8342, 8379, 8402, 8521, 8724, 8759, 8761, 8787, 8836, 8989, 9024, 9074, 9098, 9225, 9241, 9354, 9381, 9851, 9874, 9940, 9957, 9992, 10035, 10072, 10143, 10181, 10198, 10329, 10339, 10662, 10819, 11089, 11296, 11457, 11467, 11497, 11603, 11754, 12004, 12045, 12068, 12085, 12147, 12259, 12260, 12311, 12446, 12597, 12638, 12639, 12762, 12825, 12943, 13084, 13243, 13243, 13329, 13384, 13387, 13452, 13737, 13867, 13892, 14021, 14240, 14292, 14358, 14453, 14550, 14602, 14663, 14901, 15053, 15059, 15064, 15243, 15247, 15329, 15424, 15458, 15585, 15686, 15801, 15966, 16163, 16181, 16218, 16228, 16266, 16302, 16322, 16399, 16602, 16672, 17040, 17056, 17073, 17183, 17234, 17351, 17469, 17559, 17592, 17798, 17809, 18007, 18189, 18234, 18274, 18355, 18383, 18407, 18408, 18427, 18516, 18675, 18689, 18826, 18851, 18890, 19329, 19468, 19475, 19701, 19719, 20150, 20471, 20544, 20545, 20699, 20711, 20716, 20746, 20908, 20974, 21025, 21322, 21347, 21419, 21575, 21636, 21747, 21961, 22004, 22219, 22337, 22746, 22795, 22858, 22970, 23076, 23214, 23458, 23473, 23624, 23628, 23665, 23725, 23767, 23991, 24109, 24293, 24326, 24336, 24462, 24498, 24569, 24631, 24689, 24813, 24839, 24880, 25099, 25234, 25298, 25448, 25506, 25683, 25830, 25990, 26075, 26082, 26109, 26122, 26287, 26527, 26586, 26602, 26611, 26670, 26694, 26727, 26775, 26897, 26942, 27145, 27179, 27312, 27320, 27373, 27433, 27567, 27710, 27753, 27773, 27846, 27851, 28125, 28305, 28310, 28339, 28388, 28403, 28465, 28488, 28656, 28981, 29020, 29293, 29446, 29463, 29491, 29525, 29543, 29826, 29866, 29886, 29968, 30008, 30204, 30249, 30370, 30396, 30430, 30907, 30955, 30971, 30980, 31057, 31087, 31271, 31498, 31554, 31556, 31557, 31755, 31793, 31800, 31823, 31824, 31832, 31917, 31975, 32018, 32041, 32119, 32169, 32247, 32370, 32483, 32502, 32549, 33128, 33360, 33390, 33498, 33565, 33696, 33823, 33835, 34244, 34435, 34652, 34766, 34792, 34889, 34911, 34930, 35088, 35199, 35221, 35328, 35363, 35395, 35403, 35462, 35687, 35717, 36685, 36699, 36778, 36789, 36931, 37033, 37275, 37350, 37415, 37476, 37504, 37590, 37601, 37731, 37747, 37821, 38096, 38177, 38274, 38293, 38314, 38361, 38366, 38378, 38415, 38671, 38896, 39291, 39527, 39599, 39631, 39646, 39743, 39807, 39927, 40082, 40123, 40144, 40146, 40200, 40265, 40287, 40447, 40666, 40667, 40730, 40902, 40930, 41067, 41106, 41343, 41380, 41414, 41439, 41490, 41666, 41766, 41803, 41804, 41850, 41859, 41893, 42010, 42107, 42140, 42172, 42445, 42523, 42594, 43016, 43085, 43220, 43224, 43265, 43345, 43370, 43428, 43462, 43500, 43558, 43743, 43863, 43932, 44058, 44078, 44108, 44116, 44171, 44203, 44321, 44333, 44543, 44637, 44698, 44701, 44842, 44994, 45031, 45388, 45432, 45579, 45612, 45647, 45754, 45768, 45890, 45933, 45996, 46025, 46213, 46290, 46300, 46348, 46411, 46436, 46454, 46518, 46793, 47399, 47420, 47578, 47593, 47650, 47828, 47937, 47999, 48027, 48101, 48109, 48556, 48622, 48845, 48879, 48945, 48956, 49083, 49274, 49316, 49363, 49546, 49578, 49586, 49612, 49617, 49622, 49743, 49751, 49805, 49963, 50145, 50168, 50324, 50540, 50605, 50694, 50971, 51162, 51184, 51475, 51625, 51882, 51919, 52002, 52033, 52160, 52378, 52405, 52464, 52576, 52576, 52736, 52761, 52945, 53117, 53246, 53308, 53457, 53501, 53530, 53598, 53688, 53721, 53837, 53880, 53889, 53931, 53958, 54037, 54153, 54175, 54277, 54282, 54359, 54435, 54730, 54958, 54980, 55027, 55199, 55319, 55666, 55797, 55845, 56214, 56229, 56425, 56462, 56515, 56579, 56639, 57095, 57178, 57185, 57191, 57208, 57492, 57495, 57521, 57556, 57643, 57799, 57826, 57901, 57904, 58011, 58060, 58255, 58278, 58290, 58334, 58378, 58386, 58477, 58699, 58747, 58899, 59104, 59291, 59337, 59384, 59424, 59505, 59531, 59655, 59728, 59811, 59914, 59952, 60275, 60308, 60362, 60378, 60461, 60706, 60842, 60876, 60884, 61050, 61217, 61294, 61325, 61399, 61422, 61428, 61543, 61550, 61567, 61611, 61800, 62167, 62217, 62227, 62461, 62633, 62840, 62841, 63061, 63120, 63173, 63228, 63233, 63247, 63356, 63472, 63511, 63547, 63623, 63650, 63886, 63995, 64069, 64146, 64264, 64414, 64608, 64764, 64833, 64958, 65023, 65033, 65140, 65304, 65559, 65743, 65799, 65850, 65930, 65941, 66039, 66129, 66299, 66348, 66420, 66441, 66569, 66656, 66768, 66772, 66900, 66940, 67188, 67188, 67286, 67310, 67343, 67605, 67644, 67903, 67970, 68275, 68342, 68396, 68434, 68491, 68663, 68667, 68896, 68967, 69008, 69289, 69322, 69377, 69396, 69601, 69827, 69946, 69951, 69982, 70022, 70030, 70236, 70248, 70431, 70474, 70543, 70562, 70563, 70582, 70601, 70605, 71082, 71133, 71173, 71273, 71303, 71530, 71583, 71619, 71626, 71650, 71764, 71829, 72060, 72389, 72444, 72773, 72955, 73005, 73021, 73150, 73251, 73389, 73405, 73607, 73650, 73752, 73776, 73996, 74404, 74485, 74676, 74685, 74727, 74740, 74825, 75136, 75170, 75198, 75255, 75413, 75438, 75731, 75739, 75874, 75911, 75986, 76036, 76066, 76066, 76085, 76223, 76362, 76576, 76711, 76898, 76945, 77138, 77332, 77379, 77521, 77620, 77728, 77737, 77771, 77807, 77828, 77862, 77863, 77962, 78061, 78137, 78183, 78348, 78447, 78463, 78625, 78706, 78716, 78724, 78780, 78785, 78975, 79212, 79218, 79335, 79341, 79508, 79570, 79583, 79624, 79635, 79654, 79785, 79882, 80071, 80249, 80257, 80274, 80279, 80397, 80422, 80541, 80549, 80717, 80767, 81019, 81054, 81065, 81143, 81176, 81334, 81348, 81617, 81631, 81790, 81794, 81866, 81938, 82199, 82218, 82367, 82518, 82645, 82744, 82761, 82797, 82835, 82918, 83111, 83241, 83347, 83515, 83651, 83726, 83923, 84229, 84239, 84256, 84258, 84393, 84577, 84820, 84828, 84891, 85065, 85187, 85309, 85540, 85697, 85964, 86049, 86093, 86242, 86428, 86498, 86671, 86884, 87067, 87210, 87330, 87433, 87735, 87738, 87740, 87791, 87950, 88143, 88166, 88257, 88368, 88379, 88408, 88524, 88610, 88636, 88900, 89019, 89040, 89228, 89246, 89333, 89337, 89686, 89780, 89906, 90006, 90079, 90122, 90209, 90368, 90426, 90656, 90817, 90838, 90878, 90962, 91034, 91255, 91429, 91579, 91663, 91835, 91845, 92021, 92074, 92113, 92220, 92246, 92381, 92427, 92529, 92712, 92802, 92985, 92994, 93012, 93272, 93363, 93485, 93515, 93562, 93579, 93585, 93720, 93815, 93941, 94061, 94125, 94205, 94340, 94404, 94551, 94619, 94711, 94907, 94979, 95207, 95315, 95435, 95583, 95602, 95630, 95788, 95932, 96032, 96082, 96146, 96172, 96178, 96271, 96495, 96815, 97155, 97218, 97426, 97560, 97600, 97629, 97713, 98046, 98081, 98185, 98230, 98409, 98538, 98676, 98716, 99048, 99108, 99147, 99170, 99174, 99219, 99247, 99248, 99339, 99353, 99393, 99471, 99521, 99915, 99932]

module.exports = arr;