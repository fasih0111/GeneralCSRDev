﻿var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
        "ImgUrl": "01.png"
    }, {

        "ID": 2,
        "ShowDetails": {
            "Name": "Zero Hunger",
            "Goal": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture"
        },
        "ImgUrl": "02.png"
    }, {

        "ID": 3,
        "ShowDetails": {
            "Name": "Good Health & Well-Being",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },

        "ImgUrl": "03.png"
    }, {

        "ID": 4,
        "ShowDetails": {
            "Name": "Quality Education",
            "Goal": "Ensure inclusive and quality education for all and promote lifelong learning"
        },
        "ImgUrl": "04.png"
    }, {

        "ID": 5,
        "ShowDetails": {
            "Name": "Gender Equility",
            "Goal": "Achieve gender equality and empower all women and girls"
        },
        "ImgUrl": "05.png"
    }, {

        "ID": 6,
        "ShowDetails": {
            "Name": "Clean Water & Sanitation",
            "Goal": "Ensure access to water and sanitation for all"
        },
        "ImgUrl": "06.png"
    }, {

        "ID": 7,
        "ShowDetails": {
            "Name": "Affordable & Clean Energy",
            "Goal": "Ensure access to affordable, reliable, sustainable and modern energy for all"
        },

        "ImgUrl": "07.png"
    }, {

        "ID": 8,
        "ShowDetails": {
            "Name": "Decent Work & Economic Growth",
            "Goal": "Promote inclusive and sustainable economic growth, employment and decent work for all"
        },
        "ImgUrl": "08.png"
    }, {

        "ID": 9,
        "ShowDetails": {
            "Name": "Industry, Innovation & Infrastucture",
            "Goal": "Build resilient infrastructure, promote sustainable industrialization and foster innovation"
        },
        "ImgUrl": "09.png"
    }, {

        "ID": 10,
        "ShowDetails": {
            "Name": "Reduce Inequality",
            "Goal": "Reduce inequality within and among countries"
        },
        "ImgUrl": "10.png"
    }, {

        "ID": 11,
        "ShowDetails": {
            "Name": "Sustainable Cities & Communities",
            "Goal": "Make cities inclusive, safe, resilient and sustainable"
        },

        "ImgUrl": "11.png"
    }, {

        "ID": 12,
        "ShowDetails": {
            "Name": "Responsibile Consumption & Production",
            "Goal": "Ensure sustainable consumption and production patterns"
        },
        "ImgUrl": "12.png"
    }, {

        "ID": 13,
        "ShowDetails": {
            "Name": "Climate Action",
            "Goal": "End poverty in all its forms everywhere"
        },
        "ImgUrl": "13.png"
    }, {

        "ID": 14,
        "ShowDetails": {
            "Name": "Life Below Water",
            "Goal": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture"
        },
        "ImgUrl": "14.png"
    }, {

        "ID": 15,
        "ShowDetails": {
            "Name": "Life On Land",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },

        "ImgUrl": "15.png"
    }, {

        "ID": 16,
        "ShowDetails": {
            "Name": "Peace Justice & Strong Institutions",
            "Goal": "Ensure inclusive and quality education for all and promote lifelong learning"
        },
        "ImgUrl": "16.png"
    }, {

        "ID": 17,
        "ShowDetails": {
            "Name": "Partnership For The Goals",
            "Goal": "Ensure healthy lives and promote well-being for all at all ages"
        },

        "ImgUrl": "17.png"
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
   { id: 1, name: "accountant" }, {
       id: 1, name:
        "actor"
   }, {
       id: 1, name:
       "actuary"
   }, {
       id: 1, name:
       "adhesive bonding machine tender"
   }, {
       id: 1, name:
       "adjudicator"
   }, {
       id: 1, name:
       "administrative assistant"
   }, {
       id: 1, name:
       "administrative services manager"
   }, {
       id: 1, name:
       "adult education teacher"
   }, {
       id: 1, name:
       "advertising manager"
   }, {
       id: 1, name:
       "advertising sales agent"
   }, {
       id: 1, name:
       "aerobics instructor"
   }, {
       id: 1, name:
       "aerospace engineer"
   }, {
       id: 1, name:
       "aerospace engineering technician"
   }, {
       id: 1, name:
       "agent"
   }, {
       id: 1, name:
       "agricultural engineer"
   }, {
       id: 1, name:
       "agricultural equipment operator"
   }, {
       id: 1, name:
       "agricultural grader"
   }, {
       id: 1, name:
       "agricultural inspector"
   }, {
       id: 1, name:
       "agricultural manager"
   }, {
       id: 1, name:
       "agricultural sciences teacher"
   }, {
       id: 1, name:
       "agricultural sorter"
   }, {
       id: 1, name:
       "agricultural technician"
   }, {
       id: 1, name:
       "agricultural worker"
   }, {
       id: 1, name:
       "air conditioning installer"
   }, {
       id: 1, name:
       "air conditioning mechanic"
   }, {
       id: 1, name:
       "air traffic controller"
   }, {
       id: 1, name:
       "aircraft cargo handling supervisor"
   }, {
       id: 1, name:
       "aircraft mechanic"
   }, {
       id: 1, name:
       "aircraft service technician"
   }, {
       id: 1, name:
       "airline copilot"
   }, {
       id: 1, name:
       "airline pilot"
   }, {
       id: 1, name:
       "ambulance dispatcher"
   }, {
       id: 1, name:
       "ambulance driver"
   }, {
       id: 1, name:
       "amusement machine servicer"
   }, {
       id: 1, name:
       "anesthesiologist"
   }, {
       id: 1, name:
       "animal breeder"
   }, {
       id: 1, name:
       "animal control worker"
   }, {
       id: 1, name:
       "animal scientist"
   }, {
       id: 1, name:
       "animal trainer"
   }, {
       id: 1, name:
       "animator"
   }, {
       id: 1, name:
       "answering service operator"
   }, {
       id: 1, name:
       "anthropologist"
   }, {
       id: 1, name:
       "apparel patternmaker"
   }, {
       id: 1, name:
       "apparel worker"
   }, {
       id: 1, name:
       "arbitrator"
   }, {
       id: 1, name:
       "archeologist"
   }, {
       id: 1, name:
       "architect"
   }, {
       id: 1, name:
       "architectural drafter"
   }, {
       id: 1, name:
       "architectural manager"
   }, {
       id: 1, name:
       "archivist"
   }, {
       id: 1, name:
       "art director"
   }, {
       id: 1, name:
       "art teacher"
   }, {
       id: 1, name:
       "artist"
   }, {
       id: 1, name:
       "assembler"
   }, {
       id: 1, name:
       "astronomer"
   }, {
       id: 1, name:
       "athlete"
   }, {
       id: 1, name:
       "athletic trainer"
   }, {
       id: 1, name:
       "ATM machine repairer"
   }, {
       id: 1, name:
       "atmospheric scientist"
   }, {
       id: 1, name:
       "attendant"
   }, {
       id: 1, name:
       "audio and video equipment technician"
   }, {
       id: 1, name:
       "audio-visual and multimedia collections specialist"
   }, {
       id: 1, name:
       "audiologist"
   }, {
       id: 1, name:
       "auditor"
   }, {
       id: 1, name:
       "author"
   }, {
       id: 1, name:
       "auto damage insurance appraiser"
   }, {
       id: 1, name:
       "automotive and watercraft service attendant"
   }, {
       id: 1, name:
       "automotive glass installer"
   }, {
       id: 1, name:
       "automotive mechanic"
   }, {
       id: 1, name:
       "avionics technician"
   }, {
       id: 1, name:
       "baggage porter"
   }, {
       id: 1, name:
       "bailiff"
   }, {
       id: 1, name:
       "baker"
   }, {
       id: 1, name:
       "barback"
   }, {
       id: 1, name:
       "barber"
   }, {
       id: 1, name:
       "bartender"
   }, {
       id: 1, name:
       "basic education teacher"
   }, {
       id: 1, name:
       "behavioral disorder counselor"
   }, {
       id: 1, name:
       "bellhop"
   }, {
       id: 1, name:
       "bench carpenter"
   }, {
       id: 1, name:
       "bicycle repairer"
   }, {
       id: 1, name:
       "bill and account collector"
   }, {
       id: 1, name:
       "billing and posting clerk"
   }, {
       id: 1, name:
       "biochemist"
   }, {
       id: 1, name:
       "biological technician"
   }, {
       id: 1, name:
       "biomedical engineer"
   }, {
       id: 1, name:
       "biophysicist"
   }, {
       id: 1, name:
       "blaster"
   }, {
       id: 1, name:
       "blending machine operator"
   }, {
       id: 1, name:
       "blockmason"
   }, {
       id: 1, name:
       "boiler operator"
   }, {
       id: 1, name:
       "boilermaker"
   }, {
       id: 1, name:
       "bookkeeper"
   }, {
       id: 1, name:
       "boring machine tool tender"
   }, {
       id: 1, name:
       "brazer"
   }, {
       id: 1, name:
       "brickmason"
   }, {
       id: 1, name:
       "bridge and lock tender"
   }, {
       id: 1, name:
       "broadcast news analyst"
   }, {
       id: 1, name:
       "broadcast technician"
   }, {
       id: 1, name:
       "brokerage clerk"
   }, {
       id: 1, name:
       "budget analyst"
   }, {
       id: 1, name:
       "building inspector"
   }, {
       id: 1, name:
       "bus mechanic"
   }, {
       id: 1, name:
       "butcher"
   }, {
       id: 1, name:
       "buyer"
   }, {
       id: 1, name:
       "cabinetmaker"
   }, {
       id: 1, name:
       "cafeteria attendant"
   }, {
       id: 1, name:
       "cafeteria cook"
   }, {
       id: 1, name:
       "camera operator"
   }, {
       id: 1, name:
       "camera repairer"
   }, {
       id: 1, name:
       "cardiovascular technician"
   }, {
       id: 1, name:
       "cargo agent"
   }, {
       id: 1, name:
       "carpenter"
   }, {
       id: 1, name:
       "carpet installer"
   }, {
       id: 1, name:
       "cartographer"
   }, {
       id: 1, name:
       "cashier"
   }, {
       id: 1, name:
       "caster"
   }, {
       id: 1, name:
       "ceiling tile installer"
   }, {
       id: 1, name:
       "cellular equipment installer"
   }, {
       id: 1, name:
       "cement mason"
   }, {
       id: 1, name:
       "channeling machine operator"
   }, {
       id: 1, name:
       "chauffeur"
   }, {
       id: 1, name:
       "checker"
   }, {
       id: 1, name:
       "chef"
   }, {
       id: 1, name:
       "chemical engineer"
   }, {
       id: 1, name:
       "chemical plant operator"
   }, {
       id: 1, name:
       "chemist"
   }, {
       id: 1, name:
       "chemistry teacher"
   }, {
       id: 1, name:
       "chief executive"
   }, {
       id: 1, name:
       "child social worker"
   }, {
       id: 1, name:
       "childcare worker"
   }, {
       id: 1, name:
       "chiropractor"
   }, {
       id: 1, name:
       "choreographer"
   }, {
       id: 1, name:
       "civil drafter"
   }, {
       id: 1, name:
       "civil engineer"
   }, {
       id: 1, name:
       "civil engineering technician"
   }, {
       id: 1, name:
       "claims adjuster"
   }, {
       id: 1, name:
       "claims examiner"
   }, {
       id: 1, name:
       "claims investigator"
   }, {
       id: 1, name:
       "cleaner"
   }, {
       id: 1, name:
       "clinical laboratory technician"
   }, {
       id: 1, name:
       "clinical laboratory technologist"
   }, {
       id: 1, name:
       "clinical psychologist"
   }, {
       id: 1, name:
       "coating worker"
   }, {
       id: 1, name:
       "coatroom attendant"
   }, {
       id: 1, name:
       "coil finisher"
   }, {
       id: 1, name:
       "coil taper"
   }, {
       id: 1, name:
       "coil winder"
   }, {
       id: 1, name:
       "coin machine servicer"
   }, {
       id: 1, name:
       "commercial diver"
   }, {
       id: 1, name:
       "commercial pilot"
   }, {
       id: 1, name:
       "commodities sales agent"
   }, {
       id: 1, name:
       "communications equipment operator"
   }, {
       id: 1, name:
       "communications teacher"
   }, {
       id: 1, name:
       "community association manager"
   }, {
       id: 1, name:
       "community service manager"
   }, {
       id: 1, name:
       "compensation and benefits manager"
   }, {
       id: 1, name:
       "compliance officer"
   }, {
       id: 1, name:
       "composer"
   }, {
       id: 1, name:
       "computer hardware engineer"
   }, {
       id: 1, name:
       "computer network architect"
   }, {
       id: 1, name:
       "computer operator"
   }, {
       id: 1, name:
       "computer programmer"
   }, {
       id: 1, name:
       "computer science teacher"
   }, {
       id: 1, name:
       "computer support specialist"
   }, {
       id: 1, name:
       "computer systems administrator"
   }, {
       id: 1, name:
       "computer systems analyst"
   }, {
       id: 1, name:
       "concierge"
   }, {
       id: 1, name:
       "conciliator"
   }, {
       id: 1, name:
       "concrete finisher"
   }, {
       id: 1, name:
       "conservation science teacher"
   }, {
       id: 1, name:
       "conservation scientist"
   }, {
       id: 1, name:
       "conservation worker"
   }, {
       id: 1, name:
       "conservator"
   }, {
       id: 1, name:
       "construction inspector"
   }, {
       id: 1, name:
       "construction manager"
   }, {
       id: 1, name:
       "construction painter"
   }, {
       id: 1, name:
       "construction worker"
   }, {
       id: 1, name:
       "continuous mining machine operator"
   }, {
       id: 1, name:
       "convention planner"
   }, {
       id: 1, name:
       "conveyor operator"
   }, {
       id: 1, name:
       "cook"
   }, {
       id: 1, name:
       "cooling equipment operator"
   }, {
       id: 1, name:
       "copy marker"
   }, {
       id: 1, name:
       "correctional officer"
   }, {
       id: 1, name:
       "correctional treatment specialist"
   }, {
       id: 1, name:
       "correspondence clerk"
   }, {
       id: 1, name:
       "correspondent"
   }, {
       id: 1, name:
       "cosmetologist"
   }, {
       id: 1, name:
       "cost estimator"
   }, {
       id: 1, name:
       "costume attendant"
   }, {
       id: 1, name:
       "counseling psychologist"
   }, {
       id: 1, name:
       "counselor"
   }, {
       id: 1, name:
       "courier"
   }, {
       id: 1, name:
       "court reporter"
   }, {
       id: 1, name:
       "craft artist"
   }, {
       id: 1, name:
       "crane operator"
   }, {
       id: 1, name:
       "credit analyst"
   }, {
       id: 1, name:
       "credit checker"
   }, {
       id: 1, name:
       "credit counselor"
   }, {
       id: 1, name:
       "criminal investigator"
   }, {
       id: 1, name:
       "criminal justice teacher"
   }, {
       id: 1, name:
       "crossing guard"
   }, {
       id: 1, name:
       "curator"
   }, {
       id: 1, name:
       "custom sewer"
   }, {
       id: 1, name:
       "customer service representative"
   }, {
       id: 1, name:
       "cutter"
   }, {
       id: 1, name:
       "cutting machine operator"
   }, {
       id: 1, name:
       "dancer"
   }, {
       id: 1, name:
       "data entry keyer"
   }, {
       id: 1, name:
       "database administrator"
   }, {
       id: 1, name:
       "decorating worker"
   }, {
       id: 1, name:
       "delivery services driver"
   }, {
       id: 1, name:
       "demonstrator"
   }, {
       id: 1, name:
       "dental assistant"
   }, {
       id: 1, name:
       "dental hygienist"
   }, {
       id: 1, name:
       "dental laboratory technician"
   }, {
       id: 1, name:
       "dentist"
   }, {
       id: 1, name:
       "derrick operator"
   }, {
       id: 1, name:
       "designer"
   }, {
       id: 1, name:
       "desktop publisher"
   }, {
       id: 1, name:
       "detective"
   }, {
       id: 1, name:
       "diagnostic medical sonographer"
   }, {
       id: 1, name:
       "die maker"
   }, {
       id: 1, name:
       "diesel engine specialist"
   }, {
       id: 1, name:
       "dietetic technician"
   }, {
       id: 1, name:
       "dietitian"
   }, {
       id: 1, name:
       "dinkey operator"
   }, {
       id: 1, name:
       "director"
   }, {
       id: 1, name:
       "dishwasher"
   }, {
       id: 1, name:
       "dispatcher"
   }, {
       id: 1, name:
       "door-to-door sales worker"
   }, {
       id: 1, name:
       "drafter"
   }, {
       id: 1, name:
       "dragline operator"
   }, {
       id: 1, name:
       "drama teacher"
   }, {
       id: 1, name:
       "dredge operator"
   }, {
       id: 1, name:
       "dressing room attendant"
   }, {
       id: 1, name:
       "dressmaker"
   }, {
       id: 1, name:
       "drier operator"
   }, {
       id: 1, name:
       "drilling machine tool operator"
   }, {
       id: 1, name:
       "dry-cleaning worker"
   }, {
       id: 1, name:
       "drywall installer"
   }, {
       id: 1, name:
       "dyeing machine operator"
   }, {
       id: 1, name:
       "earth driller"
   }, {
       id: 1, name:
       "economics teacher"
   }, {
       id: 1, name:
       "economist"
   }, {
       id: 1, name:
       "editor"
   }, {
       id: 1, name:
       "education administrator"
   }, {
       id: 1, name:
       "electric motor repairer"
   }, {
       id: 1, name:
       "electrical electronics drafter"
   }, {
       id: 1, name:
       "electrical engineer"
   }, {
       id: 1, name:
       "electrical equipment assembler"
   }, {
       id: 1, name:
       "electrical installer"
   }, {
       id: 1, name:
       "electrical power-line installer"
   }, {
       id: 1, name:
       "electrician"
   }, {
       id: 1, name:
       "electro-mechanical technician"
   }, {
       id: 1, name:
       "elementary school teacher"
   }, {
       id: 1, name:
       "elevator installer"
   }, {
       id: 1, name:
       "elevator repairer"
   }, {
       id: 1, name:
       "embalmer"
   }, {
       id: 1, name:
       "emergency management director"
   }, {
       id: 1, name:
       "emergency medical technician"
   }, {
       id: 1, name:
       "engine assembler"
   }, {
       id: 1, name:
       "engineer"
   }, {
       id: 1, name:
       "engineering manager"
   }, {
       id: 1, name:
       "engineering teacher"
   }, {
       id: 1, name:
       "english language teacher"
   }, {
       id: 1, name:
       "engraver"
   }, {
       id: 1, name:
       "entertainment attendant"
   }, {
       id: 1, name:
       "environmental engineer"
   }, {
       id: 1, name:
       "environmental science teacher"
   }, {
       id: 1, name:
       "environmental scientist"
   }, {
       id: 1, name:
       "epidemiologist"
   }, {
       id: 1, name:
       "escort"
   }, {
       id: 1, name:
       "etcher"
   }, {
       id: 1, name:
       "event planner"
   }, {
       id: 1, name:
       "excavating operator"
   }, {
       id: 1, name:
       "executive administrative assistant"
   }, {
       id: 1, name:
       "executive secretary"
   }, {
       id: 1, name:
       "exhibit designer"
   }, {
       id: 1, name:
       "expediting clerk"
   }, {
       id: 1, name:
       "explosives worker"
   }, {
       id: 1, name:
       "extraction worker"
   }, {
       id: 1, name:
       "fabric mender"
   }, {
       id: 1, name:
       "fabric patternmaker"
   }, {
       id: 1, name:
       "fabricator"
   }, {
       id: 1, name:
       "faller"
   }, {
       id: 1, name:
       "family practitioner"
   }, {
       id: 1, name:
       "family social worker"
   }, {
       id: 1, name:
       "family therapist"
   }, {
       id: 1, name:
       "farm advisor"
   }, {
       id: 1, name:
       "farm equipment mechanic"
   }, {
       id: 1, name:
       "farm labor contractor"
   }, {
       id: 1, name:
       "farmer"
   }, {
       id: 1, name:
       "farmworker"
   }, {
       id: 1, name:
       "fashion designer"
   }, {
       id: 1, name:
       "fast food cook"
   }, {
       id: 1, name:
       "fence erector"
   }, {
       id: 1, name:
       "fiberglass fabricator"
   }, {
       id: 1, name:
       "fiberglass laminator"
   }, {
       id: 1, name:
       "file clerk"
   }, {
       id: 1, name:
       "filling machine operator"
   }, {
       id: 1, name:
       "film and video editor"
   }, {
       id: 1, name:
       "financial analyst"
   }, {
       id: 1, name:
       "financial examiner"
   }, {
       id: 1, name:
       "financial manager"
   }, {
       id: 1, name:
       "financial services sales agent"
   }, {
       id: 1, name:
       "fine artist"
   }, {
       id: 1, name:
       "fire alarm system installer"
   }, {
       id: 1, name:
       "fire dispatcher"
   }, {
       id: 1, name:
       "fire inspector"
   }, {
       id: 1, name:
       "fire investigator"
   }, {
       id: 1, name:
       "firefighter"
   }, {
       id: 1, name:
       "fish and game warden"
   }, {
       id: 1, name:
       "fish cutter"
   }, {
       id: 1, name:
       "fish trimmer"
   }, {
       id: 1, name:
       "fisher"
   }, {
       id: 1, name:
       "fitness studies teacher"
   }, {
       id: 1, name:
       "fitness trainer"
   }, {
       id: 1, name:
       "flight attendant"
   }, {
       id: 1, name:
       "floor finisher"
   }, {
       id: 1, name:
       "floor layer"
   }, {
       id: 1, name:
       "floor sander"
   }, {
       id: 1, name:
       "floral designer"
   }, {
       id: 1, name:
       "food batchmaker"
   }, {
       id: 1, name:
       "food cooking machine operator"
   }, {
       id: 1, name:
       "food preparation worker"
   }, {
       id: 1, name:
       "food science technician"
   }, {
       id: 1, name:
       "food scientist"
   }, {
       id: 1, name:
       "food server"
   }, {
       id: 1, name:
       "food service manager"
   }, {
       id: 1, name:
       "food technologist"
   }, {
       id: 1, name:
       "foreign language teacher"
   }, {
       id: 1, name:
       "foreign literature teacher"
   }, {
       id: 1, name:
       "forensic science technician"
   }, {
       id: 1, name:
       "forest fire inspector"
   }, {
       id: 1, name:
       "forest fire prevention specialist"
   }, {
       id: 1, name:
       "forest worker"
   }, {
       id: 1, name:
       "forester"
   }, {
       id: 1, name:
       "forestry teacher"
   }, {
       id: 1, name:
       "forging machine setter"
   }, {
       id: 1, name:
       "foundry coremaker"
   }, {
       id: 1, name:
       "freight agent"
   }, {
       id: 1, name:
       "freight mover"
   }, {
       id: 1, name:
       "fundraising manager"
   }, {
       id: 1, name:
       "funeral attendant"
   }, {
       id: 1, name:
       "funeral director"
   }, {
       id: 1, name:
       "funeral service manager"
   }, {
       id: 1, name:
       "furnace operator"
   }, {
       id: 1, name:
       "furnishings worker"
   }, {
       id: 1, name:
       "furniture finisher"
   }, {
       id: 1, name:
       "gaming booth cashier"
   }, {
       id: 1, name:
       "gaming cage worker"
   }, {
       id: 1, name:
       "gaming change person"
   }, {
       id: 1, name:
       "gaming dealer"
   }, {
       id: 1, name:
       "gaming investigator"
   }, {
       id: 1, name:
       "gaming manager"
   }, {
       id: 1, name:
       "gaming surveillance officer"
   }, {
       id: 1, name:
       "garment mender"
   }, {
       id: 1, name:
       "garment presser"
   }, {
       id: 1, name:
       "gas compressor"
   }, {
       id: 1, name:
       "gas plant operator"
   }, {
       id: 1, name:
       "gas pumping station operator"
   }, {
       id: 1, name:
       "general manager"
   }, {
       id: 1, name:
       "general practitioner"
   }, {
       id: 1, name:
       "geographer"
   }, {
       id: 1, name:
       "geography teacher"
   }, {
       id: 1, name:
       "geological engineer"
   }, {
       id: 1, name:
       "geological technician"
   }, {
       id: 1, name:
       "geoscientist"
   }, {
       id: 1, name:
       "glazier"
   }, {
       id: 1, name:
       "government program eligibility interviewer"
   }, {
       id: 1, name:
       "graduate teaching assistant"
   }, {
       id: 1, name:
       "graphic designer"
   }, {
       id: 1, name:
       "groundskeeper"
   }, {
       id: 1, name:
       "groundskeeping worker"
   }, {
       id: 1, name:
       "gynecologist"
   }, {
       id: 1, name:
       "hairdresser"
   }, {
       id: 1, name:
       "hairstylist"
   }, {
       id: 1, name:
       "hand grinding worker"
   }, {
       id: 1, name:
       "hand laborer"
   }, {
       id: 1, name:
       "hand packager"
   }, {
       id: 1, name:
       "hand packer"
   }, {
       id: 1, name:
       "hand polishing worker"
   }, {
       id: 1, name:
       "hand sewer"
   }, {
       id: 1, name:
       "hazardous materials removal worker"
   }, {
       id: 1, name:
       "head cook"
   }, {
       id: 1, name:
       "health and safety engineer"
   }, {
       id: 1, name:
       "health educator"
   }, {
       id: 1, name:
       "health information technician"
   }, {
       id: 1, name:
       "health services manager"
   }, {
       id: 1, name:
       "health specialties teacher"
   }, {
       id: 1, name:
       "healthcare social worker"
   }, {
       id: 1, name:
       "hearing officer"
   }, {
       id: 1, name:
       "heat treating equipment setter"
   }, {
       id: 1, name:
       "heating installer"
   }, {
       id: 1, name:
       "heating mechanic"
   }, {
       id: 1, name:
       "heavy truck driver"
   }, {
       id: 1, name:
       "highway maintenance worker"
   }, {
       id: 1, name:
       "historian"
   }, {
       id: 1, name:
       "history teacher"
   }, {
       id: 1, name:
       "hoist and winch operator"
   }, {
       id: 1, name:
       "home appliance repairer"
   }, {
       id: 1, name:
       "home economics teacher"
   }, {
       id: 1, name:
       "home entertainment installer"
   }, {
       id: 1, name:
       "home health aide"
   }, {
       id: 1, name:
       "home management advisor"
   }, {
       id: 1, name:
       "host"
   }, {
       id: 1, name:
       "hostess"
   }, {
       id: 1, name:
       "hostler"
   }, {
       id: 1, name:
       "hotel desk clerk"
   }, {
       id: 1, name:
       "housekeeping cleaner"
   }, {
       id: 1, name:
       "human resources assistant"
   }, {
       id: 1, name:
       "human resources manager"
   }, {
       id: 1, name:
       "human service assistant"
   }, {
       id: 1, name:
       "hunter"
   }, {
       id: 1, name:
       "hydrologist"
   }, {
       id: 1, name:
       "illustrator"
   }, {
       id: 1, name:
       "industrial designer"
   }, {
       id: 1, name:
       "industrial engineer"
   }, {
       id: 1, name:
       "industrial engineering technician"
   }, {
       id: 1, name:
       "industrial machinery mechanic"
   }, {
       id: 1, name:
       "industrial production manager"
   }, {
       id: 1, name:
       "industrial truck operator"
   }, {
       id: 1, name:
       "industrial-organizational psychologist"
   }, {
       id: 1, name:
       "information clerk"
   }, {
       id: 1, name:
       "information research scientist"
   }, {
       id: 1, name:
       "information security analyst"
   }, {
       id: 1, name:
       "information systems manager"
   }, {
       id: 1, name:
       "inspector"
   }, {
       id: 1, name:
       "instructional coordinator"
   }, {
       id: 1, name:
       "instructor"
   }, {
       id: 1, name:
       "insulation worker"
   }, {
       id: 1, name:
       "insurance claims clerk"
   }, {
       id: 1, name:
       "insurance sales agent"
   }, {
       id: 1, name:
       "insurance underwriter"
   }, {
       id: 1, name:
       "intercity bus driver"
   }, {
       id: 1, name:
       "interior designer"
   }, {
       id: 1, name:
       "internist"
   }, {
       id: 1, name:
       "interpreter"
   }, {
       id: 1, name:
       "interviewer"
   }, {
       id: 1, name:
       "investigator"
   }, {
       id: 1, name:
       "jailer"
   }, {
       id: 1, name:
       "janitor"
   }, {
       id: 1, name:
       "jeweler"
   }, {
       id: 1, name:
       "judge"
   }, {
       id: 1, name:
       "judicial law clerk"
   }, {
       id: 1, name:
       "kettle operator"
   }, {
       id: 1, name:
       "kiln operator"
   }, {
       id: 1, name:
       "kindergarten teacher"
   }, {
       id: 1, name:
       "laboratory animal caretaker"
   }, {
       id: 1, name:
       "landscape architect"
   }, {
       id: 1, name:
       "landscaping worker"
   }, {
       id: 1, name:
       "lathe setter"
   }, {
       id: 1, name:
       "laundry worker"
   }, {
       id: 1, name:
       "law enforcement teacher"
   }, {
       id: 1, name:
       "law teacher"
   }, {
       id: 1, name:
       "lawyer"
   }, {
       id: 1, name:
       "layout worker"
   }, {
       id: 1, name:
       "leather worker"
   }, {
       id: 1, name:
       "legal assistant"
   }, {
       id: 1, name:
       "legal secretary"
   }, {
       id: 1, name:
       "legislator"
   }, {
       id: 1, name:
       "librarian"
   }, {
       id: 1, name:
       "library assistant"
   }, {
       id: 1, name:
       "library science teacher"
   }, {
       id: 1, name:
       "library technician"
   }, {
       id: 1, name:
       "licensed practical nurse"
   }, {
       id: 1, name:
       "licensed vocational nurse"
   }, {
       id: 1, name:
       "life scientist"
   }, {
       id: 1, name:
       "lifeguard"
   }, {
       id: 1, name:
       "light truck driver"
   }, {
       id: 1, name:
       "line installer"
   }, {
       id: 1, name:
       "literacy teacher"
   }, {
       id: 1, name:
       "literature teacher"
   }, {
       id: 1, name:
       "loading machine operator"
   }, {
       id: 1, name:
       "loan clerk"
   }, {
       id: 1, name:
       "loan interviewer"
   }, {
       id: 1, name:
       "loan officer"
   }, {
       id: 1, name:
       "lobby attendant"
   }, {
       id: 1, name:
       "locker room attendant"
   }, {
       id: 1, name:
       "locksmith"
   }, {
       id: 1, name:
       "locomotive engineer"
   }, {
       id: 1, name:
       "locomotive firer"
   }, {
       id: 1, name:
       "lodging manager"
   }, {
       id: 1, name:
       "log grader"
   }, {
       id: 1, name:
       "logging equipment operator"
   }, {
       id: 1, name:
       "logistician"
   }, {
       id: 1, name:
       "machine feeder"
   }, {
       id: 1, name:
       "machinist"
   }, {
       id: 1, name:
       "magistrate judge"
   }, {
       id: 1, name:
       "magistrate"
   }, {
       id: 1, name:
       "maid"
   }, {
       id: 1, name:
       "mail clerk"
   }, {
       id: 1, name:
       "mail machine operator"
   }, {
       id: 1, name:
       "mail superintendent"
   }, {
       id: 1, name:
       "maintenance painter"
   }, {
       id: 1, name:
       "maintenance worker"
   }, {
       id: 1, name:
       "makeup artist"
   }, {
       id: 1, name:
       "management analyst"
   }, {
       id: 1, name:
       "manicurist"
   }, {
       id: 1, name:
       "manufactured building installer"
   }, {
       id: 1, name:
       "mapping technician"
   }, {
       id: 1, name:
       "marble setter"
   }, {
       id: 1, name:
       "marine engineer"
   }, {
       id: 1, name:
       "marine oiler"
   }, {
       id: 1, name:
       "market research analyst"
   }, {
       id: 1, name:
       "marketing manager"
   }, {
       id: 1, name:
       "marketing specialist"
   }, {
       id: 1, name:
       "marriage therapist"
   }, {
       id: 1, name:
       "massage therapist"
   }, {
       id: 1, name:
       "material mover"
   }, {
       id: 1, name:
       "materials engineer"
   }, {
       id: 1, name:
       "materials scientist"
   }, {
       id: 1, name:
       "mathematical science teacher"
   }, {
       id: 1, name:
       "mathematical technician"
   }, {
       id: 1, name:
       "mathematician"
   }, {
       id: 1, name:
       "maxillofacial surgeon"
   }, {
       id: 1, name:
       "measurer"
   }, {
       id: 1, name:
       "meat cutter"
   }, {
       id: 1, name:
       "meat packer"
   }, {
       id: 1, name:
       "meat trimmer"
   }, {
       id: 1, name:
       "mechanical door repairer"
   }, {
       id: 1, name:
       "mechanical drafter"
   }, {
       id: 1, name:
       "mechanical engineer"
   }, {
       id: 1, name:
       "mechanical engineering technician"
   }, {
       id: 1, name:
       "mediator"
   }, {
       id: 1, name:
       "medical appliance technician"
   }, {
       id: 1, name:
       "medical assistant"
   }, {
       id: 1, name:
       "medical equipment preparer"
   }, {
       id: 1, name:
       "medical equipment repairer"
   }, {
       id: 1, name:
       "medical laboratory technician"
   }, {
       id: 1, name:
       "medical laboratory technologist"
   }, {
       id: 1, name:
       "medical records technician"
   }, {
       id: 1, name:
       "medical scientist"
   }, {
       id: 1, name:
       "medical secretary"
   }, {
       id: 1, name:
       "medical services manager"
   }, {
       id: 1, name:
       "medical transcriptionist"
   }, {
       id: 1, name:
       "meeting planner"
   }, {
       id: 1, name:
       "mental health counselor"
   }, {
       id: 1, name:
       "mental health social worker"
   }, {
       id: 1, name:
       "merchandise displayer"
   }, {
       id: 1, name:
       "messenger"
   }, {
       id: 1, name:
       "metal caster"
   }, {
       id: 1, name:
       "metal patternmaker"
   }, {
       id: 1, name:
       "metal pickling operator"
   }, {
       id: 1, name:
       "metal pourer"
   }, {
       id: 1, name:
       "metal worker"
   }, {
       id: 1, name:
       "metal-refining furnace operator"
   }, {
       id: 1, name:
       "metal-refining furnace tender"
   }, {
       id: 1, name:
       "meter reader"
   }, {
       id: 1, name:
       "microbiologist"
   }, {
       id: 1, name:
       "middle school teacher"
   }, {
       id: 1, name:
       "milling machine setter"
   }, {
       id: 1, name:
       "millwright"
   }, {
       id: 1, name:
       "mine cutting machine operator"
   }, {
       id: 1, name:
       "mine shuttle car operator"
   }, {
       id: 1, name:
       "mining engineer"
   }, {
       id: 1, name:
       "mining safety engineer"
   }, {
       id: 1, name:
       "mining safety inspector"
   }, {
       id: 1, name:
       "mining service unit operator"
   }, {
       id: 1, name:
       "mixing machine setter"
   }, {
       id: 1, name:
       "mobile heavy equipment mechanic"
   }, {
       id: 1, name:
       "mobile home installer"
   }, {
       id: 1, name:
       "model maker"
   }, {
       id: 1, name:
       "model"
   }, {
       id: 1, name:
       "molder"
   }, {
       id: 1, name:
       "mortician"
   }, {
       id: 1, name:
       "motel desk clerk"
   }, {
       id: 1, name:
       "motion picture projectionist"
   }, {
       id: 1, name:
       "motorboat mechanic"
   }, {
       id: 1, name:
       "motorboat operator"
   }, {
       id: 1, name:
       "motorboat service technician"
   }, {
       id: 1, name:
       "motorcycle mechanic"
   }, {
       id: 1, name:
       "multimedia artist"
   }, {
       id: 1, name:
       "museum technician"
   }, {
       id: 1, name:
       "music director"
   }, {
       id: 1, name:
       "music teacher"
   }, {
       id: 1, name:
       "musical instrument repairer"
   }, {
       id: 1, name:
       "musician"
   }, {
       id: 1, name:
       "natural sciences manager"
   }, {
       id: 1, name:
       "naval architect"
   }, {
       id: 1, name:
       "network systems administrator"
   }, {
       id: 1, name:
       "new accounts clerk"
   }, {
       id: 1, name:
       "news vendor"
   }, {
       id: 1, name:
       "nonfarm animal caretaker"
   }, {
       id: 1, name:
       "nuclear engineer"
   }, {
       id: 1, name:
       "nuclear medicine technologist"
   }, {
       id: 1, name:
       "nuclear power reactor operator"
   }, {
       id: 1, name:
       "nuclear technician"
   }, {
       id: 1, name:
       "nursing aide"
   }, {
       id: 1, name:
       "nursing instructor"
   }, {
       id: 1, name:
       "nursing teacher"
   }, {
       id: 1, name:
       "nutritionist"
   }, {
       id: 1, name:
       "obstetrician"
   }, {
       id: 1, name:
       "occupational health and safety specialist"
   }, {
       id: 1, name:
       "occupational health and safety technician"
   }, {
       id: 1, name:
       "occupational therapist"
   }, {
       id: 1, name:
       "occupational therapy aide"
   }, {
       id: 1, name:
       "occupational therapy assistant"
   }, {
       id: 1, name:
       "offbearer"
   }, {
       id: 1, name:
       "office clerk"
   }, {
       id: 1, name:
       "office machine operator"
   }, {
       id: 1, name:
       "operating engineer"
   }, {
       id: 1, name:
       "operations manager"
   }, {
       id: 1, name:
       "operations research analyst"
   }, {
       id: 1, name:
       "ophthalmic laboratory technician"
   }, {
       id: 1, name:
       "optician"
   }, {
       id: 1, name:
       "optometrist"
   }, {
       id: 1, name:
       "oral surgeon"
   }, {
       id: 1, name:
       "order clerk"
   }, {
       id: 1, name:
       "order filler"
   }, {
       id: 1, name:
       "orderly"
   }, {
       id: 1, name:
       "ordnance handling expert"
   }, {
       id: 1, name:
       "orthodontist"
   }, {
       id: 1, name:
       "orthotist"
   }, {
       id: 1, name:
       "outdoor power equipment mechanic"
   }, {
       id: 1, name:
       "oven operator"
   }, {
       id: 1, name:
       "packaging machine operator"
   }, {
       id: 1, name:
       "painter "
   }, {
       id: 1, name:
       "painting worker"
   }, {
       id: 1, name:
       "paper goods machine setter"
   }, {
       id: 1, name:
       "paperhanger"
   }, {
       id: 1, name:
       "paralegal"
   }, {
       id: 1, name:
       "paramedic"
   }, {
       id: 1, name:
       "parking enforcement worker"
   }, {
       id: 1, name:
       "parking lot attendant"
   }, {
       id: 1, name:
       "parts salesperson"
   }, {
       id: 1, name:
       "paving equipment operator"
   }, {
       id: 1, name:
       "payroll clerk"
   }, {
       id: 1, name:
       "pediatrician"
   }, {
       id: 1, name:
       "pedicurist"
   }, {
       id: 1, name:
       "personal care aide"
   }, {
       id: 1, name:
       "personal chef"
   }, {
       id: 1, name:
       "personal financial advisor"
   }, {
       id: 1, name:
       "pest control worker"
   }, {
       id: 1, name:
       "pesticide applicator"
   }, {
       id: 1, name:
       "pesticide handler"
   }, {
       id: 1, name:
       "pesticide sprayer"
   }, {
       id: 1, name:
       "petroleum engineer"
   }, {
       id: 1, name:
       "petroleum gauger"
   }, {
       id: 1, name:
       "petroleum pump system operator"
   }, {
       id: 1, name:
       "petroleum refinery operator"
   }, {
       id: 1, name:
       "petroleum technician"
   }, {
       id: 1, name:
       "pharmacist"
   }, {
       id: 1, name:
       "pharmacy aide"
   }, {
       id: 1, name:
       "pharmacy technician"
   }, {
       id: 1, name:
       "philosophy teacher"
   }, {
       id: 1, name:
       "photogrammetrist"
   }, {
       id: 1, name:
       "photographer"
   }, {
       id: 1, name:
       "photographic process worker"
   }, {
       id: 1, name:
       "photographic processing machine operator"
   }, {
       id: 1, name:
       "physical therapist aide"
   }, {
       id: 1, name:
       "physical therapist assistant"
   }, {
       id: 1, name:
       "physical therapist"
   }, {
       id: 1, name:
       "physician assistant"
   }, {
       id: 1, name:
       "physician"
   }, {
       id: 1, name:
       "physicist"
   }, {
       id: 1, name:
       "physics teacher"
   }, {
       id: 1, name:
       "pile-driver operator"
   }, {
       id: 1, name:
       "pipefitter"
   }, {
       id: 1, name:
       "pipelayer"
   }, {
       id: 1, name:
       "planing machine operator"
   }, {
       id: 1, name:
       "planning clerk"
   }, {
       id: 1, name:
       "plant operator"
   }, {
       id: 1, name:
       "plant scientist"
   }, {
       id: 1, name:
       "plasterer"
   }, {
       id: 1, name:
       "plastic patternmaker"
   }, {
       id: 1, name:
       "plastic worker"
   }, {
       id: 1, name:
       "plumber"
   }, {
       id: 1, name:
       "podiatrist"
   }, {
       id: 1, name:
       "police dispatcher"
   }, {
       id: 1, name:
       "police officer"
   }, {
       id: 1, name:
       "policy processing clerk"
   }, {
       id: 1, name:
       "political science teacher"
   }, {
       id: 1, name:
       "political scientist"
   }, {
       id: 1, name:
       "postal service clerk"
   }, {
       id: 1, name:
       "postal service mail carrier"
   }, {
       id: 1, name:
       "postal service mail processing machine operator"
   }, {
       id: 1, name:
       "postal service mail processor"
   }, {
       id: 1, name:
       "postal service mail sorter"
   }, {
       id: 1, name:
       "postmaster"
   }, {
       id: 1, name:
       "postsecondary teacher"
   }, {
       id: 1, name:
       "poultry cutter"
   }, {
       id: 1, name:
       "poultry trimmer"
   }, {
       id: 1, name:
       "power dispatcher"
   }, {
       id: 1, name:
       "power distributor"
   }, {
       id: 1, name:
       "power plant operator"
   }, {
       id: 1, name:
       "power tool repairer"
   }, {
       id: 1, name:
       "precious stone worker"
   }, {
       id: 1, name:
       "precision instrument repairer"
   }, {
       id: 1, name:
       "prepress technician"
   }, {
       id: 1, name:
       "preschool teacher"
   }, {
       id: 1, name:
       "priest"
   }, {
       id: 1, name:
       "print binding worker"
   }, {
       id: 1, name:
       "printing press operator"
   }, {
       id: 1, name:
       "private detective"
   }, {
       id: 1, name:
       "probation officer"
   }, {
       id: 1, name:
       "procurement clerk"
   }, {
       id: 1, name:
       "producer"
   }, {
       id: 1, name:
       "product promoter"
   }, {
       id: 1, name:
       "production clerk"
   }, {
       id: 1, name:
       "production occupation"
   }, {
       id: 1, name:
       "proofreader"
   }, {
       id: 1, name:
       "property manager"
   }, {
       id: 1, name:
       "prosthetist"
   }, {
       id: 1, name:
       "prosthodontist"
   }, {
       id: 1, name:
       "psychiatric aide"
   }, {
       id: 1, name:
       "psychiatric technician"
   }, {
       id: 1, name:
       "psychiatrist"
   }, {
       id: 1, name:
       "psychologist"
   }, {
       id: 1, name:
       "psychology teacher"
   }, {
       id: 1, name:
       "public relations manager"
   }, {
       id: 1, name:
       "public relations specialist"
   }, {
       id: 1, name:
       "pump operator"
   }, {
       id: 1, name:
       "purchasing agent"
   }, {
       id: 1, name:
       "purchasing manager"
   }, {
       id: 1, name:
       "radiation therapist"
   }, {
       id: 1, name:
       "radio announcer"
   }, {
       id: 1, name:
       "radio equipment installer"
   }, {
       id: 1, name:
       "radio operator"
   }, {
       id: 1, name:
       "radiologic technician"
   }, {
       id: 1, name:
       "radiologic technologist"
   }, {
       id: 1, name:
       "rail car repairer"
   }, {
       id: 1, name:
       "rail transportation worker"
   }, {
       id: 1, name:
       "rail yard engineer"
   }, {
       id: 1, name:
       "rail-track laying equipment operator"
   }, {
       id: 1, name:
       "railroad brake operator"
   }, {
       id: 1, name:
       "railroad conductor"
   }, {
       id: 1, name:
       "railroad police"
   }, {
       id: 1, name:
       "rancher"
   }, {
       id: 1, name:
       "real estate appraiser"
   }, {
       id: 1, name:
       "real estate broker"
   }, {
       id: 1, name:
       "real estate manager"
   }, {
       id: 1, name:
       "real estate sales agent"
   }, {
       id: 1, name:
       "receiving clerk"
   }, {
       id: 1, name:
       "receptionist"
   }, {
       id: 1, name:
       "record clerk"
   }, {
       id: 1, name:
       "recreation teacher"
   }, {
       id: 1, name:
       "recreation worker"
   }, {
       id: 1, name:
       "recreational therapist"
   }, {
       id: 1, name:
       "recreational vehicle service technician"
   }, {
       id: 1, name:
       "recyclable material collector"
   }, {
       id: 1, name:
       "referee"
   }, {
       id: 1, name:
       "refractory materials repairer"
   }, {
       id: 1, name:
       "refrigeration installer"
   }, {
       id: 1, name:
       "refrigeration mechanic"
   }, {
       id: 1, name:
       "refuse collector"
   }, {
       id: 1, name:
       "regional planner"
   }, {
       id: 1, name:
       "registered nurse"
   }, {
       id: 1, name:
       "rehabilitation counselor"
   }, {
       id: 1, name:
       "reinforcing iron worker"
   }, {
       id: 1, name:
       "reinforcing rebar worker"
   }, {
       id: 1, name:
       "religion teacher"
   }, {
       id: 1, name:
       "religious activities director"
   }, {
       id: 1, name:
       "religious worker"
   }, {
       id: 1, name:
       "rental clerk"
   }, {
       id: 1, name:
       "repair worker"
   }, {
       id: 1, name:
       "reporter"
   }, {
       id: 1, name:
       "residential advisor"
   }, {
       id: 1, name:
       "resort desk clerk"
   }, {
       id: 1, name:
       "respiratory therapist"
   }, {
       id: 1, name:
       "respiratory therapy technician"
   }, {
       id: 1, name:
       "retail buyer"
   }, {
       id: 1, name:
       "retail salesperson"
   }, {
       id: 1, name:
       "revenue agent"
   }, {
       id: 1, name:
       "rigger"
   }, {
       id: 1, name:
       "rock splitter"
   }, {
       id: 1, name:
       "rolling machine tender"
   }, {
       id: 1, name:
       "roof bolter"
   }, {
       id: 1, name:
       "roofer"
   }, {
       id: 1, name:
       "rotary drill operator"
   }, {
       id: 1, name:
       "roustabout"
   }, {
       id: 1, name:
       "safe repairer"
   }, {
       id: 1, name:
       "sailor"
   }, {
       id: 1, name:
       "sales engineer"
   }, {
       id: 1, name:
       "sales manager"
   }, {
       id: 1, name:
       "sales representative"
   }, {
       id: 1, name:
       "sampler"
   }, {
       id: 1, name:
       "sawing machine operator"
   }, {
       id: 1, name:
       "scaler"
   }, {
       id: 1, name:
       "school bus driver"
   }, {
       id: 1, name:
       "school psychologist"
   }, {
       id: 1, name:
       "school social worker"
   }, {
       id: 1, name:
       "scout leader"
   }, {
       id: 1, name:
       "sculptor"
   }, {
       id: 1, name:
       "secondary education teacher"
   }, {
       id: 1, name:
       "secondary school teacher"
   }, {
       id: 1, name:
       "secretary"
   }, {
       id: 1, name:
       "securities sales agent"
   }, {
       id: 1, name:
       "security guard"
   }, {
       id: 1, name:
       "security system installer"
   }, {
       id: 1, name:
       "segmental paver"
   }, {
       id: 1, name:
       "self-enrichment education teacher"
   }, {
       id: 1, name:
       "semiconductor processor"
   }, {
       id: 1, name:
       "septic tank servicer"
   }, {
       id: 1, name:
       "set designer"
   }, {
       id: 1, name:
       "sewer pipe cleaner"
   }, {
       id: 1, name:
       "sewing machine operator"
   }, {
       id: 1, name:
       "shampooer"
   }, {
       id: 1, name:
       "shaper"
   }, {
       id: 1, name:
       "sheet metal worker"
   }, {
       id: 1, name:
       "sheriff's patrol officer"
   }, {
       id: 1, name:
       "ship captain"
   }, {
       id: 1, name:
       "ship engineer" 
   }, {
       id: 1, name:
       "ship loader"
   }, {
       id: 1, name:
       "shipmate"
   }, {
       id: 1, name:
       "shipping clerk"
   }, {
       id: 1, name:
       "shoe machine operator"
   }, {
       id: 1, name:
       "shoe worker"
   }, {
       id: 1, name:
       "short order cook"
   }, {
       id: 1, name:
       "signal operator"
   }, {
       id: 1, name:
       "signal repairer"
   }, {
       id: 1, name:
       "singer"
   }, {
       id: 1, name:
       "ski patrol"
   }, {
       id: 1, name:
       "skincare specialist"
   }, {
       id: 1, name:
       "slaughterer"
   }, {
       id: 1, name:
       "slicing machine tender"
   }, {
       id: 1, name:
       "slot supervisor"
   }, {
       id: 1, name:
       "social science research assistant"
   }, {
       id: 1, name:
       "social sciences teacher"
   }, {
       id: 1, name:
       "social scientist"
   }, {
       id: 1, name:
       "social service assistant"
   }, {
       id: 1, name:
       "social service manager"
   }, {
       id: 1, name:
       "social work teacher"
   }, {
       id: 1, name:
       "social worker"
   }, {
       id: 1, name:
       "sociologist"
   }, {
       id: 1, name:
       "sociology teacher"
   }, {
       id: 1, name:
       "software developer"
   }, {
       id: 1, name:
       "software engineer"
   }, {
       id: 1, name:
       "soil scientist"
   }, {
       id: 1, name:
       "solderer"
   }, {
       id: 1, name:
       "sorter"
   }, {
       id: 1, name:
       "sound engineering technician"
   }, {
       id: 1, name:
       "space scientist"
   }, {
       id: 1, name:
       "special education teacher"
   }, {
       id: 1, name:
       "speech-language pathologist"
   }, {
       id: 1, name:
       "sports book runner"
   }, {
       id: 1, name:
       "sports entertainer"
   }, {
       id: 1, name:
       "sports performer"
   }, {
       id: 1, name:
       "stationary engineer"
   }, {
       id: 1, name:
       "statistical assistant"
   }, {
       id: 1, name:
       "statistician"
   }, {
       id: 1, name:
       "steamfitter"
   }, {
       id: 1, name:
       "stock clerk"
   }, {
       id: 1, name:
       "stock mover"
   }, {
       id: 1, name:
       "stonemason"
   }, {
       id: 1, name:
       "street vendor"
   }, {
       id: 1, name:
       "streetcar operator"
   }, {
       id: 1, name:
       "structural iron worker"
   }, {
       id: 1, name:
       "structural metal fabricator"
   }, {
       id: 1, name:
       "structural metal fitter"
   }, {
       id: 1, name:
       "structural steel worker"
   }, {
       id: 1, name:
       "stucco mason"
   }, {
       id: 1, name:
       "substance abuse counselor"
   }, {
       id: 1, name:
       "substance abuse social worker"
   }, {
       id: 1, name:
       "subway operator"
   }, {
       id: 1, name:
       "surfacing equipment operator"
   }, {
       id: 1, name:
       "surgeon"
   }, {
       id: 1, name:
       "surgical technologist"
   }, {
       id: 1, name:
       "survey researcher"
   }, {
       id: 1, name:
       "surveying technician"
   }, {
       id: 1, name:
       "surveyor"
   }, {
       id: 1, name:
       "switch operator"
   }, {
       id: 1, name:
       "switchboard operator"
   }, {
       id: 1, name:
       "tailor"
   }, {
       id: 1, name:
       "tamping equipment operator"
   }, {
       id: 1, name:
       "tank car loader"
   }, {
       id: 1, name:
       "taper"
   }, {
       id: 1, name:
       "tax collector"
   }, {
       id: 1, name:
       "tax examiner"
   }, {
       id: 1, name:
       "tax preparer"
   }, {
       id: 1, name:
       "taxi driver"
   }, {
       id: 1, name:
       "teacher assistant"
   }, {
       id: 1, name:
       "teacher"
   }, {
       id: 1, name:
       "team assembler"
   }, {
       id: 1, name:
       "technical writer"
   }, {
       id: 1, name:
       "telecommunications equipment installer"
   }, {
       id: 1, name:
       "telemarketer"
   }, {
       id: 1, name:
       "telephone operator"
   }, {
       id: 1, name:
       "television announcer"
   }, {
       id: 1, name:
       "teller"
   }, {
       id: 1, name:
       "terrazzo finisher"
   }, {
       id: 1, name:
       "terrazzo worker"
   }, {
       id: 1, name:
       "tester"
   }, {
       id: 1, name:
       "textile bleaching operator"
   }, {
       id: 1, name:
       "textile cutting machine setter"
   }, {
       id: 1, name:
       "textile knitting machine setter"
   }, {
       id: 1, name:
       "textile presser"
   }, {
       id: 1, name:
       "textile worker"
   }, {
       id: 1, name:
       "therapist"
   }, {
       id: 1, name:
       "ticket agent"
   }, {
       id: 1, name:
       "ticket taker"
   }, {
       id: 1, name:
       "tile setter"
   }, {
       id: 1, name:
       "timekeeping clerk"
   }, {
       id: 1, name:
       "timing device assembler"
   }, {
       id: 1, name:
       "tire builder"
   }, {
       id: 1, name:
       "tire changer"
   }, {
       id: 1, name:
       "tire repairer"
   }, {
       id: 1, name:
       "title abstractor"
   }, {
       id: 1, name:
       "title examiner"
   }, {
       id: 1, name:
       "title searcher"
   }, {
       id: 1, name:
       "tobacco roasting machine operator"
   }, {
       id: 1, name:
       "tool filer"
   }, {
       id: 1, name:
       "tool grinder"
   }, {
       id: 1, name:
       "tool maker"
   }, {
       id: 1, name:
       "tool sharpener"
   }, {
       id: 1, name:
       "tour guide"
   }, {
       id: 1, name:
       "tower equipment installer"
   }, {
       id: 1, name:
       "tower operator"
   }, {
       id: 1, name:
       "track switch repairer"
   }, {
       id: 1, name:
       "tractor operator"
   }, {
       id: 1, name:
       "tractor-trailer truck driver"
   }, {
       id: 1, name:
       "traffic clerk"
   }, {
       id: 1, name:
       "traffic technician"
   }, {
       id: 1, name:
       "training and development manager"
   }, {
       id: 1, name:
       "training and development specialist"
   }, {
       id: 1, name:
       "transit police"
   }, {
       id: 1, name:
       "translator"
   }, {
       id: 1, name:
       "transportation equipment painter"
   }, {
       id: 1, name:
       "transportation inspector"
   }, {
       id: 1, name:
       "transportation security screener"
   }, {
       id: 1, name:
       "transportation worker"
   }, {
       id: 1, name:
       "trapper"
   }, {
       id: 1, name:
       "travel agent"
   }, {
       id: 1, name:
       "travel clerk"
   }, {
       id: 1, name:
       "travel guide"
   }, {
       id: 1, name:
       "tree pruner"
   }, {
       id: 1, name:
       "tree trimmer"
   }, {
       id: 1, name:
       "trimmer"
   }, {
       id: 1, name:
       "truck loader"
   }, {
       id: 1, name:
       "truck mechanic"
   }, {
       id: 1, name:
       "tuner"
   }, {
       id: 1, name:
       "turning machine tool operator"
   }, {
       id: 1, name:
       "typist"
   }, {
       id: 1, name:
       "umpire"
   }, {
       id: 1, name:
       "undertaker"
   }, {
       id: 1, name:
       "upholsterer"
   }, {
       id: 1, name:
       "urban planner"
   }, {
       id: 1, name:
       "usher"
   }, {
       id: 1, name:
       "valve installer"
   }, {
       id: 1, name:
       "vending machine servicer"
   }, {
       id: 1, name:
       "veterinarian"
   }, {
       id: 1, name:
       "veterinary assistant"
   }, {
       id: 1, name:
       "veterinary technician"
   }, {
       id: 1, name:
       "vocational counselor"
   }, {
       id: 1, name:
       "vocational education teacher"
   }, {
       id: 1, name:
       "waiter"
   }, {
       id: 1, name:
       "waitress"
   }, {
       id: 1, name:
       "watch repairer"
   }, {
       id: 1, name:
       "water treatment plant operator"
   }, {
       id: 1, name:
       "weaving machine setter"
   }, {
       id: 1, name:
       "web developer"
   }, {
       id: 1, name:
       "weigher"
   }, {
       id: 1, name:
       "welder"
   }, {
       id: 1, name:
       "wellhead pumper"
   }, {
       id: 1, name:
       "wholesale buyer"
   }, {
       id: 1, name:
       "wildlife biologist"
   }, {
       id: 1, name:
       "window trimmer"
   }, {
       id: 1, name:
       "wood patternmaker"
   }, {
       id: 1, name:
       "woodworker"
   }, {
       id: 1, name:
       "word processor"
   }, {
       id: 1, name:
       "writer"
   }, {
       id: 1, name:
       "yardmaster"
   }, {
       id: 1, name:
       "zoologist"
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