var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cateogries = [];
var userDetails = {
    "FirstName": "",
    "LastName": "",
    "UserID": "",
    "UserTypeID": ""
};

var catDetails = [
    {
        "ID": 1,
        "ShowDetails": {
            "Name": "No Poverty",
            "Goal": "End poverty in all its forms everywhere"
        },
        "ImgUrl": "I01.jpg"
    }, {

        "ID": 2,
        "ShowDetails": {
            "Name": "Zero Hunger",
            "Goal": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture"
        },
        "ImgUrl": "I02.jpg"
    }, {

        "ID": 3,
        "ShowDetails": {
            "Name": "Good Health & Well-Being",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },

        "ImgUrl": "I03.jpg"
    }, {

        "ID": 4,
        "ShowDetails": {
            "Name": "Quality Education",
            "Goal": "Ensure inclusive and quality education for all and promote lifelong learning"
        },
        "ImgUrl": "I04.jpg"
    }, {

        "ID": 5,
        "ShowDetails": {
            "Name": "Gender Equility",
            "Goal": "Achieve gender equality and empower all women and girls"
        },
        "ImgUrl": "I05.jpg"
    }, {

        "ID": 6,
        "ShowDetails": {
            "Name": "Clean Water & Sanitation",
            "Goal": "Ensure access to water and sanitation for all"
        },
        "ImgUrl": "I06.jpg"
    }, {

        "ID": 7,
        "ShowDetails": {
            "Name": "Affordable & Clean Energy",
            "Goal": "Ensure access to affordable, reliable, sustainable and modern energy for all"
        },

        "ImgUrl": "I07.jpg"
    }, {

        "ID": 8,
        "ShowDetails": {
            "Name": "Decent Work & Economic Growth",
            "Goal": "Promote inclusive and sustainable economic growth, employment and decent work for all"
        },
        "ImgUrl": "I08.jpg"
    }, {

        "ID": 9,
        "ShowDetails": {
            "Name": "Industry, Innovation & Infrastucture",
            "Goal": "Build resilient infrastructure, promote sustainable industrialization and foster innovation"
        },
        "ImgUrl": "I09.jpg"
    }, {

        "ID": 10,
        "ShowDetails": {
            "Name": "Reduce Inequality",
            "Goal": "Reduce inequality within and among countries"
        },
        "ImgUrl": "I10.jpg"
    }, {

        "ID": 11,
        "ShowDetails": {
            "Name": "Sustainable Cities & Communities",
            "Goal": "Make cities inclusive, safe, resilient and sustainable"
        },

        "ImgUrl": "I11.jpg"
    }, {

        "ID": 12,
        "ShowDetails": {
            "Name": "Responsibile Consumption & Production",
            "Goal": "Ensure sustainable consumption and production patterns"
        },
        "ImgUrl": "I12.jpg"
    }, {

        "ID": 13,
        "ShowDetails": {
            "Name": "Climate Action",
            "Goal": "End poverty in all its forms everywhere"
        },
        "ImgUrl": "I13.jpg"
    }, {

        "ID": 14,
        "ShowDetails": {
            "Name": "Life Below Water",
            "Goal": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture"
        },
        "ImgUrl": "I14.jpg"
    }, {

        "ID": 15,
        "ShowDetails": {
            "Name": "Life On Land",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },

        "ImgUrl": "I15.jpg"
    }, {

        "ID": 16,
        "ShowDetails": {
            "Name": "Peace Justice & Strong Institutions",
            "Goal": "Ensure inclusive and quality education for all and promote lifelong learning"
        },
        "ImgUrl": "I16.jpg"
    }, {

        "ID": 17,
        "ShowDetails": {
            "Name": "Partnership For The Goals",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },
        "ImgUrl": "I17.jpg"
    },
{
    "ID": 18,
    "ShowDetails": {
        "Name": "Sports",
        "Goal": "N/A"
    },
    "ImgUrl": "I18.jpg"
},
{
    "ID": 19,
    "ShowDetails": {
        "Name": "Children & Parenting",
        "Goal": "N/A"
    },
    "ImgUrl": "I19.jpg"
},
{

    "ID": 20,
    "ShowDetails": {
        "Name": "Technology",
        "Goal": "N/A"
    },
    "ImgUrl": "I20.jpg"
}
];

var countries = [
  //{ name: 'Afghanistan', code: 'AF' },{
  //{ name: 'Åland Islands', code: 'AX' },{
  //{ name: 'Albania', code: 'AL' },{
  //{ name: 'Algeria', code: 'DZ' },{
  //{ name: 'American Samoa', code: 'AS' },{
  //{ name: 'AndorrA', code: 'AD' },{
  //{ name: 'Angola', code: 'AO' },{
  //{ name: 'Anguilla', code: 'AI' },{
  //{ name: 'Antarctica', code: 'AQ' },{
  //{ name: 'Antigua and Barbuda', code: 'AG' },{
  //{ name: 'Argentina', code: 'AR' },{
  //{ name: 'Armenia', code: 'AM' },{
  //{ name: 'Aruba', code: 'AW' },{
  //{ name: 'Australia', code: 'AU' },{
  //{ name: 'Austria', code: 'AT' },{
  //{ name: 'Azerbaijan', code: 'AZ' },{
  //{ name: 'Bahamas', code: 'BS' },{
  //{ name: 'Bahrain', code: 'BH' },{
  //{ name: 'Bangladesh', code: 'BD' },{
  //{ name: 'Barbados', code: 'BB' },{
  //{ name: 'Belarus', code: 'BY' },{
  //{ name: 'Belgium', code: 'BE' },{
  //{ name: 'Belize', code: 'BZ' },{
  //{ name: 'Benin', code: 'BJ' },{
  //{ name: 'Bermuda', code: 'BM' },{
  //{ name: 'Bhutan', code: 'BT' },{
  //{ name: 'Bolivia', code: 'BO' },{
  //{ name: 'Bosnia and Herzegovina', code: 'BA' },{
  //{ name: 'Botswana', code: 'BW' },{
  //{ name: 'Bouvet Island', code: 'BV' },{
  //{ name: 'Brazil', code: 'BR' },{
  //{ name: 'British Indian Ocean Territory', code: 'IO' },{
  //{ name: 'Brunei Darussalam', code: 'BN' },{
  //{ name: 'Bulgaria', code: 'BG' },{
  //{ name: 'Burkina Faso', code: 'BF' },{
  //{ name: 'Burundi', code: 'BI' },{
  //{ name: 'Cambodia', code: 'KH' },{
  //{ name: 'Cameroon', code: 'CM' },{
  //{ name: 'Canada', code: 'CA' },{
  //{ name: 'Cape Verde', code: 'CV' },{
  //{ name: 'Cayman Islands', code: 'KY' },{
  //{ name: 'Central African Republic', code: 'CF' },{
  //{ name: 'Chad', code: 'TD' },{
  //{ name: 'Chile', code: 'CL' },{
  //{ name: 'China', code: 'CN' },{
  //{ name: 'Christmas Island', code: 'CX' },{
  //{ name: 'Cocos (Keeling) Islands', code: 'CC' },{
  //{ name: 'Colombia', code: 'CO' },{
  //{ name: 'Comoros', code: 'KM' },{
  //{ name: 'Congo', code: 'CG' },{
  //{ name: 'Congo, The Democratic Republic of the', code: 'CD' },{
  //{ name: 'Cook Islands', code: 'CK' },{
  //{ name: 'Costa Rica', code: 'CR' },{
  //{ name: 'Cote D\'Ivoire', code: 'CI' },{
  //{ name: 'Croatia', code: 'HR' },{
  //{ name: 'Cuba', code: 'CU' },{
  //{ name: 'Cyprus', code: 'CY' },{
  //{ name: 'Czech Republic', code: 'CZ' },{
  //{ name: 'Denmark', code: 'DK' },{
  //{ name: 'Djibouti', code: 'DJ' },{
  //{ name: 'Dominica', code: 'DM' },{
  //{ name: 'Dominican Republic', code: 'DO' },{
  //{ name: 'Ecuador', code: 'EC' },{
  //{ name: 'Egypt', code: 'EG' },{
  //{ name: 'El Salvador', code: 'SV' },{
  //{ name: 'Equatorial Guinea', code: 'GQ' },{
  //{ name: 'Eritrea', code: 'ER' },{
  //{ name: 'Estonia', code: 'EE' },{
  //{ name: 'Ethiopia', code: 'ET' },{
  //{ name: 'Falkland Islands (Malvinas)', code: 'FK' },{
  //{ name: 'Faroe Islands', code: 'FO' },{
  //{ name: 'Fiji', code: 'FJ' },{
  //{ name: 'Finland', code: 'FI' },{
  //{ name: 'France', code: 'FR' },{
  //{ name: 'French Guiana', code: 'GF' },{
  //{ name: 'French Polynesia', code: 'PF' },{
  //{ name: 'French Southern Territories', code: 'TF' },{
  //{ name: 'Gabon', code: 'GA' },{
  //{ name: 'Gambia', code: 'GM' },{
  //{ name: 'Georgia', code: 'GE' },{
  //{ name: 'Germany', code: 'DE' },{
  //{ name: 'Ghana', code: 'GH' },{
  //{ name: 'Gibraltar', code: 'GI' },{
  //{ name: 'Greece', code: 'GR' },{
  //{ name: 'Greenland', code: 'GL' },{
  //{ name: 'Grenada', code: 'GD' },{
  //{ name: 'Guadeloupe', code: 'GP' },{
  //{ name: 'Guam', code: 'GU' },{
  //{ name: 'Guatemala', code: 'GT' },{
  //{ name: 'Guernsey', code: 'GG' },{
  //{ name: 'Guinea', code: 'GN' },{
  //{ name: 'Guinea-Bissau', code: 'GW' },{
  //{ name: 'Guyana', code: 'GY' },{
  //{ name: 'Haiti', code: 'HT' },{
  //{ name: 'Heard Island and Mcdonald Islands', code: 'HM' },{
  //{ name: 'Holy See (Vatican City State)', code: 'VA' },{
  //{ name: 'Honduras', code: 'HN' },{
  //{ name: 'Hong Kong', code: 'HK' },{
  //{ name: 'Hungary', code: 'HU' },{
  //{ name: 'Iceland', code: 'IS' },{
  //{ name: 'India', code: 'IN' },{
  //{ name: 'Indonesia', code: 'ID' },{
  //{ name: 'Iran, Islamic Republic Of', code: 'IR' },{
  //{ name: 'Iraq', code: 'IQ' },{
  //{ name: 'Ireland', code: 'IE' },{
  //{ name: 'Isle of Man', code: 'IM' },{
  //{ name: 'Israel', code: 'IL' },{
  //{ name: 'Italy', code: 'IT' },{
  //{ name: 'Jamaica', code: 'JM' },{
  //{ name: 'Japan', code: 'JP' },{
  //{ name: 'Jersey', code: 'JE' },{
  //{ name: 'Jordan', code: 'JO' },{
  //{ name: 'Kazakhstan', code: 'KZ' },{
  //{ name: 'Kenya', code: 'KE' },{
  //{ name: 'Kiribati', code: 'KI' },{
  //{ name: 'Korea, Democratic People\'S Republic of', code: 'KP' },{
  //{ name: 'Korea, Republic of', code: 'KR' },{
  //{ name: 'Kuwait', code: 'KW' },{
  //{ name: 'Kyrgyzstan', code: 'KG' },{
  //{ name: 'Lao People\'S Democratic Republic', code: 'LA' },{
  //{ name: 'Latvia', code: 'LV' },{
  //{ name: 'Lebanon', code: 'LB' },{
  //{ name: 'Lesotho', code: 'LS' },{
  //{ name: 'Liberia', code: 'LR' },{
  //{ name: 'Libyan Arab Jamahiriya', code: 'LY' },{
  //{ name: 'Liechtenstein', code: 'LI' },{
  //{ name: 'Lithuania', code: 'LT' },{
  //{ name: 'Luxembourg', code: 'LU' },{
  //{ name: 'Macao', code: 'MO' },{
  //{ name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },{
  //{ name: 'Madagascar', code: 'MG' },{
  //{ name: 'Malawi', code: 'MW' },{
  //{ name: 'Malaysia', code: 'MY' },{
  //{ name: 'Maldives', code: 'MV' },{
  //{ name: 'Mali', code: 'ML' },{
  //{ name: 'Malta', code: 'MT' },{
  //{ name: 'Marshall Islands', code: 'MH' },{
  //{ name: 'Martinique', code: 'MQ' },{
  //{ name: 'Mauritania', code: 'MR' },{
  //{ name: 'Mauritius', code: 'MU' },{
  //{ name: 'Mayotte', code: 'YT' },{
  //{ name: 'Mexico', code: 'MX' },{
  //{ name: 'Micronesia, Federated States of', code: 'FM' },{
  //{ name: 'Moldova, Republic of', code: 'MD' },{
  //{ name: 'Monaco', code: 'MC' },{
  //{ name: 'Mongolia', code: 'MN' },{
  //{ name: 'Montserrat', code: 'MS' },{
  //{ name: 'Morocco', code: 'MA' },{
  //{ name: 'Mozambique', code: 'MZ' },{
  //{ name: 'Myanmar', code: 'MM' },{
  //{ name: 'Namibia', code: 'NA' },{
  //{ name: 'Nauru', code: 'NR' },{
  //{ name: 'Nepal', code: 'NP' },{
  //{ name: 'Netherlands', code: 'NL' },{
  //{ name: 'Netherlands Antilles', code: 'AN' },{
  //{ name: 'New Caledonia', code: 'NC' },{
  //{ name: 'New Zealand', code: 'NZ' },{
  //{ name: 'Nicaragua', code: 'NI' },{
  //{ name: 'Niger', code: 'NE' },{
  //{ name: 'Nigeria', code: 'NG' },{
  //{ name: 'Niue', code: 'NU' },{
  //{ name: 'Norfolk Island', code: 'NF' },{
  //{ name: 'Northern Mariana Islands', code: 'MP' },{
  //{ name: 'Norway', code: 'NO' },{
  //{ name: 'Oman', code: 'OM' },{
  { name: 'Pakistan', code: 'PK' }
      //{ name: 'Palau', code: 'PW' },{
      //{ name: 'Palestinian Territory, Occupied', code: 'PS' },{
      //{ name: 'Panama', code: 'PA' },{
      //{ name: 'Papua New Guinea', code: 'PG' },{
      //{ name: 'Paraguay', code: 'PY' },{
      //{ name: 'Peru', code: 'PE' },{
      //{ name: 'Philippines', code: 'PH' },{
      //{ name: 'Pitcairn', code: 'PN' },{
      //{ name: 'Poland', code: 'PL' },{
      //{ name: 'Portugal', code: 'PT' },{
      //{ name: 'Puerto Rico', code: 'PR' },{
      //{ name: 'Qatar', code: 'QA' },{
      //{ name: 'Reunion', code: 'RE' },{
      //{ name: 'Romania', code: 'RO' },{
      //{ name: 'Russian Federation', code: 'RU' },{
      //{ name: 'RWANDA', code: 'RW' },{
      //{ name: 'Saint Helena', code: 'SH' },{
      //{ name: 'Saint Kitts and Nevis', code: 'KN' },{
      //{ name: 'Saint Lucia', code: 'LC' },{
      //{ name: 'Saint Pierre and Miquelon', code: 'PM' },{
      //{ name: 'Saint Vincent and the Grenadines', code: 'VC' },{
      //{ name: 'Samoa', code: 'WS' },{
      //{ name: 'San Marino', code: 'SM' },{
      //{ name: 'Sao Tome and Principe', code: 'ST' },{
      //{ name: 'Saudi Arabia', code: 'SA' },{
      //{ name: 'Senegal', code: 'SN' },{
      //{ name: 'Serbia and Montenegro', code: 'CS' },{
      //{ name: 'Seychelles', code: 'SC' },{
      //{ name: 'Sierra Leone', code: 'SL' },{
      //{ name: 'Singapore', code: 'SG' },{
      //{ name: 'Slovakia', code: 'SK' },{
      //{ name: 'Slovenia', code: 'SI' },{
      //{ name: 'Solomon Islands', code: 'SB' },{
      //{ name: 'Somalia', code: 'SO' },{
      //{ name: 'South Africa', code: 'ZA' },{
      //{ name: 'South Georgia and the South Sandwich Islands', code: 'GS' },{
      //{ name: 'Spain', code: 'ES' },{
      //{ name: 'Sri Lanka', code: 'LK' },{
      //{ name: 'Sudan', code: 'SD' },{
      //{ name: 'Suriname', code: 'SR' },{
      //{ name: 'Svalbard and Jan Mayen', code: 'SJ' },{
      //{ name: 'Swaziland', code: 'SZ' },{
      //{ name: 'Sweden', code: 'SE' },{
      //{ name: 'Switzerland', code: 'CH' },{
      //{ name: 'Syrian Arab Republic', code: 'SY' },{
      //{ name: 'Taiwan, Province of China', code: 'TW' },{
      //{ name: 'Tajikistan', code: 'TJ' },{
      //{ name: 'Tanzania, United Republic of', code: 'TZ' },{
      //{ name: 'Thailand', code: 'TH' },{
      //{ name: 'Timor-Leste', code: 'TL' },{
      //{ name: 'Togo', code: 'TG' },{
      //{ name: 'Tokelau', code: 'TK' },{
      //{ name: 'Tonga', code: 'TO' },{
      //{ name: 'Trinidad and Tobago', code: 'TT' },{
      //{ name: 'Tunisia', code: 'TN' },{
      //{ name: 'Turkey', code: 'TR' },{
      //{ name: 'Turkmenistan', code: 'TM' },{
      //{ name: 'Turks and Caicos Islands', code: 'TC' },{
      //{ name: 'Tuvalu', code: 'TV' },{
      //{ name: 'Uganda', code: 'UG' },{
      //{ name: 'Ukraine', code: 'UA' },{
      //{ name: 'United Arab Emirates', code: 'AE' },{
      //{ name: 'United Kingdom', code: 'GB' },{
      //{ name: 'United States', code: 'US' },{
      //{ name: 'United States Minor Outlying Islands', code: 'UM' },{
      //{ name: 'Uruguay', code: 'UY' },{
      //{ name: 'Uzbekistan', code: 'UZ' },{
      //{ name: 'Vanuatu', code: 'VU' },{
      //{ name: 'Venezuela', code: 'VE' },{
      //{ name: 'Viet Nam', code: 'VN' },{
      //{ name: 'Virgin Islands, British', code: 'VG' },{
      //{ name: 'Virgin Islands, U.S.', code: 'VI' },{
      //{ name: 'Wallis and Futuna', code: 'WF' },{
      //{ name: 'Western Sahara', code: 'EH' },{
      //{ name: 'Yemen', code: 'YE' },{
      //{ name: 'Zambia', code: 'ZM' },{
      //{ name: 'Zimbabwe', code: 'ZW' }
];

