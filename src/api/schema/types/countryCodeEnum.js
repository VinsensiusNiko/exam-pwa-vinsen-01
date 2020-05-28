const schema = `
enum CountryCodeEnum{
    AF
    Afghanistan
    AX
    AlandIslands
    AL
    Albania
    DZ
    Algeria
    AS
    AmericanSamoa
    AD
    Andorra
    AO
    Angola
    AI
    Anguilla
    AQ
    Antarctica
    AG
    AntiguaBarbuda
    AR
    Argentina
    AM
    Armenia
    AW
    Aruba
    AU
    Australia
    AT
    Austria
    AZ
    Azerbaijan
    BS
    Bahamas
    BH
    Bahrain
    BD
    Bangladesh
    BB
    Barbados
    BY
    Belarus
    BE
    Belgium
    BZ
    Belize
    BJ
    Benin
    BM
    Bermuda
    BT
    Bhutan
    BO
    Bolivia
    BA
    BosniaHerzegovina
    BW
    Botswana
    BV
    BouvetIsland
    BR
    Brazil
    IO
    BritishIndianOceanTerritory
    VG
    BritishVirginIslands
    BN
    Brunei
    BG
    Bulgaria
    BF
    BurkinaFaso
    BI
    Burundi
    KH
    Cambodia
    CM
    Cameroon
    CA
    Canada
    CV
    CapeVerde
    KY
    CaymanIslands
    CF
    CentralAfricanRepublic
    TD
    Chad
    CL
    Chile
    CN
    China
    CX
    ChristmasIsland
    CC
    CocosKeelingIslands
    CO
    Colombia
    KM
    Comoros
    CG
    CongoBrazzaville
    CD
    CongoKinshasa
    CK
    CookIslands
    CR
    CostaRica
    CI
    CotedIvoire
    HR
    Croatia
    CU
    Cuba
    CY
    Cyprus
    CZ
    CzechRepublic
    DK
    Denmark
    DJ
    Djibouti
    DM
    Dominica
    DO
    DominicanRepublic
    EC
    Ecuador
    EG
    Egypt
    SV
    ElSalvador
    GQ
    EquatorialGuinea
    ER
    Eritrea
    EE
    Estonia
    ET
    Ethiopia
    FK
    FalklandIslands
    FO
    FaroeIslands
    FJ
    Fiji
    FI
    Finland
    FR
    France
    GF
    FrenchGuiana
    PF
    FrenchPolynesia
    TF
    FrenchSouthernTerritories
    GA
    Gabon
    GM
    Gambia
    GE
    Georgia
    DE
    Germany
    GH
    Ghana
    GI
    Gibraltar
    GR
    Greece
    GL
    Greenland
    GD
    Grenada
    GP
    Guadeloupe
    GU
    Guam
    GT
    Guatemala
    GG
    Guernsey
    GN
    Guinea
    GW
    GuineaBissau
    GY
    Guyana
    HT
    Haiti
    HM
    HeardampMcDonaldIslands
    HN
    Honduras
    HK
    HongKongSARChina
    HU
    Hungary
    IS
    Iceland
    IN
    India
    ID
    Indonesia
    IR
    Iran
    IQ
    Iraq
    IE
    Ireland
    IM
    IsleofMan
    IL
    Israel
    IT
    Italy
    JM
    Jamaica
    JP
    Japan
    JE
    Jersey
    JO
    Jordan
    KZ
    Kazakhstan
    KE
    Kenya
    KI
    Kiribati
    KW
    Kuwait
    KG
    Kyrgyzstan
    LA
    Laos
    LV
    Latvia
    LB
    Lebanon
    LS
    Lesotho
    LR
    Liberia
    LY
    Libya
    LI
    Liechtenstein
    LT
    Lithuania
    LU
    Luxembourg
    MO
    MacauSARChina
    MK
    Macedonia
    MG
    Madagascar
    MW
    Malawi
    MY
    Malaysia
    MV
    Maldives
    ML
    Mali
    MT
    Malta
    MH
    MarshallIslands
    MQ
    Martinique
    MR
    Mauritania
    MU
    Mauritius
    YT
    Mayotte
    MX
    Mexico
    FM
    Micronesia
    MD
    Moldova
    MC
    Monaco
    MN
    Mongolia
    ME
    Montenegro
    MS
    Montserrat
    MA
    Morocco
    MZ
    Mozambique
    MM
    MyanmarBurma
    NA
    Namibia
    NR
    Nauru
    NP
    Nepal
    NL
    Netherlands
    AN
    NetherlandsAntilles
    NC
    NewCaledonia
    NZ
    NewZealand
    NI
    Nicaragua
    NE
    Niger
    NG
    Nigeria
    NU
    Niue
    NF
    NorfolkIsland
    MP
    NorthernMarianaIslands
    KP
    NorthKorea
    NO
    Norway
    OM
    Oman
    PK
    Pakistan
    PW
    Palau
    PS
    PalestinianTerritories
    PA
    Panama
    PG
    PapuaNewGuinea
    PY
    Paraguay
    PE
    Peru
    PH
    Philippines
    PN
    PitcairnIslands
    PL
    Poland
    PT
    Portugal
    QA
    Qatar
    RE
    Reunion
    RO
    Romania
    RU
    Russia
    RW
    Rwanda
    WS
    Samoa
    SM
    SanMarino
    ST
    SaoTomePrincipe
    SA
    SaudiArabia
    SN
    Senegal
    RS
    Serbia
    SC
    Seychelles
    SL
    SierraLeone
    SG
    Singapore
    SK
    Slovakia
    SI
    Slovenia
    SB
    SolomonIslands
    SO
    Somalia
    ZA
    SouthAfrica
    GS
    SouthGeorgiaSouthSandwichIslands
    KR
    SouthKorea
    ES
    Spain
    LK
    SriLanka
    BL
    StBarthelemy
    SH
    StHelena
    KN
    StKittsNevis
    LC
    StLucia
    MF
    StMartin
    PM
    StPierreMiquelon
    VC
    StVincentGrenadines
    SD
    Sudan
    SR
    Suriname
    SJ
    SvalbardJanMayen
    SZ
    Swaziland
    SE
    Sweden
    CH
    Switzerland
    SY
    Syria
    TW
    Taiwan
    TJ
    Tajikistan
    TZ
    Tanzania
    TH
    Thailand
    TL
    TimorLeste
    TG
    Togo
    TK
    Tokelau
    TO
    Tonga
    TT
    TrinidadTobago
    TN
    Tunisia
    TR
    Turkey
    TM
    Turkmenistan
    TC
    TurksCaicosIslands
    TV
    Tuvalu
    UG
    Uganda
    UA
    Ukraine
    AE
    UnitedArabEmirates
    GB
    UnitedKingdom
    US
    UnitedStates
    UY
    Uruguay
    UM
    USOutlyingIslands
    VI
    USVirginIslands
    UZ
    Uzbekistan
    VU
    Vanuatu
    VA
    VaticanCity
    VE
    Venezuela
    VN
    Vietnam
    WF
    WallisFutuna
    EH
    WesternSahara
    YE
    Yemen
    ZM
    Zambia
    ZW
    Zimbabwe
}
`;

module.exports = schema;