var occupations = [
   { id: 1, name: "Accountant" },
   { id: 1, name: "Activism" },
   {
       id: 1, name:
        "Actor"
   }, {
       id: 1, name:
       "Actuary"
   }, {
       id: 1, name:
       "Adhesive bonding machine tender"
   }, {
       id: 1, name:
       "Adjudicator"
   }, {
       id: 1, name:
       "Administrative assistant"
   }, {
       id: 1, name:
       "Administrative services manager"
   }, {
       id: 1, name:
       "Adult education teacher"
   }, {
       id: 1, name:
       "Advertising manager"
   },
   {
       id: 1, name:
       "Advocacy"
   },
   {
       id: 1, name:
       "Advertising sales agent"
   }, {
       id: 1, name:
       "Aerobics instructor"
   }, {
       id: 1, name:
       "Aerospace engineer"
   }, {
       id: 1, name:
       "Aerospace engineering technician"
   }, {
       id: 1, name:
       "Agent"
   }, {
       id: 1, name:
       "Agricultural engineer"
   }, {
       id: 1, name:
       "Agricultural equipment operator"
   }, {
       id: 1, name:
       "Agricultural grader"
   }, {
       id: 1, name:
       "Agricultural inspector"
   }, {
       id: 1, name:
       "Agricultural manager"
   }, {
       id: 1, name:
       "Agricultural sciences teacher"
   }, {
       id: 1, name:
       "Agricultural sorter"
   }, {
       id: 1, name:
       "Agricultural technician"
   }, {
       id: 1, name:
       "Agricultural worker"
   }, {
       id: 1, name:
       "Air conditioning installer"
   }, {
       id: 1, name:
       "Air conditioning mechanic"
   }, {
       id: 1, name:
       "Air traffic controller"
   }, {
       id: 1, name:
       "Aircraft cargo handling supervisor"
   }, {
       id: 1, name:
       "Aircraft mechanic"
   }, {
       id: 1, name:
       "Aircraft service technician"
   }, {
       id: 1, name:
       "Airline copilot"
   }, {
       id: 1, name:
       "Airline pilot"
   }, {
       id: 1, name:
       "Ambulance dispatcher"
   }, {
       id: 1, name:
       "Ambulance driver"
   }, {
       id: 1, name:
       "Amusement machine servicer"
   },
{
    id: 1, name:
"Analyst"
},
{
    id: 1, name:
    "Anesthesiologist"
}, {
    id: 1, name:
    "Animal breeder"
}, {
    id: 1, name:
    "Animal control worker"
}, {
    id: 1, name:
    "Animal scientist"
}, {
    id: 1, name:
    "Animal trainer"
}, {
    id: 1, name:
    "Animator"
}, {
    id: 1, name:
    "Answering service operator"
}, {
    id: 1, name:
    "Anthropologist"
}, {
    id: 1, name:
    "Apparel patternmaker"
}, {
    id: 1, name:
    "Apparel worker"
}, {
    id: 1, name:
    "Arbitrator"
}, {
    id: 1, name:
    "Archeologist"
}, {
    id: 1, name:
    "Architect"
}, {
    id: 1, name:
    "Architectural drafter"
}, {
    id: 1, name:
    "Architectural manager"
}, {
    id: 1, name:
    "Archivist"
}, {
    id: 1, name:
    "Art director"
}, {
    id: 1, name:
    "Art teacher"
}, {
    id: 1, name:
    "Artist"
}, {
    id: 1, name:
    "Assembler"
}, {
    id: 1, name:
    "Astronomer"
}, {
    id: 1, name:
    "Athlete"
}, {
    id: 1, name:
    "Athletic trainer"
}, {
    id: 1, name:
    "ATM machine repairer"
}, {
    id: 1, name:
    "Atmospheric scientist"
}, {
    id: 1, name:
    "Attendant"
}, {
    id: 1, name:
    "Audio and video equipment technician"
}, {
    id: 1, name:
    "Audio-visual and multimedia collections specialist"
}, {
    id: 1, name:
    "Audiologist"
}, {
    id: 1, name:
    "Auditor"
}, {
    id: 1, name:
    "Author"
}, {
    id: 1, name:
    "Auto damage insurance appraiser"
}, {
    id: 1, name:
    "Automotive and watercraft service attendant"
}, {
    id: 1, name:
    "Automotive glass installer"
}, {
    id: 1, name:
    "Automotive mechanic"
}, {
    id: 1, name:
    "Avionics technician"
},

{
    id: 1, name:
"Babysitter"
},
{
    id: 1, name:
    "Baggage porter"
}, {
    id: 1, name:
    "Bailiff"
}, {
    id: 1, name:
    "Baker"
}, {
    id: 1, name:
    "Barback"
}, {
    id: 1, name:
    "Barber"
}, {
    id: 1, name:
    "Bartender"
}, {
    id: 1, name:
    "Basic education teacher"
},
   {
       id: 1, name:
       "Banker"
   },
   {
       id: 1, name:
       "Beautician"
   },
   {
       id: 1, name:
       "Behavioral disorder counselor"
   }, {
       id: 1, name:
       "Bellhop"
   }, {
       id: 1, name:
       "Bench carpenter"
   }, {
       id: 1, name:
       "Bicycle repairer"
   }, {
       id: 1, name:
       "Bill and account collector"
   }, {
       id: 1, name:
       "Billing and posting clerk"
   }, {
       id: 1, name:
       "Biochemist"
   }, {
       id: 1, name:
       "Biological technician"
   }, {
       id: 1, name:
       "Biomedical engineer"
   }, {
       id: 1, name:
       "Biophysicist"
   }, {
       id: 1, name:
       "Blaster"
   }, {
       id: 1, name:
       "Blending machine operator"
   }, {
       id: 1, name:
       "Blockmason"
   }, {
       id: 1, name:
       "Boiler operator"
   }, {
       id: 1, name:
       "Boilermaker"
   }, {
       id: 1, name:
       "Bookkeeper"
   }, {
       id: 1, name:
       "Boring machine tool tender"
   }, {
       id: 1, name:
       "Brazer"
   }, {
       id: 1, name:
       "Brickmason"
   }, {
       id: 1, name:
       "Bridge and lock tender"
   }, {
       id: 1, name:
       "Broadcast news analyst"
   }, {
       id: 1, name:
       "Broadcast technician"
   }, {
       id: 1, name:
       "Brokerage clerk"
   }, {
       id: 1, name:
       "Budget analyst"
   }, {
       id: 1, name:
       "Building inspector"
   }, {
       id: 1, name:
       "Bus mechanic"
   },
    {
        id: 1, name:
        "Business"
    },
   {
       id: 1, name:
       "Butcher"
   }, {
       id: 1, name:
       "Buyer"
   }, {
       id: 1, name:
       "Cabinetmaker"
   }, {
       id: 1, name:
       "Cafeteria attendant"
   }, {
       id: 1, name:
       "Cafeteria cook"
   }, {
       id: 1, name:
       "Camera operator"
   }, {
       id: 1, name:
       "Camera repairer"
   }, {
       id: 1, name:
       "Cardiovascular technician"
   }, {
       id: 1, name:
       "Cargo agent"
   }, {
       id: 1, name:
       "Carpenter"
   }, {
       id: 1, name:
       "Carpet installer"
   }, {
       id: 1, name:
       "Cartographer"
   }, {
       id: 1, name:
       "Cashier"
   }, {
       id: 1, name:
       "Caster"
   }, {
       id: 1, name:
       "Ceiling tile installer"
   }, {
       id: 1, name:
       "Cellular equipment installer"
   }, {
       id: 1, name:
       "Cement mason"
   }, {
       id: 1, name:
       "Channeling machine operator"
   }, {
       id: 1, name:
       "Chauffeur"
   }, {
       id: 1, name:
       "Checker"
   }, {
       id: 1, name:
       "Chef"
   }, {
       id: 1, name:
       "Chemical engineer"
   }, {
       id: 1, name:
       "Chemical plant operator"
   }, {
       id: 1, name:
       "Chemist"
   }, {
       id: 1, name:
       "Chemistry teacher"
   }, {
       id: 1, name:
       "Chief executive"
   }, {
       id: 1, name:
       "Child social worker"
   }, {
       id: 1, name:
       "Childcare worker"
   }, {
       id: 1, name:
       "Chiropractor"
   }, {
       id: 1, name:
       "Choreographer"
   }, {
       id: 1, name:
       "Civil drafter"
   }, {
       id: 1, name:
       "Civil engineer"
   }, {
       id: 1, name:
       "Civil engineering technician"
   }, {
       id: 1, name:
       "Claims adjuster"
   }, {
       id: 1, name:
       "Claims examiner"
   }, {
       id: 1, name:
       "Claims investigator"
   }, {
       id: 1, name:
       "Cleaner"
   }, {
       id: 1, name:
       "Clinical laboratory technician"
   }, {
       id: 1, name:
       "Clinical laboratory technologist"
   }, {
       id: 1, name:
       "Clinical psychologist"
   }, {
       id: 1, name:
       "Coating worker"
   }, {
       id: 1, name:
       "Coatroom attendant"
   }, {
       id: 1, name:
       "Coil finisher"
   }, {
       id: 1, name:
       "Coil taper"
   }, {
       id: 1, name:
       "Coil winder"
   }, {
       id: 1, name:
       "Coin machine servicer"
   }, {
       id: 1, name:
       "Commercial diver"
   }, {
       id: 1, name:
       "Commercial pilot"
   }, {
       id: 1, name:
       "Commodities sales agent"
   }, {
       id: 1, name:
       "Communications equipment operator"
   }, {
       id: 1, name:
       "Communications teacher"
   }, {
       id: 1, name:
       "Community association manager"
   }, {
       id: 1, name:
       "Community service manager"
   }, {
       id: 1, name:
       "Compensation and benefits manager"
   }, {
       id: 1, name:
       "Compliance officer"
   }, {
       id: 1, name:
       "Composer"
   }, {
       id: 1, name:
       "Computer hardware engineer"
   }, {
       id: 1, name:
       "Computer network architect"
   }, {
       id: 1, name:
       "Computer operator"
   }, {
       id: 1, name:
       "Computer programmer"
   }, {
       id: 1, name:
       "Computer science teacher"
   }, {
       id: 1, name:
       "Computer support specialist"
   }, {
       id: 1, name:
       "Computer systems administrator"
   }, {
       id: 1, name:
       "Computer systems analyst"
   }, {
       id: 1, name:
       "Concierge"
   }, {
       id: 1, name:
       "Conciliator"
   }, {
       id: 1, name:
       "Concrete finisher"
   }, {
       id: 1, name:
       "Conservation science teacher"
   }, {
       id: 1, name:
       "Conservation scientist"
   }, {
       id: 1, name:
       "Conservation worker"
   }, {
       id: 1, name:
       "Conservator"
   }, {
       id: 1, name:
       "Construction inspector"
   }, {
       id: 1, name:
       "Construction manager"
   }, {
       id: 1, name:
       "Construction painter"
   }, {
       id: 1, name:
       "Construction worker"
   }, {
       id: 1, name:
       "Continuous mining machine operator"
   }, {
       id: 1, name:
       "Convention planner"
   }, {
       id: 1, name:
       "Conveyor operator"
   },
   {
       id: 1, name:
       "Content writer"
   },
   {
       id: 1, name:
       "Cook"
   }, {
       id: 1, name:
       "Cooling equipment operator"
   }, {
       id: 1, name:
       "Copy marker"
   }, {
       id: 1, name:
       "Correctional officer"
   }, {
       id: 1, name:
       "Correctional treatment specialist"
   }, {
       id: 1, name:
       "Correspondence clerk"
   }, {
       id: 1, name:
       "Correspondent"
   }, {
       id: 1, name:
       "Cosmetologist"
   }, {
       id: 1, name:
       "Cost estimator"
   }, {
       id: 1, name:
       "Costume attendant"
   }, {
       id: 1, name:
       "Counseling psychologist"
   }, {
       id: 1, name:
       "Counselor"
   }, {
       id: 1, name:
       "Courier"
   }, {
       id: 1, name:
       "Court reporter"
   }, {
       id: 1, name:
       "Craft artist"
   }, {
       id: 1, name:
       "Crane operator"
   }, {
       id: 1, name:
       "Credit analyst"
   }, {
       id: 1, name:
       "Credit checker"
   }, {
       id: 1, name:
       "Credit counselor"
   }, {
       id: 1, name:
       "Criminal investigator"
   }, {
       id: 1, name:
       "Criminal justice teacher"
   }, {
       id: 1, name:
       "Crossing guard"
   }, {
       id: 1, name:
       "Curator"
   }, {
       id: 1, name:
       "Custom sewer"
   }, {
       id: 1, name:
       "Customer service representative"
   }, {
       id: 1, name:
       "Cutter"
   }, {
       id: 1, name:
       "Cutting machine operator"
   }, {
       id: 1, name:
       "Dancer"
   }, {
       id: 1, name:
       "Data entry keyer"
   }, {
       id: 1, name:
       "Database administrator"
   },
   {
       id: 1, name:
       "Dealer - financial markets"
   },
   {
       id: 1, name:
       "Decorating worker"
   }, {
       id: 1, name:
       "Delivery services driver"
   }, {
       id: 1, name:
       "Demonstrator"
   }, {
       id: 1, name:
       "Dental assistant"
   }, {
       id: 1, name:
       "Dental hygienist"
   }, {
       id: 1, name:
       "Dental laboratory technician"
   }, {
       id: 1, name:
       "Dentist"
   }, {
       id: 1, name:
       "Derrick operator"
   }, {
       id: 1, name:
       "Designer"
   }, {
       id: 1, name:
       "Desktop publisher"
   }, {
       id: 1, name:
       "Detective"
   }, {
       id: 1, name:
       "Diagnostic medical sonographer"
   }, {
       id: 1, name:
       "Die maker"
   }, {
       id: 1, name:
       "Diesel engine specialist"
   }, {
       id: 1, name:
       "Dietetic technician"
   }, {
       id: 1, name:
       "Dietitian"
   }, {
       id: 1, name:
       "Dinkey operator"
   }, {
       id: 1, name:
       "Director"
   }, {
       id: 1, name:
       "Dishwasher"
   }, {
       id: 1, name:
       "Dispatcher"
   },
   {
       id: 1, name:
       "Doctor"
   },
   {
       id: 1, name:
       "Door-to-door sales worker"
   }, {
       id: 1, name:
       "Drafter"
   }, {
       id: 1, name:
       "Dragline operator"
   }, {
       id: 1, name:
       "Drama teacher"
   }, {
       id: 1, name:
       "Dredge operator"
   }, {
       id: 1, name:
       "Dressing room attendant"
   }, {
       id: 1, name:
       "Dressmaker"
   }, {
       id: 1, name:
       "Drier operator"
   }, {
       id: 1, name:
       "Drilling machine tool operator"
   }, {
       id: 1, name:
       "Dry-cleaning worker"
   }, {
       id: 1, name:
       "Drywall installer"
   }, {
       id: 1, name:
       "Dyeing machine operator"
   }, {
       id: 1, name:
       "Earth driller"
   }, {
       id: 1, name:
       "Economics teacher"
   }, {
       id: 1, name:
       "Economist"
   }, {
       id: 1, name:
       "Editor"
   }, {
       id: 1, name:
       "Education administrator"
   }, {
       id: 1, name:
       "Electric motor repairer"
   }, {
       id: 1, name:
       "Electrical electronics drafter"
   }, {
       id: 1, name:
       "Electrical engineer"
   }, {
       id: 1, name:
       "Electrical equipment assembler"
   }, {
       id: 1, name:
       "Electrical installer"
   }, {
       id: 1, name:
       "Electrical power-line installer"
   }, {
       id: 1, name:
       "Electrician"
   }, {
       id: 1, name:
       "Electro-mechanical technician"
   }, {
       id: 1, name:
       "Elementary school teacher"
   }, {
       id: 1, name:
       "Elevator installer"
   }, {
       id: 1, name:
       "Elevator repairer"
   }, {
       id: 1, name:
       "Embalmer"
   }, {
       id: 1, name:
       "Emergency management director"
   }, {
       id: 1, name:
       "Emergency medical technician"
   }, {
       id: 1, name:
       "Engine assembler"
   }, {
       id: 1, name:
       "Engineer"
   }, {
       id: 1, name:
       "Engineering manager"
   }, {
       id: 1, name:
       "Engineering teacher"
   }, {
       id: 1, name:
       "English language teacher"
   }, {
       id: 1, name:
       "Engraver"
   }, {
       id: 1, name:
       "Entertainment attendant"
   },
   {
       id: 1, name:
       "Entrepreneur"
   },
   {
       id: 1, name:
       "Environmental engineer"
   }, {
       id: 1, name:
       "Environmental science teacher"
   }, {
       id: 1, name:
       "Environmental scientist"
   }, {
       id: 1, name:
       "Epidemiologist"
   }, {
       id: 1, name:
       "Escort"
   }, {
       id: 1, name:
       "Etcher"
   }, {
       id: 1, name:
       "Event planner"
   }, {
       id: 1, name:
       "Excavating operator"
   }, {
       id: 1, name:
       "Executive administrative assistant"
   }, {
       id: 1, name:
       "Executive secretary"
   }, {
       id: 1, name:
       "Exhibit designer"
   }, {
       id: 1, name:
       "Expediting clerk"
   }, {
       id: 1, name:
       "Explosives worker"
   },
   {
       id: 1, name:
       "Exporter"
   },
   {
       id: 1, name:
       "Extraction worker"
   }, {
       id: 1, name:
       "Fabric mender"
   }, {
       id: 1, name:
       "Fabric patternmaker"
   }, {
       id: 1, name:
       "Fabricator"
   }, {
       id: 1, name:
       "Faller"
   }, {
       id: 1, name:
       "Family practitioner"
   }, {
       id: 1, name:
       "Family social worker"
   }, {
       id: 1, name:
       "Family therapist"
   }, {
       id: 1, name:
       "Farm advisor"
   }, {
       id: 1, name:
       "Farm equipment mechanic"
   }, {
       id: 1, name:
       "Farm labor contractor"
   }, {
       id: 1, name:
       "Farmer"
   }, {
       id: 1, name:
       "Farmworker"
   }, {
       id: 1, name:
       "Fashion designer"
   }, {
       id: 1, name:
       "Fast food cook"
   }, {
       id: 1, name:
       "Fence erector"
   }, {
       id: 1, name:
       "Fiberglass fabricator"
   }, {
       id: 1, name:
       "Fiberglass laminator"
   }, {
       id: 1, name:
       "File clerk"
   }, {
       id: 1, name:
       "Filling machine operator"
   }, {
       id: 1, name:
       "Film and video editor"
   }, {
       id: 1, name:
       "Financial analyst"
   }, {
       id: 1, name:
       "Financial examiner"
   }, {
       id: 1, name:
       "Financial manager"
   }, {
       id: 1, name:
       "Financial services sales agent"
   }, {
       id: 1, name:
       "Fine artist"
   }, {
       id: 1, name:
       "Fire alarm system installer"
   }, {
       id: 1, name:
       "Fire dispatcher"
   }, {
       id: 1, name:
       "Fire inspector"
   }, {
       id: 1, name:
       "Fire investigator"
   }, {
       id: 1, name:
       "Firefighter"
   }, {
       id: 1, name:
       "Fish and game warden"
   }, {
       id: 1, name:
       "Fish cutter"
   }, {
       id: 1, name:
       "Fish trimmer"
   }, {
       id: 1, name:
       "Fisher"
   }, {
       id: 1, name:
       "Fitness studies teacher"
   }, {
       id: 1, name:
       "Fitness trainer"
   }, {
       id: 1, name:
       "Flight attendant"
   }, {
       id: 1, name:
       "Floor finisher"
   }, {
       id: 1, name:
       "Floor layer"
   }, {
       id: 1, name:
       "Floor sander"
   }, {
       id: 1, name:
       "Floral designer"
   }, {
       id: 1, name:
       "Food batchmaker"
   }, {
       id: 1, name:
       "Food cooking machine operator"
   }, {
       id: 1, name:
       "Food preparation worker"
   }, {
       id: 1, name:
       "Food science technician"
   }, {
       id: 1, name:
       "Food scientist"
   }, {
       id: 1, name:
       "Food server"
   }, {
       id: 1, name:
       "Food service manager"
   }, {
       id: 1, name:
       "Food technologist"
   }, {
       id: 1, name:
       "Foreign language teacher"
   }, {
       id: 1, name:
       "Foreign literature teacher"
   }, {
       id: 1, name:
       "Forensic science technician"
   }, {
       id: 1, name:
       "Forest fire inspector"
   }, {
       id: 1, name:
       "Forest fire prevention specialist"
   }, {
       id: 1, name:
       "Forest worker"
   }, {
       id: 1, name:
       "Forester"
   }, {
       id: 1, name:
       "Forestry teacher"
   }, {
       id: 1, name:
       "Forging machine setter"
   }, {
       id: 1, name:
       "Foundry coremaker"
   },
   {
       id: 1, name:
       "Freelancing"
   },
   {
       id: 1, name:
       "Freight agent"
   }, {
       id: 1, name:
       "Freight mover"
   }, {
       id: 1, name:
       "Fundraising manager"
   }, {
       id: 1, name:
       "Funeral attendant"
   }, {
       id: 1, name:
       "Funeral director"
   }, {
       id: 1, name:
       "Funeral service manager"
   }, {
       id: 1, name:
       "Furnace operator"
   }, {
       id: 1, name:
       "Furnishings worker"
   }, {
       id: 1, name:
       "Furniture finisher"
   }, {
       id: 1, name:
       "Gaming booth cashier"
   }, {
       id: 1, name:
       "Gaming cage worker"
   }, {
       id: 1, name:
       "Gaming change person"
   }, {
       id: 1, name:
       "Gaming dealer"
   }, {
       id: 1, name:
       "Gaming investigator"
   }, {
       id: 1, name:
       "Gaming manager"
   }, {
       id: 1, name:
       "Gaming surveillance officer"
   }, {
       id: 1, name:
       "Garment mender"
   }, {
       id: 1, name:
       "Garment presser"
   }, {
       id: 1, name:
       "Gas compressor"
   }, {
       id: 1, name:
       "Gas plant operator"
   }, {
       id: 1, name:
       "Gas pumping station operator"
   }, {
       id: 1, name:
       "General manager"
   }, {
       id: 1, name:
       "General practitioner"
   }, {
       id: 1, name:
       "Geographer"
   }, {
       id: 1, name:
       "Geography teacher"
   }, {
       id: 1, name:
       "Geological engineer"
   }, {
       id: 1, name:
       "Geological technician"
   }, {
       id: 1, name:
       "Geoscientist"
   }, {
       id: 1, name:
       "Glazier"
   }, {
       id: 1, name:
       "Government program eligibility interviewer"
   }, {
       id: 1, name:
       "Graduate teaching assistant"
   }, {
       id: 1, name:
       "Graphic designer"
   }, {
       id: 1, name:
       "Groundskeeper"
   }, {
       id: 1, name:
       "Groundskeeping worker"
   }, {
       id: 1, name:
       "Gynecologist"
   }, {
       id: 1, name:
       "Hairdresser"
   }, {
       id: 1, name:
       "Hairstylist"
   }, {
       id: 1, name:
       "Hand grinding worker"
   }, {
       id: 1, name:
       "Hand laborer"
   }, {
       id: 1, name:
       "Hand packager"
   }, {
       id: 1, name:
       "Hand packer"
   }, {
       id: 1, name:
       "Hand polishing worker"
   }, {
       id: 1, name:
       "Hand sewer"
   }, {
       id: 1, name:
       "Hazardous materials removal worker"
   }, {
       id: 1, name:
       "Head cook"
   }, {
       id: 1, name:
       "Health and safety engineer"
   }, {
       id: 1, name:
       "Health educator"
   }, {
       id: 1, name:
       "Health information technician"
   }, {
       id: 1, name:
       "Health services manager"
   }, {
       id: 1, name:
       "Health specialties teacher"
   }, {
       id: 1, name:
       "Healthcare social worker"
   }, {
       id: 1, name:
       "Hearing officer"
   }, {
       id: 1, name:
       "Heat treating equipment setter"
   }, {
       id: 1, name:
       "Heating installer"
   }, {
       id: 1, name:
       "Heating mechanic"
   }, {
       id: 1, name:
       "Heavy truck driver"
   }, {
       id: 1, name:
       "Highway maintenance worker"
   }, {
       id: 1, name:
       "Historian"
   }, {
       id: 1, name:
       "History teacher"
   }, {
       id: 1, name:
       "Hoist and winch operator"
   }, {
       id: 1, name:
       "Home appliance repairer"
   }, {
       id: 1, name:
       "Home economics teacher"
   }, {
       id: 1, name:
       "Home entertainment installer"
   }, {
       id: 1, name:
       "Home health aide"
   }, {
       id: 1, name:
       "Home management advisor"
   },
   {
       id: 1, name:
       "Home maker"
   },
   {
       id: 1, name:
       "Host"
   }, {
       id: 1, name:
       "Hostess"
   }, {
       id: 1, name:
       "Hostler"
   }, {
       id: 1, name:
       "Hotel desk clerk"
   }, {
       id: 1, name:
       "Housekeeping cleaner"
   },
   {
       id: 1, name:
       "House wife"
   },
   {
       id: 1, name:
       "Human resources assistant"
   }, {
       id: 1, name:
       "Human resources manager"
   }, {
       id: 1, name:
       "Human service assistant"
   }, {
       id: 1, name:
       "Hunter"
   }, {
       id: 1, name:
       "Hydrologist"
   }, {
       id: 1, name:
       "Illustrator"
   },
   {
       id: 1, name:
       "Importer"
   },

   {
       id: 1, name:
       "Industrial designer"
   }, {
       id: 1, name:
       "Industrial engineer"
   }, {
       id: 1, name:
       "Industrial engineering technician"
   }, {
       id: 1, name:
       "Industrial machinery mechanic"
   }, {
       id: 1, name:
       "Industrial production manager"
   }, {
       id: 1, name:
       "Industrial truck operator"
   }, {
       id: 1, name:
       "Industrial-organizational psychologist"
   }, {
       id: 1, name:
       "Information clerk"
   }, {
       id: 1, name:
       "Information research scientist"
   }, {
       id: 1, name:
       "Information security analyst"
   }, {
       id: 1, name:
       "Information systems manager"
   }, {
       id: 1, name:
       "Inspector"
   }, {
       id: 1, name:
       "Instructional coordinator"
   }, {
       id: 1, name:
       "Instructor"
   }, {
       id: 1, name:
       "Insulation worker"
   }, {
       id: 1, name:
       "Insurance claims clerk"
   }, {
       id: 1, name:
       "Insurance sales agent"
   }, {
       id: 1, name:
       "Insurance underwriter"
   }, {
       id: 1, name:
       "Intercity bus driver"
   }, {
       id: 1, name:
       "Interior designer"
   }, {
       id: 1, name:
       "Internist"
   }, {
       id: 1, name:
       "Interpreter"
   }, {
       id: 1, name:
       "Interviewer"
   }, {
       id: 1, name:
       "Investigator"
   }, {
       id: 1, name:
       "Jailer"
   }, {
       id: 1, name:
       "Janitor"
   }, {
       id: 1, name:
       "Jeweler"
   },
    {
        id: 1, name:
        "Journalist"
    },
   {
       id: 1, name:
       "Judge"
   }, {
       id: 1, name:
       "Judicial law clerk"
   }, {
       id: 1, name:
       "Kettle operator"
   }, {
       id: 1, name:
       "Kiln operator"
   }, {
       id: 1, name:
       "Kindergarten teacher"
   }, {
       id: 1, name:
       "Laboratory animal caretaker"
   }, {
       id: 1, name:
       "Landscape architect"
   }, {
       id: 1, name:
       "Landscaping worker"
   }, {
       id: 1, name:
       "Lathe setter"
   }, {
       id: 1, name:
       "Laundry worker"
   }, {
       id: 1, name:
       "Law enforcement teacher"
   }, {
       id: 1, name:
       "Law teacher"
   }, {
       id: 1, name:
       "Lawyer"
   }, {
       id: 1, name:
       "Layout worker"
   }, {
       id: 1, name:
       "Leather worker"
   }, {
       id: 1, name:
       "Legal assistant"
   }, {
       id: 1, name:
       "Legal secretary"
   }, {
       id: 1, name:
       "Legislator"
   }, {
       id: 1, name:
       "Librarian"
   }, {
       id: 1, name:
       "Library assistant"
   }, {
       id: 1, name:
       "Library science teacher"
   }, {
       id: 1, name:
       "Library technician"
   }, {
       id: 1, name:
       "Licensed practical nurse"
   }, {
       id: 1, name:
       "Licensed vocational nurse"
   }, {
       id: 1, name:
       "Life scientist"
   }, {
       id: 1, name:
       "Lifeguard"
   }, {
       id: 1, name:
       "Light truck driver"
   }, {
       id: 1, name:
       "Line installer"
   }, {
       id: 1, name:
       "Literacy teacher"
   }, {
       id: 1, name:
       "Literature teacher"
   }, {
       id: 1, name:
       "Loading machine operator"
   }, {
       id: 1, name:
       "Loan clerk"
   }, {
       id: 1, name:
       "Loan interviewer"
   }, {
       id: 1, name:
       "Loan officer"
   }, {
       id: 1, name:
       "Lobby attendant"
   }, {
       id: 1, name:
       "Locker room attendant"
   }, {
       id: 1, name:
       "Locksmith"
   }, {
       id: 1, name:
       "Locomotive engineer"
   }, {
       id: 1, name:
       "Locomotive firer"
   }, {
       id: 1, name:
       "Lodging manager"
   }, {
       id: 1, name:
       "Log grader"
   }, {
       id: 1, name:
       "Logging equipment operator"
   }, {
       id: 1, name:
       "Logistician"
   }, {
       id: 1, name:
       "Machine feeder"
   }, {
       id: 1, name:
       "Machinist"
   }, {
       id: 1, name:
       "Magistrate judge"
   }, {
       id: 1, name:
       "Magistrate"
   }, {
       id: 1, name:
       "Maid"
   }, {
       id: 1, name:
       "Mail clerk"
   }, {
       id: 1, name:
       "Mail machine operator"
   }, {
       id: 1, name:
       "Mail superintendent"
   }, {
       id: 1, name:
       "Maintenance painter"
   }, {
       id: 1, name:
       "Maintenance worker"
   }, {
       id: 1, name:
       "Makeup artist"
   }, {
       id: 1, name:
       "Management analyst"
   }, {
       id: 1, name:
       "Manicurist"
   }, {
       id: 1, name:
       "Manufactured building installer"
   }, {
       id: 1, name:
       "Mapping technician"
   }, {
       id: 1, name:
       "Marble setter"
   }, {
       id: 1, name:
       "Marine engineer"
   }, {
       id: 1, name:
       "Marine oiler"
   }, {
       id: 1, name:
       "Market research analyst"
   }, {
       id: 1, name:
       "Marketing manager"
   }, {
       id: 1, name:
       "Marketing specialist"
   }, {
       id: 1, name:
       "Marriage therapist"
   }, {
       id: 1, name:
       "Massage therapist"
   }, {
       id: 1, name:
       "Material mover"
   }, {
       id: 1, name:
       "Materials engineer"
   }, {
       id: 1, name:
       "Materials scientist"
   }, {
       id: 1, name:
       "Mathematical science teacher"
   }, {
       id: 1, name:
       "Mathematical technician"
   }, {
       id: 1, name:
       "Mathematician"
   }, {
       id: 1, name:
       "Maxillofacial surgeon"
   }, {
       id: 1, name:
       "Measurer"
   }, {
       id: 1, name:
       "Meat cutter"
   }, {
       id: 1, name:
       "Meat packer"
   }, {
       id: 1, name:
       "Meat trimmer"
   }, {
       id: 1, name:
       "Mechanical door repairer"
   }, {
       id: 1, name:
       "Mechanical drafter"
   }, {
       id: 1, name:
       "Mechanical engineer"
   }, {
       id: 1, name:
       "Mechanical engineering technician"
   }, {
       id: 1, name:
       "Mediator"
   }, {
       id: 1, name:
       "Medical appliance technician"
   }, {
       id: 1, name:
       "Medical assistant"
   }, {
       id: 1, name:
       "Medical equipment preparer"
   }, {
       id: 1, name:
       "Medical equipment repairer"
   }, {
       id: 1, name:
       "Medical laboratory technician"
   }, {
       id: 1, name:
       "Medical laboratory technologist"
   }, {
       id: 1, name:
       "Medical records technician"
   }, {
       id: 1, name:
       "Medical scientist"
   }, {
       id: 1, name:
       "Medical secretary"
   }, {
       id: 1, name:
       "Medical services manager"
   }, {
       id: 1, name:
       "Medical transcriptionist"
   }, {
       id: 1, name:
       "Meeting planner"
   }, {
       id: 1, name:
       "Mental health counselor"
   }, {
       id: 1, name:
       "Mental health social worker"
   }, {
       id: 1, name:
       "Merchandise displayer"
   }, {
       id: 1, name:
       "Messenger"
   }, {
       id: 1, name:
       "Metal caster"
   }, {
       id: 1, name:
       "Metal patternmaker"
   }, {
       id: 1, name:
       "Metal pickling operator"
   }, {
       id: 1, name:
       "Metal pourer"
   }, {
       id: 1, name:
       "Metal worker"
   }, {
       id: 1, name:
       "Metal-refining furnace operator"
   }, {
       id: 1, name:
       "Metal-refining furnace tender"
   }, {
       id: 1, name:
       "Meter reader"
   }, {
       id: 1, name:
       "Microbiologist"
   }, {
       id: 1, name:
       "Middle school teacher"
   }, {
       id: 1, name:
       "Milling machine setter"
   }, {
       id: 1, name:
       "Millwright"
   }, {
       id: 1, name:
       "Mine cutting machine operator"
   }, {
       id: 1, name:
       "Mine shuttle car operator"
   }, {
       id: 1, name:
       "Mining engineer"
   }, {
       id: 1, name:
       "Mining safety engineer"
   }, {
       id: 1, name:
       "Mining safety inspector"
   }, {
       id: 1, name:
       "Mining service unit operator"
   }, {
       id: 1, name:
       "Mixing machine setter"
   }, {
       id: 1, name:
       "Mobile heavy equipment mechanic"
   }, {
       id: 1, name:
       "Mobile home installer"
   }, {
       id: 1, name:
       "Model maker"
   }, {
       id: 1, name:
       "Model"
   }, {
       id: 1, name:
       "Molder"
   }, {
       id: 1, name:
       "Mortician"
   }, {
       id: 1, name:
       "Motel desk clerk"
   }, {
       id: 1, name:
       "Motion picture projectionist"
   }, {
       id: 1, name:
       "Motorboat mechanic"
   }, {
       id: 1, name:
       "Motorboat operator"
   }, {
       id: 1, name:
       "Motorboat service technician"
   }, {
       id: 1, name:
       "Motorcycle mechanic"
   }, {
       id: 1, name:
       "Multimedia artist"
   }, {
       id: 1, name:
       "Museum technician"
   }, {
       id: 1, name:
       "Music director"
   }, {
       id: 1, name:
       "Music teacher"
   }, {
       id: 1, name:
       "Musical instrument repairer"
   }, {
       id: 1, name:
       "Musician"
   }, {
       id: 1, name:
       "Natural sciences manager"
   }, {
       id: 1, name:
       "Naval architect"
   }, {
       id: 1, name:
       "Network systems administrator"
   }, {
       id: 1, name:
       "New accounts clerk"
   }, {
       id: 1, name:
       "News vendor"
   }, {
       id: 1, name:
       "Nonfarm animal caretaker"
   }, {
       id: 1, name:
       "Nuclear engineer"
   }, {
       id: 1, name:
       "Nuclear medicine technologist"
   }, {
       id: 1, name:
       "Nuclear power reactor operator"
   }, {
       id: 1, name:
       "Nuclear technician"
   }, {
       id: 1, name:
       "Nursing aide"
   }, {
       id: 1, name:
       "Nursing instructor"
   }, {
       id: 1, name:
       "Nursing teacher"
   }, {
       id: 1, name:
       "Nutritionist"
   }, {
       id: 1, name:
       "Obstetrician"
   }, {
       id: 1, name:
       "Occupational health and safety specialist"
   }, {
       id: 1, name:
       "Occupational health and safety technician"
   }, {
       id: 1, name:
       "Occupational therapist"
   }, {
       id: 1, name:
       "Occupational therapy aide"
   }, {
       id: 1, name:
       "Occupational therapy assistant"
   }, {
       id: 1, name:
       "Offbearer"
   }, {
       id: 1, name:
       "Office clerk"
   }, {
       id: 1, name:
       "Office machine operator"
   }, {
       id: 1, name:
       "Operating engineer"
   }, {
       id: 1, name:
       "Operations manager"
   }, {
       id: 1, name:
       "Operations research analyst"
   }, {
       id: 1, name:
       "Ophthalmic laboratory technician"
   }, {
       id: 1, name:
       "Optician"
   }, {
       id: 1, name:
       "Optometrist"
   }, {
       id: 1, name:
       "Oral surgeon"
   }, {
       id: 1, name:
       "Order clerk"
   }, {
       id: 1, name:
       "Order filler"
   }, {
       id: 1, name:
       "Orderly"
   }, {
       id: 1, name:
       "Ordnance handling expert"
   }, {
       id: 1, name:
       "Orthodontist"
   }, {
       id: 1, name:
       "Orthotist"
   }, {
       id: 1, name:
       "Outdoor power equipment mechanic"
   }, {
       id: 1, name:
       "Oven operator"
   }, {
       id: 1, name:
       "Packaging machine operator"
   }, {
       id: 1, name:
       "Painter "
   }, {
       id: 1, name:
       "Painting worker"
   }, {
       id: 1, name:
       "Paper goods machine setter"
   }, {
       id: 1, name:
       "Paperhanger"
   }, {
       id: 1, name:
       "Paralegal"
   }, {
       id: 1, name:
       "Paramedic"
   }, {
       id: 1, name:
       "Parking enforcement worker"
   }, {
       id: 1, name:
       "Parking lot attendant"
   }, {
       id: 1, name:
       "Parts salesperson"
   }, {
       id: 1, name:
       "Paving equipment operator"
   }, {
       id: 1, name:
       "Payroll clerk"
   }, {
       id: 1, name:
       "Pediatrician"
   }, {
       id: 1, name:
       "Pedicurist"
   }, {
       id: 1, name:
       "Personal care aide"
   }, {
       id: 1, name:
       "Personal chef"
   }, {
       id: 1, name:
       "Personal financial advisor"
   }, {
       id: 1, name:
       "Pest control worker"
   }, {
       id: 1, name:
       "Pesticide applicator"
   }, {
       id: 1, name:
       "Pesticide handler"
   }, {
       id: 1, name:
       "Pesticide sprayer"
   }, {
       id: 1, name:
       "Petroleum engineer"
   }, {
       id: 1, name:
       "Petroleum gauger"
   }, {
       id: 1, name:
       "Petroleum pump system operator"
   }, {
       id: 1, name:
       "Petroleum refinery operator"
   }, {
       id: 1, name:
       "Petroleum technician"
   }, {
       id: 1, name:
       "Pharmacist"
   }, {
       id: 1, name:
       "Pharmacy aide"
   }, {
       id: 1, name:
       "Pharmacy technician"
   }, {
       id: 1, name:
       "Philosophy teacher"
   }, {
       id: 1, name:
       "Photogrammetrist"
   }, {
       id: 1, name:
       "Photographer"
   }, {
       id: 1, name:
       "Photographic process worker"
   }, {
       id: 1, name:
       "Photographic processing machine operator"
   }, {
       id: 1, name:
       "Physical therapist aide"
   }, {
       id: 1, name:
       "Physical therapist assistant"
   }, {
       id: 1, name:
       "Physical therapist"
   }, {
       id: 1, name:
       "Physician assistant"
   }, {
       id: 1, name:
       "Physician"
   }, {
       id: 1, name:
       "Physicist"
   }, {
       id: 1, name:
       "Physics teacher"
   }, {
       id: 1, name:
       "Pile-driver operator"
   }, {
       id: 1, name:
       "Pipefitter"
   }, {
       id: 1, name:
       "Pipelayer"
   }, {
       id: 1, name:
       "Planing machine operator"
   }, {
       id: 1, name:
       "Planning clerk"
   }, {
       id: 1, name:
       "Plant operator"
   }, {
       id: 1, name:
       "Plant scientist"
   }, {
       id: 1, name:
       "Plasterer"
   }, {
       id: 1, name:
       "Plastic patternmaker"
   }, {
       id: 1, name:
       "Plastic worker"
   }, {
       id: 1, name:
       "Plumber"
   }, {
       id: 1, name:
       "Podiatrist"
   }, {
       id: 1, name:
       "Police dispatcher"
   }, {
       id: 1, name:
       "Police officer"
   }, {
       id: 1, name:
       "Policy processing clerk"
   }, {
       id: 1, name:
       "Political science teacher"
   }, {
       id: 1, name:
       "Political scientist"
   }, {
       id: 1, name:
       "Postal service clerk"
   }, {
       id: 1, name:
       "Postal service mail carrier"
   }, {
       id: 1, name:
       "Postal service mail processing machine operator"
   }, {
       id: 1, name:
       "Postal service mail processor"
   }, {
       id: 1, name:
       "Postal service mail sorter"
   }, {
       id: 1, name:
       "Postmaster"
   }, {
       id: 1, name:
       "Postsecondary teacher"
   }, {
       id: 1, name:
       "Poultry cutter"
   }, {
       id: 1, name:
       "Poultry trimmer"
   }, {
       id: 1, name:
       "Power dispatcher"
   }, {
       id: 1, name:
       "Power distributor"
   }, {
       id: 1, name:
       "Power plant operator"
   }, {
       id: 1, name:
       "Power tool repairer"
   }, {
       id: 1, name:
       "Precious stone worker"
   }, {
       id: 1, name:
       "Precision instrument repairer"
   }, {
       id: 1, name:
       "Prepress technician"
   }, {
       id: 1, name:
       "Preschool teacher"
   }, {
       id: 1, name:
       "Priest"
   }, {
       id: 1, name:
       "Print binding worker"
   }, {
       id: 1, name:
       "Printing press operator"
   }, {
       id: 1, name:
       "Private detective"
   }, {
       id: 1, name:
       "Probation officer"
   }, {
       id: 1, name:
       "Procurement clerk"
   }, {
       id: 1, name:
       "Producer"
   }, {
       id: 1, name:
       "Product promoter"
   }, {
       id: 1, name:
       "Production clerk"
   }, {
       id: 1, name:
       "Production occupation"
   }, {
       id: 1, name:
       "Proofreader"
   }, {
       id: 1, name:
       "Property manager"
   }, {
       id: 1, name:
       "Prosthetist"
   }, {
       id: 1, name:
       "Prosthodontist"
   }, {
       id: 1, name:
       "Psychiatric aide"
   }, {
       id: 1, name:
       "Psychiatric technician"
   }, {
       id: 1, name:
       "Psychiatrist"
   }, {
       id: 1, name:
       "Psychologist"
   }, {
       id: 1, name:
       "Psychology teacher"
   }, {
       id: 1, name:
       "Public relations manager"
   }, {
       id: 1, name:
       "Public relations specialist"
   }, {
       id: 1, name:
       "Pump operator"
   }, {
       id: 1, name:
       "Purchasing agent"
   }, {
       id: 1, name:
       "Purchasing manager"
   }, {
       id: 1, name:
       "Radiation therapist"
   }, {
       id: 1, name:
       "Radio announcer"
   }, {
       id: 1, name:
       "Radio equipment installer"
   }, {
       id: 1, name:
       "Radio operator"
   }, {
       id: 1, name:
       "Radiologic technician"
   }, {
       id: 1, name:
       "Radiologic technologist"
   }, {
       id: 1, name:
       "Rail car repairer"
   }, {
       id: 1, name:
       "Rail transportation worker"
   }, {
       id: 1, name:
       "Rail yard engineer"
   }, {
       id: 1, name:
       "Rail-track laying equipment operator"
   }, {
       id: 1, name:
       "Railroad brake operator"
   }, {
       id: 1, name:
       "Railroad conductor"
   }, {
       id: 1, name:
       "Railroad police"
   }, {
       id: 1, name:
       "Rancher"
   }, {
       id: 1, name:
       "Real estate appraiser"
   }, {
       id: 1, name:
       "Real estate broker"
   }, {
       id: 1, name:
       "Real estate manager"
   }, {
       id: 1, name:
       "Real estate sales agent"
   }, {
       id: 1, name:
       "Receiving clerk"
   }, {
       id: 1, name:
       "Receptionist"
   }, {
       id: 1, name:
       "Record clerk"
   }, {
       id: 1, name:
       "Recreation teacher"
   }, {
       id: 1, name:
       "Recreation worker"
   }, {
       id: 1, name:
       "Recreational therapist"
   }, {
       id: 1, name:
       "Recreational vehicle service technician"
   }, {
       id: 1, name:
       "Recyclable material collector"
   }, {
       id: 1, name:
       "Referee"
   }, {
       id: 1, name:
       "Refractory materials repairer"
   }, {
       id: 1, name:
       "Refrigeration installer"
   }, {
       id: 1, name:
       "Refrigeration mechanic"
   }, {
       id: 1, name:
       "Refuse collector"
   }, {
       id: 1, name:
       "Regional planner"
   }, {
       id: 1, name:
       "Registered nurse"
   }, {
       id: 1, name:
       "Rehabilitation counselor"
   }, {
       id: 1, name:
       "Reinforcing iron worker"
   }, {
       id: 1, name:
       "Reinforcing rebar worker"
   }, {
       id: 1, name:
       "Religion teacher"
   }, {
       id: 1, name:
       "Religious activities director"
   }, {
       id: 1, name:
       "Religious worker"
   }, {
       id: 1, name:
       "Rental clerk"
   }, {
       id: 1, name:
       "Repair worker"
   }, {
       id: 1, name:
       "Reporter"
   }, {
       id: 1, name:
       "Residential advisor"
   }, {
       id: 1, name:
       "Resort desk clerk"
   }, {
       id: 1, name:
       "Respiratory therapist"
   }, {
       id: 1, name:
       "Respiratory therapy technician"
   }, {
       id: 1, name:
       "Retail buyer"
   }, {
       id: 1, name:
       "Retail salesperson"
   }, {
       id: 1, name:
       "Revenue agent"
   }, {
       id: 1, name:
       "Rigger"
   }, {
       id: 1, name:
       "Rock splitter"
   }, {
       id: 1, name:
       "Rolling machine tender"
   }, {
       id: 1, name:
       "Roof bolter"
   }, {
       id: 1, name:
       "Roofer"
   }, {
       id: 1, name:
       "Rotary drill operator"
   }, {
       id: 1, name:
       "Roustabout"
   }, {
       id: 1, name:
       "Safe repairer"
   }, {
       id: 1, name:
       "Sailor"
   }, {
       id: 1, name:
       "Sales engineer"
   }, {
       id: 1, name:
       "Sales manager"
   }, {
       id: 1, name:
       "Sales representative"
   }, {
       id: 1, name:
       "Sampler"
   }, {
       id: 1, name:
       "Sawing machine operator"
   }, {
       id: 1, name:
       "Scaler"
   }, {
       id: 1, name:
       "School bus driver"
   }, {
       id: 1, name:
       "School psychologist"
   }, {
       id: 1, name:
       "School social worker"
   }, {
       id: 1, name:
       "Scout leader"
   }, {
       id: 1, name:
       "Sculptor"
   }, {
       id: 1, name:
       "Secondary education teacher"
   }, {
       id: 1, name:
       "Secondary school teacher"
   }, {
       id: 1, name:
       "Secretary"
   }, {
       id: 1, name:
       "Securities sales agent"
   }, {
       id: 1, name:
       "Security guard"
   }, {
       id: 1, name:
       "Security system installer"
   }, {
       id: 1, name:
       "Segmental paver"
   }, {
       id: 1, name:
       "Self-enrichment education teacher"
   }, {
       id: 1, name:
       "Semiconductor processor"
   }, {
       id: 1, name:
       "Septic tank servicer"
   }, {
       id: 1, name:
       "Set designer"
   }, {
       id: 1, name:
       "Sewer pipe cleaner"
   }, {
       id: 1, name:
       "Sewing machine operator"
   }, {
       id: 1, name:
       "Shampooer"
   }, {
       id: 1, name:
       "Shaper"
   }, {
       id: 1, name:
       "Sheet metal worker"
   }, {
       id: 1, name:
       "Sheriff's patrol officer"
   }, {
       id: 1, name:
       "Ship captain"
   }, {
       id: 1, name:
       "Ship engineer"
   }, {
       id: 1, name:
       "Ship loader"
   }, {
       id: 1, name:
       "Shipmate"
   }, {
       id: 1, name:
       "Shipping clerk"
   }, {
       id: 1, name:
       "Shoe machine operator"
   }, {
       id: 1, name:
       "Shoe worker"
   }, {
       id: 1, name:
       "Short order cook"
   }, {
       id: 1, name:
       "Signal operator"
   }, {
       id: 1, name:
       "Signal repairer"
   }, {
       id: 1, name:
       "Singer"
   }, {
       id: 1, name:
       "Ski patrol"
   }, {
       id: 1, name:
       "Skincare specialist"
   }, {
       id: 1, name:
       "Slaughterer"
   }, {
       id: 1, name:
       "Slicing machine tender"
   }, {
       id: 1, name:
       "Slot supervisor"
   }, {
       id: 1, name:
       "Social science research assistant"
   }, {
       id: 1, name:
       "Social sciences teacher"
   }, {
       id: 1, name:
       "Social scientist"
   },
   {
       id: 1, name:
       "Social service"
   },

   {
       id: 1, name:
       "Social service assistant"
   }, {
       id: 1, name:
       "Social service manager"
   }, {
       id: 1, name:
       "Social work teacher"
   }, {
       id: 1, name:
       "Social worker"
   }, {
       id: 1, name:
       "Sociologist"
   }, {
       id: 1, name:
       "Sociology teacher"
   }, {
       id: 1, name:
       "Software developer"
   }, {
       id: 1, name:
       "Software engineer"
   }, {
       id: 1, name:
       "Soil scientist"
   }, {
       id: 1, name:
       "Solderer"
   }, {
       id: 1, name:
       "Sorter"
   }, {
       id: 1, name:
       "Sound engineering technician"
   }, {
       id: 1, name:
       "Space scientist"
   }, {
       id: 1, name:
       "Special education teacher"
   }, {
       id: 1, name:
       "Speech-language pathologist"
   }, {
       id: 1, name:
       "Sports book runner"
   }, {
       id: 1, name:
       "Sports entertainer"
   }, {
       id: 1, name:
       "Sports performer"
   }, {
       id: 1, name:
       "Stationary engineer"
   }, {
       id: 1, name:
       "Statistical assistant"
   }, {
       id: 1, name:
       "Statistician"
   }, {
       id: 1, name:
       "Steamfitter"
   }, {
       id: 1, name:
       "Stock clerk"
   }, {
       id: 1, name:
       "Stock mover"
   }, {
       id: 1, name:
       "Stonemason"
   },
   {
       id: 1, name:
       "Student"
   },
   {
       id: 1, name:
       "Street vendor"
   }, {
       id: 1, name:
       "Streetcar operator"
   }, {
       id: 1, name:
       "Structural iron worker"
   }, {
       id: 1, name:
       "Structural metal fabricator"
   }, {
       id: 1, name:
       "Structural metal fitter"
   }, {
       id: 1, name:
       "Structural steel worker"
   }, {
       id: 1, name:
       "Stucco mason"
   }, {
       id: 1, name:
       "Substance abuse counselor"
   }, {
       id: 1, name:
       "Substance abuse social worker"
   }, {
       id: 1, name:
       "Subway operator"
   }, {
       id: 1, name:
       "Surfacing equipment operator"
   }, {
       id: 1, name:
       "Surgeon"
   }, {
       id: 1, name:
       "Surgical technologist"
   }, {
       id: 1, name:
       "Survey researcher"
   }, {
       id: 1, name:
       "Surveying technician"
   }, {
       id: 1, name:
       "Surveyor"
   }, {
       id: 1, name:
       "Switch operator"
   }, {
       id: 1, name:
       "Switchboard operator"
   }, {
       id: 1, name:
       "Tailor"
   }, {
       id: 1, name:
       "Tamping equipment operator"
   }, {
       id: 1, name:
       "Tank car loader"
   }, {
       id: 1, name:
       "Taper"
   }, {
       id: 1, name:
       "Tax collector"
   }, {
       id: 1, name:
       "Tax examiner"
   }, {
       id: 1, name:
       "Tax preparer"
   }, {
       id: 1, name:
       "Taxi driver"
   }, {
       id: 1, name:
       "Teacher assistant"
   }, {
       id: 1, name:
       "Teacher"
   }, {
       id: 1, name:
       "Team assembler"
   }, {
       id: 1, name:
       "Technical writer"
   }, {
       id: 1, name:
       "Telecommunications equipment installer"
   }, {
       id: 1, name:
       "Telemarketer"
   }, {
       id: 1, name:
       "Telephone operator"
   }, {
       id: 1, name:
       "Television announcer"
   }, {
       id: 1, name:
       "Teller"
   }, {
       id: 1, name:
       "Terrazzo finisher"
   }, {
       id: 1, name:
       "Terrazzo worker"
   }, {
       id: 1, name:
       "Tester"
   }, {
       id: 1, name:
       "Textile bleaching operator"
   }, {
       id: 1, name:
       "Textile cutting machine setter"
   }, {
       id: 1, name:
       "Textile knitting machine setter"
   }, {
       id: 1, name:
       "Textile presser"
   }, {
       id: 1, name:
       "Textile worker"
   }, {
       id: 1, name:
       "Therapist"
   }, {
       id: 1, name:
       "Ticket agent"
   }, {
       id: 1, name:
       "Ticket taker"
   }, {
       id: 1, name:
       "Tile setter"
   }, {
       id: 1, name:
       "Timekeeping clerk"
   }, {
       id: 1, name:
       "Timing device assembler"
   }, {
       id: 1, name:
       "Tire builder"
   }, {
       id: 1, name:
       "Tire changer"
   }, {
       id: 1, name:
       "Tire repairer"
   }, {
       id: 1, name:
       "Title abstractor"
   }, {
       id: 1, name:
       "Title examiner"
   }, {
       id: 1, name:
       "Title searcher"
   }, {
       id: 1, name:
       "Tobacco roasting machine operator"
   }, {
       id: 1, name:
       "Tool filer"
   }, {
       id: 1, name:
       "Tool grinder"
   }, {
       id: 1, name:
       "Tool maker"
   }, {
       id: 1, name:
       "Tool sharpener"
   }, {
       id: 1, name:
       "Tour guide"
   }, {
       id: 1, name:
       "Tower equipment installer"
   }, {
       id: 1, name:
       "Tower operator"
   },
    {
        id: 1, name:
        "Tuitions"
    },
   {
       id: 1, name:
       "Track switch repairer"
   }, {
       id: 1, name:
       "Tractor operator"
   }, {
       id: 1, name:
       "Tractor-trailer truck driver"
   },
   {
       id: 1, name:
       "Trader"
   },
   {
       id: 1, name:
       "Traffic clerk"
   }, {
       id: 1, name:
       "Traffic technician"
   }, {
       id: 1, name:
       "Training and development manager"
   }, {
       id: 1, name:
       "Training and development specialist"
   }, {
       id: 1, name:
       "Transit police"
   }, {
       id: 1, name:
       "Translator"
   }, {
       id: 1, name:
       "Transportation equipment painter"
   }, {
       id: 1, name:
       "Transportation inspector"
   }, {
       id: 1, name:
       "Transportation security screener"
   }, {
       id: 1, name:
       "Transportation worker"
   }, {
       id: 1, name:
       "Trapper"
   }, {
       id: 1, name:
       "Travel agent"
   }, {
       id: 1, name:
       "Travel clerk"
   }, {
       id: 1, name:
       "Travel guide"
   }, {
       id: 1, name:
       "Tree pruner"
   }, {
       id: 1, name:
       "Tree trimmer"
   }, {
       id: 1, name:
       "Trimmer"
   }, {
       id: 1, name:
       "Truck loader"
   }, {
       id: 1, name:
       "Truck mechanic"
   }, {
       id: 1, name:
       "Tuner"
   }, {
       id: 1, name:
       "Turning machine tool operator"
   }, {
       id: 1, name:
       "Typist"
   }, {
       id: 1, name:
       "Umpire"
   }, {
       id: 1, name:
       "Undertaker"
   }, {
       id: 1, name:
       "Upholsterer"
   }, {
       id: 1, name:
       "Urban planner"
   }, {
       id: 1, name:
       "Usher"
   }, {
       id: 1, name:
       "Valve installer"
   }, {
       id: 1, name:
       "Vending machine servicer"
   }, {
       id: 1, name:
       "Veterinarian"
   }, {
       id: 1, name:
       "Veterinary assistant"
   }, {
       id: 1, name:
       "Veterinary technician"
   }, {
       id: 1, name:
       "Vocational counselor"
   }, {
       id: 1, name:
       "Vocational education teacher"
   },
   {
       id: 1, name:
       "Volunteering"
   },
   {
       id: 1, name:
       "Waiter"
   }, {
       id: 1, name:
       "Waitress"
   }, {
       id: 1, name:
       "Watch repairer"
   }, {
       id: 1, name:
       "Water treatment plant operator"
   }, {
       id: 1, name:
       "Weaving machine setter"
   }, {
       id: 1, name:
       "Web developer"
   }, {
       id: 1, name:
       "Weigher"
   }, {
       id: 1, name:
       "Welder"
   }, {
       id: 1, name:
       "Wellhead pumper"
   }, {
       id: 1, name:
       "Wholesale buyer"
   }, {
       id: 1, name:
       "Wildlife biologist"
   }, {
       id: 1, name:
       "Window trimmer"
   }, {
       id: 1, name:
       "Wood patternmaker"
   }, {
       id: 1, name:
       "Woodworker"
   }, {
       id: 1, name:
       "Word processor"
   }, {
       id: 1, name:
       "Writer"
   }, {
       id: 1, name:
       "Yardmaster"
   }, {
       id: 1, name:
       "Zoologist"
   }
];

var
	occupation = [
		"Accountant",
		"Actor",
		"Actuary",
		"Adhesive bonding machine tender",
		"Adjudicator",
		"Administrative assistant",
		"Administrative services manager",
		"Adult education teacher",
		"Advertising manager",
		"Advertising sales agent",
		"Aerobics instructor",
		"Aerospace engineer",
		"Aerospace engineering technician",
		"Agent",
		"Agricultural engineer",
		"Agricultural equipment operator",
		"Agricultural grader",
		"Agricultural inspector",
		"Agricultural manager",
		"Agricultural sciences teacher",
		"Agricultural sorter",
		"Agricultural technician",
		"Agricultural worker",
		"Air conditioning installer",
		"Air conditioning mechanic",
		"Air traffic controller",
		"Aircraft cargo handling supervisor",
		"Aircraft mechanic",
		"Aircraft service technician",
		"Airline copilot",
		"Airline pilot",
		"Ambulance dispatcher",
		"Ambulance driver",
		"Amusement machine servicer",
		"Anesthesiologist",
		"Animal breeder",
		"Animal control worker",
		"Animal scientist",
		"Animal trainer",
		"Animator",
		"Answering service operator",
		"Anthropologist",
		"Apparel patternmaker",
		"Apparel worker",
		"Arbitrator",
		"Archeologist",
		"Architect",
		"Architectural drafter",
		"Architectural manager",
		"Archivist",
		"Art director",
		"Art teacher",
		"Artist",
		"Assembler",
		"Astronomer",
		"Athlete",
		"Athletic trainer",
		"ATM machine repairer",
		"Atmospheric scientist",
		"Attendant",
		"Audio and video equipment technician",
		"Audio-visual and multimedia collections specialist",
		"Audiologist",
		"Auditor",
		"Author",
		"Auto damage insurance appraiser",
		"Automotive and watercraft service attendant",
		"Automotive glass installer",
		"Automotive mechanic",
		"Avionics technician",
		"Baggage porter",
		"Bailiff",
		"Baker",
		"Barback",
		"Barber",
		"Bartender",
		"Basic education teacher",
		"Behavioral disorder counselor",
		"Bellhop",
		"Bench carpenter",
		"Bicycle repairer",
		"Bill and account collector",
		"Billing and posting clerk",
		"Biochemist",
		"Biological technician",
		"Biomedical engineer",
		"Biophysicist",
		"Blaster",
		"Blending machine operator",
		"Blockmason",
		"Boiler operator",
		"Boilermaker",
		"Bookkeeper",
		"Boring machine tool tender",
		"Brazer",
		"Brickmason",
		"Bridge and lock tender",
		"Broadcast news analyst",
		"Broadcast technician",
		"Brokerage clerk",
		"Budget analyst",
		"Building inspector",
		"Bus mechanic",
		"Butcher",
		"Buyer",
		"Cabinetmaker",
		"Cafeteria attendant",
		"Cafeteria cook",
		"Camera operator",
		"Camera repairer",
		"Cardiovascular technician",
		"Cargo agent",
		"Carpenter",
		"Carpet installer",
		"Cartographer",
		"Cashier",
		"Caster",
		"Ceiling tile installer",
		"Cellular equipment installer",
		"Cement mason",
		"Channeling machine operator",
		"Chauffeur",
		"Checker",
		"Chef",
		"Chemical engineer",
		"Chemical plant operator",
		"Chemist",
		"Chemistry teacher",
		"Chief executive",
		"Child social worker",
		"Childcare worker",
		"Chiropractor",
		"Choreographer",
		"Civil drafter",
		"Civil engineer",
		"Civil engineering technician",
		"Claims adjuster",
		"Claims examiner",
		"Claims investigator",
		"Cleaner",
		"Clinical laboratory technician",
		"Clinical laboratory technologist",
		"Clinical psychologist",
		"Coating worker",
		"Coatroom attendant",
		"Coil finisher",
		"Coil taper",
		"Coil winder",
		"Coin machine servicer",
		"Commercial diver",
		"Commercial pilot",
		"Commodities sales agent",
		"Communications equipment operator",
		"Communications teacher",
		"Community association manager",
		"Community service manager",
		"Compensation and benefits manager",
		"Compliance officer",
		"Composer",
		"Computer hardware engineer",
		"Computer network architect",
		"Computer operator",
		"Computer programmer",
		"Computer science teacher",
		"Computer support specialist",
		"Computer systems administrator",
		"Computer systems analyst",
		"Concierge",
		"Conciliator",
		"Concrete finisher",
		"Conservation science teacher",
		"Conservation scientist",
		"Conservation worker",
		"Conservator",
		"Construction inspector",
		"Construction manager",
		"Construction painter",
		"Construction worker",
		"Continuous mining machine operator",
		"Convention planner",
		"Conveyor operator",
		"Cook",
		"Cooling equipment operator",
		"Copy marker",
		"Correctional officer",
		"Correctional treatment specialist",
		"Correspondence clerk",
		"Correspondent",
		"Cosmetologist",
		"Cost estimator",
		"Costume attendant",
		"Counseling psychologist",
		"Counselor",
		"Courier",
		"Court reporter",
		"Craft artist",
		"Crane operator",
		"Credit analyst",
		"Credit checker",
		"Credit counselor",
		"Criminal investigator",
		"Criminal justice teacher",
		"Crossing guard",
		"Curator",
		"Custom sewer",
		"Customer service representative",
		"Cutter",
		"Cutting machine operator",
		"Dancer",
		"Data entry keyer",
		"Database administrator",
		"Decorating worker",
		"Delivery services driver",
		"Demonstrator",
		"Dental assistant",
		"Dental hygienist",
		"Dental laboratory technician",
		"Dentist",
		"Derrick operator",
		"Designer",
		"Desktop publisher",
		"Detective",
		"Diagnostic medical sonographer",
		"Die maker",
		"Diesel engine specialist",
		"Dietetic technician",
		"Dietitian",
		"Dinkey operator",
		"Director",
		"Dishwasher",
		"Dispatcher",
        "Doctor",
		"Door-to-door sales worker",
		"Drafter",
		"Dragline operator",
		"Drama teacher",
		"Dredge operator",
		"Dressing room attendant",
		"Dressmaker",
		"Drier operator",
		"Drilling machine tool operator",
		"Dry-cleaning worker",
		"Drywall installer",
		"Dyeing machine operator",
		"Earth driller",
		"Economics teacher",
		"Economist",
		"Editor",
		"Education administrator",
		"Electric motor repairer",
		"Electrical electronics drafter",
		"Electrical engineer",
		"Electrical equipment assembler",
		"Electrical installer",
		"Electrical power-line installer",
		"Electrician",
		"Electro-mechanical technician",
		"Elementary school teacher",
		"Elevator installer",
		"Elevator repairer",
		"Embalmer",
		"Emergency management director",
		"Emergency medical technician",
		"Engine assembler",
		"Engineer",
		"Engineering manager",
		"Engineering teacher",
		"English language teacher",
		"Engraver",
		"Entertainment attendant",
		"Environmental engineer",
		"Environmental science teacher",
		"Environmental scientist",
		"Epidemiologist",
		"Escort",
		"Etcher",
		"Event planner",
		"Excavating operator",
		"Executive administrative assistant",
		"Executive secretary",
		"Exhibit designer",
		"Expediting clerk",
		"Explosives worker",
		"Extraction worker",
		"Fabric mender",
		"Fabric patternmaker",
		"Fabricator",
		"Faller",
		"Family practitioner",
		"Family social worker",
		"Family therapist",
		"Farm advisor",
		"Farm equipment mechanic",
		"Farm labor contractor",
		"Farmer",
		"Farmworker",
		"Fashion designer",
		"Fast food cook",
		"Fence erector",
		"Fiberglass fabricator",
		"Fiberglass laminator",
		"File clerk",
		"Filling machine operator",
		"Film and video editor",
		"Financial analyst",
		"Financial examiner",
		"Financial manager",
		"Financial services sales agent",
		"Fine artist",
		"Fire alarm system installer",
		"Fire dispatcher",
		"Fire inspector",
		"Fire investigator",
		"Firefighter",
		"Fish and game warden",
		"Fish cutter",
		"Fish trimmer",
		"Fisher",
		"Fitness studies teacher",
		"Fitness trainer",
		"Flight attendant",
		"Floor finisher",
		"Floor layer",
		"Floor sander",
		"Floral designer",
		"Food batchmaker",
		"Food cooking machine operator",
		"Food preparation worker",
		"Food science technician",
		"Food scientist",
		"Food server",
		"Food service manager",
		"Food technologist",
		"Foreign language teacher",
		"Foreign literature teacher",
		"Forensic science technician",
		"Forest fire inspector",
		"Forest fire prevention specialist",
		"Forest worker",
		"Forester",
		"Forestry teacher",
		"Forging machine setter",
		"Foundry coremaker",
		"Freight agent",
		"Freight mover",
		"Fundraising manager",
		"Funeral attendant",
		"Funeral director",
		"Funeral service manager",
		"Furnace operator",
		"Furnishings worker",
		"Furniture finisher",
		"Gaming booth cashier",
		"Gaming cage worker",
		"Gaming change person",
		"Gaming dealer",
		"Gaming investigator",
		"Gaming manager",
		"Gaming surveillance officer",
		"Garment mender",
		"Garment presser",
		"Gas compressor",
		"Gas plant operator",
		"Gas pumping station operator",
		"General manager",
		"General practitioner",
		"Geographer",
		"Geography teacher",
		"Geological engineer",
		"Geological technician",
		"Geoscientist",
		"Glazier",
		"Government program eligibility interviewer",
		"Graduate teaching assistant",
		"Graphic designer",
		"Groundskeeper",
		"Groundskeeping worker",
		"Gynecologist",
		"Hairdresser",
		"Hairstylist",
		"Hand grinding worker",
		"Hand laborer",
		"Hand packager",
		"Hand packer",
		"Hand polishing worker",
		"Hand sewer",
		"Hazardous materials removal worker",
		"Head cook",
		"Health and safety engineer",
		"Health educator",
		"Health information technician",
		"Health services manager",
		"Health specialties teacher",
		"Healthcare social worker",
		"Hearing officer",
		"Heat treating equipment setter",
		"Heating installer",
		"Heating mechanic",
		"Heavy truck driver",
		"Highway maintenance worker",
		"Historian",
		"History teacher",
		"Hoist and winch operator",
		"Home appliance repairer",
		"Home economics teacher",
		"Home entertainment installer",
		"Home health aide",
		"Home management advisor",
		"Host",
		"Hostess",
		"Hostler",
		"Hotel desk clerk",
		"Housekeeping cleaner",
		"Human resources assistant",
		"Human resources manager",
		"Human service assistant",
		"Hunter",
		"Hydrologist",
		"Illustrator",
		"Industrial designer",
		"Industrial engineer",
		"Industrial engineering technician",
		"Industrial machinery mechanic",
		"Industrial production manager",
		"Industrial truck operator",
		"Industrial-organizational psychologist",
		"Information clerk",
		"Information research scientist",
		"Information security analyst",
		"Information systems manager",
		"Inspector",
		"Instructional coordinator",
		"Instructor",
		"Insulation worker",
		"Insurance claims clerk",
		"Insurance sales agent",
		"Insurance underwriter",
		"Intercity bus driver",
		"Interior designer",
		"Internist",
		"Interpreter",
		"Interviewer",
		"Investigator",
		"Jailer",
		"Janitor",
		"Jeweler",
		"Judge",
		"Judicial law clerk",
        "Jounalist",
		"Kettle operator",
		"Kiln operator",
		"Kindergarten teacher",
		"Laboratory animal caretaker",
		"Landscape architect",
		"Landscaping worker",
		"Lathe setter",
		"Laundry worker",
		"Law enforcement teacher",
		"Law teacher",
		"Lawyer",
		"Layout worker",
		"Leather worker",
		"Legal assistant",
		"Legal secretary",
		"Legislator",
		"Librarian",
		"Library assistant",
		"Library science teacher",
		"Library technician",
		"Licensed practical nurse",
		"Licensed vocational nurse",
		"Life scientist",
		"Lifeguard",
		"Light truck driver",
		"Line installer",
		"Literacy teacher",
		"Literature teacher",
		"Loading machine operator",
		"Loan clerk",
		"Loan interviewer",
		"Loan officer",
		"Lobby attendant",
		"Locker room attendant",
		"Locksmith",
		"Locomotive engineer",
		"Locomotive firer",
		"Lodging manager",
		"Log grader",
		"Logging equipment operator",
		"Logistician",
		"Machine feeder",
		"Machinist",
		"Magistrate judge",
		"Magistrate",
		"Maid",
		"Mail clerk",
		"Mail machine operator",
		"Mail superintendent",
		"Maintenance painter",
		"Maintenance worker",
		"Makeup artist",
		"Management analyst",
		"Manicurist",
		"Manufactured building installer",
		"Mapping technician",
		"Marble setter",
		"Marine engineer",
		"Marine oiler",
		"Market research analyst",
		"Marketing manager",
		"Marketing specialist",
		"Marriage therapist",
		"Massage therapist",
		"Material mover",
		"Materials engineer",
		"Materials scientist",
		"Mathematical science teacher",
		"Mathematical technician",
		"Mathematician",
		"Maxillofacial surgeon",
		"Measurer",
		"Meat cutter",
		"Meat packer",
		"Meat trimmer",
		"Mechanical door repairer",
		"Mechanical drafter",
		"Mechanical engineer",
		"Mechanical engineering technician",
		"Mediator",
		"Medical appliance technician",
		"Medical assistant",
		"Medical equipment preparer",
		"Medical equipment repairer",
		"Medical laboratory technician",
		"Medical laboratory technologist",
		"Medical records technician",
		"Medical scientist",
		"Medical secretary",
		"Medical services manager",
		"Medical transcriptionist",
		"Meeting planner",
		"Mental health counselor",
		"Mental health social worker",
		"Merchandise displayer",
		"Messenger",
		"Metal caster",
		"Metal patternmaker",
		"Metal pickling operator",
		"Metal pourer",
		"Metal worker",
		"Metal-refining furnace operator",
		"Metal-refining furnace tender",
		"Meter reader",
		"Microbiologist",
		"Middle school teacher",
		"Milling machine setter",
		"Millwright",
		"Mine cutting machine operator",
		"Mine shuttle car operator",
		"Mining engineer",
		"Mining safety engineer",
		"Mining safety inspector",
		"Mining service unit operator",
		"Mixing machine setter",
		"Mobile heavy equipment mechanic",
		"Mobile home installer",
		"Model maker",
		"Model",
		"Molder",
		"Mortician",
		"Motel desk clerk",
		"Motion picture projectionist",
		"Motorboat mechanic",
		"Motorboat operator",
		"Motorboat service technician",
		"Motorcycle mechanic",
		"Multimedia artist",
		"Museum technician",
		"Music director",
		"Music teacher",
		"Musical instrument repairer",
		"Musician",
		"Natural sciences manager",
		"Naval architect",
		"Network systems administrator",
		"New accounts clerk",
		"News vendor",
		"Nonfarm animal caretaker",
		"Nuclear engineer",
		"Nuclear medicine technologist",
		"Nuclear power reactor operator",
		"Nuclear technician",
		"Nursing aide",
		"Nursing instructor",
		"Nursing teacher",
		"Nutritionist",
		"Obstetrician",
		"Occupational health and safety specialist",
		"Occupational health and safety technician",
		"Occupational therapist",
		"Occupational therapy aide",
		"Occupational therapy assistant",
		"Offbearer",
		"Office clerk",
		"Office machine operator",
		"Operating engineer",
		"Operations manager",
		"Operations research analyst",
		"Ophthalmic laboratory technician",
		"Optician",
		"Optometrist",
		"Oral surgeon",
		"Order clerk",
		"Order filler",
		"Orderly",
		"Ordnance handling expert",
		"Orthodontist",
		"Orthotist",
		"Outdoor power equipment mechanic",
		"Oven operator",
		"Packaging machine operator",
		"Painter ",
		"Painting worker",
		"Paper goods machine setter",
		"Paperhanger",
		"Paralegal",
		"Paramedic",
		"Parking enforcement worker",
		"Parking lot attendant",
		"Parts salesperson",
		"Paving equipment operator",
		"Payroll clerk",
		"Pediatrician",
		"Pedicurist",
		"Personal care aide",
		"Personal chef",
		"Personal financial advisor",
		"Pest control worker",
		"Pesticide applicator",
		"Pesticide handler",
		"Pesticide sprayer",
		"Petroleum engineer",
		"Petroleum gauger",
		"Petroleum pump system operator",
		"Petroleum refinery operator",
		"Petroleum technician",
		"Pharmacist",
		"Pharmacy aide",
		"Pharmacy technician",
		"Philosophy teacher",
		"Photogrammetrist",
		"Photographer",
		"Photographic process worker",
		"Photographic processing machine operator",
		"Physical therapist aide",
		"Physical therapist assistant",
		"Physical therapist",
		"Physician assistant",
		"Physician",
		"Physicist",
		"Physics teacher",
		"Pile-driver operator",
		"Pipefitter",
		"Pipelayer",
		"Planing machine operator",
		"Planning clerk",
		"Plant operator",
		"Plant scientist",
		"Plasterer",
		"Plastic patternmaker",
		"Plastic worker",
		"Plumber",
		"Podiatrist",
		"Police dispatcher",
		"Police officer",
		"Policy processing clerk",
		"Political science teacher",
		"Political scientist",
		"Postal service clerk",
		"Postal service mail carrier",
		"Postal service mail processing machine operator",
		"Postal service mail processor",
		"Postal service mail sorter",
		"Postmaster",
		"Postsecondary teacher",
		"Poultry cutter",
		"Poultry trimmer",
		"Power dispatcher",
		"Power distributor",
		"Power plant operator",
		"Power tool repairer",
		"Precious stone worker",
		"Precision instrument repairer",
		"Prepress technician",
		"Preschool teacher",
		"Priest",
		"Print binding worker",
		"Printing press operator",
		"Private detective",
		"Probation officer",
		"Procurement clerk",
		"Producer",
		"Product promoter",
		"Production clerk",
		"Production occupation",
		"Proofreader",
		"Property manager",
		"Prosthetist",
		"Prosthodontist",
		"Psychiatric aide",
		"Psychiatric technician",
		"Psychiatrist",
		"Psychologist",
		"Psychology teacher",
		"Public relations manager",
		"Public relations specialist",
		"Pump operator",
		"Purchasing agent",
		"Purchasing manager",
		"Radiation therapist",
		"Radio announcer",
		"Radio equipment installer",
		"Radio operator",
		"Radiologic technician",
		"Radiologic technologist",
		"Rail car repairer",
		"Rail transportation worker",
		"Rail yard engineer",
		"Rail-track laying equipment operator",
		"Railroad brake operator",
		"Railroad conductor",
		"Railroad police",
		"Rancher",
		"Real estate appraiser",
		"Real estate broker",
		"Real estate manager",
		"Real estate sales agent",
		"Receiving clerk",
		"Receptionist",
		"Record clerk",
		"Recreation teacher",
		"Recreation worker",
		"Recreational therapist",
		"Recreational vehicle service technician",
		"Recyclable material collector",
		"Referee",
		"Refractory materials repairer",
		"Refrigeration installer",
		"Refrigeration mechanic",
		"Refuse collector",
		"Regional planner",
		"Registered nurse",
		"Rehabilitation counselor",
		"Reinforcing iron worker",
		"Reinforcing rebar worker",
		"Religion teacher",
		"Religious activities director",
		"Religious worker",
		"Rental clerk",
		"Repair worker",
		"Reporter",
		"Residential advisor",
		"Resort desk clerk",
		"Respiratory therapist",
		"Respiratory therapy technician",
		"Retail buyer",
		"Retail salesperson",
		"Revenue agent",
		"Rigger",
		"Rock splitter",
		"Rolling machine tender",
		"Roof bolter",
		"Roofer",
		"Rotary drill operator",
		"Roustabout",
		"Safe repairer",
		"Sailor",
		"Sales engineer",
		"Sales manager",
		"Sales representative",
		"Sampler",
		"Sawing machine operator",
		"Scaler",
		"School bus driver",
		"School psychologist",
		"School social worker",
		"Scout leader",
		"Sculptor",
		"Secondary education teacher",
		"Secondary school teacher",
		"Secretary",
		"Securities sales agent",
		"Security guard",
		"Security system installer",
		"Segmental paver",
		"Self-enrichment education teacher",
		"Semiconductor processor",
		"Septic tank servicer",
		"Set designer",
		"Sewer pipe cleaner",
		"Sewing machine operator",
		"Shampooer",
		"Shaper",
		"Sheet metal worker",
		"Sheriff's patrol officer",
		"Ship captain",
		"Ship engineer",
		"Ship loader",
		"Shipmate",
		"Shipping clerk",
		"Shoe machine operator",
		"Shoe worker",
		"Short order cook",
		"Signal operator",
		"Signal repairer",
		"Singer",
		"Ski patrol",
		"Skincare specialist",
		"Slaughterer",
		"Slicing machine tender",
		"Slot supervisor",
		"Social science research assistant",
		"Social sciences teacher",
		"Social scientist",
		"Social service assistant",
		"Social service manager",
		"Social work teacher",
		"Social worker",
		"Sociologist",
		"Sociology teacher",
		"Software developer",
		"Software engineer",
		"Soil scientist",
		"Solderer",
		"Sorter",
		"Sound engineering technician",
		"Space scientist",
		"Special education teacher",
		"Speech-language pathologist",
		"Sports book runner",
		"Sports entertainer",
		"Sports performer",
		"Stationary engineer",
		"Statistical assistant",
		"Statistician",
		"Steamfitter",
		"Stock clerk",
		"Stock mover",
		"Stonemason",
		"Street vendor",
		"Streetcar operator",
		"Structural iron worker",
		"Structural metal fabricator",
		"Structural metal fitter",
		"Structural steel worker",
		"Stucco mason",
		"Substance abuse counselor",
		"Substance abuse social worker",
		"Subway operator",
		"Surfacing equipment operator",
		"Surgeon",
		"Surgical technologist",
		"Survey researcher",
		"Surveying technician",
		"Surveyor",
		"Switch operator",
		"Switchboard operator",
		"Tailor",
		"Tamping equipment operator",
		"Tank car loader",
		"Taper",
		"Tax collector",
		"Tax examiner",
		"Tax preparer",
		"Taxi driver",
		"Teacher assistant",
		"Teacher",
		"Team assembler",
		"Technical writer",
		"Telecommunications equipment installer",
		"Telemarketer",
		"Telephone operator",
		"Television announcer",
		"Teller",
		"Terrazzo finisher",
		"Terrazzo worker",
		"Tester",
		"Textile bleaching operator",
		"Textile cutting machine setter",
		"Textile knitting machine setter",
		"Textile presser",
		"Textile worker",
		"Therapist",
		"Ticket agent",
		"Ticket taker",
		"Tile setter",
		"Timekeeping clerk",
		"Timing device assembler",
		"Tire builder",
		"Tire changer",
		"Tire repairer",
		"Title abstractor",
		"Title examiner",
		"Title searcher",
		"Tobacco roasting machine operator",
		"Tool filer",
		"Tool grinder",
		"Tool maker",
		"Tool sharpener",
		"Tour guide",
		"Tower equipment installer",
		"Tower operator",
		"Track switch repairer",
		"Tractor operator",
		"Tractor-trailer truck driver",
		"Traffic clerk",
		"Traffic technician",
		"Training and development manager",
		"Training and development specialist",
		"Transit police",
		"Translator",
		"Transportation equipment painter",
		"Transportation inspector",
		"Transportation security screener",
		"Transportation worker",
		"Trapper",
		"Travel agent",
		"Travel clerk",
		"Travel guide",
		"Tree pruner",
		"Tree trimmer",
		"Trimmer",
		"Truck loader",
		"Truck mechanic",
		"Tuner",
		"Turning machine tool operator",
		"Typist",
		"Umpire",
		"Undertaker",
		"Upholsterer",
		"Urban planner",
		"Usher",
		"Valve installer",
		"Vending machine servicer",
		"Veterinarian",
		"Veterinary assistant",
		"Veterinary technician",
		"Vocational counselor",
		"Vocational education teacher",
		"Waiter",
		"Waitress",
		"Watch repairer",
		"Water treatment plant operator",
		"Weaving machine setter",
		"Web developer",
		"Weigher",
		"Welder",
		"Wellhead pumper",
		"Wholesale buyer",
		"Wildlife biologist",
		"Window trimmer",
		"Wood patternmaker",
		"Woodworker",
		"Word processor",
		"Writer",
		"Yardmaster",
		"Zoologist"
	];