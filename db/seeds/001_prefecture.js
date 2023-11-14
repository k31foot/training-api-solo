/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('prefecture').del()
  await knex('prefecture').insert([
    {
        id: "1",
        region: "北海道",
        prefec: "北海道",
        city: "札幌市",
        population: "5228885",
        density: "66.7",
        area: "78421.4",
        homepage: "http://www.pref.hokkaido.lg.jp/"
    },
    {
        id: "2",
        region: "東北",
        prefec: "青森県",
        city: "青森市",
        population: "1238730",
        density: "128.4",
        area: "9645.6",
        homepage: "http://www.pref.aomori.lg.jp/"
    },
    {
        id: "3",
        region: "東北",
        prefec: "岩手県",
        city: "盛岡市",
        population: "1211206",
        density: "79.3",
        area: "15275",
        homepage: "http://www.pref.iwate.jp/"
    },
    {
        id: "4",
        region: "東北",
        prefec: "宮城県",
        city: "仙台市",
        population: "2303487",
        density: "316.3",
        area: "7282.3",
        homepage: "http://www.pref.miyagi.jp/"
    },
    {
        id: "5",
        region: "東北",
        prefec: "秋田県",
        city: "秋田市",
        population: "960113",
        density: "82.5",
        area: "11637.5",
        homepage: "http://www.pref.akita.lg.jp/"
    },
    {
        id: "6",
        region: "東北",
        prefec: "山形県",
        city: "山形市",
        population: "1068696",
        density: "114.6",
        area: "9323.2",
        homepage: "http://www.pref.yamagata.jp/"
    },
    {
        id: "7",
        region: "東北",
        prefec: "福島県",
        city: "福島市",
        population: "1834198",
        density: "133.1",
        area: "13784.1",
        homepage: "http://www.pref.fukushima.lg.jp/"
    },
    {
        id: "8",
        region: "関東",
        prefec: "茨城県",
        city: "水戸市",
        population: "2868554",
        density: "470.5",
        area: "6097.4",
        homepage: "http://www.pref.ibaraki.jp/"
    },
    {
        id: "9",
        region: "関東",
        prefec: "栃木県",
        city: "宇都宮市",
        population: "1934016",
        density: "301.8",
        area: "6408.1",
        homepage: "http://www.pref.tochigi.lg.jp/"
    },
    {
        id: "10",
        region: "関東",
        prefec: "群馬県",
        city: "前橋市",
        population: "1940333",
        density: "305",
        area: "6362.3",
        homepage: "http://www.pref.gunma.jp/"
    },
    {
        id: "11",
        region: "関東",
        prefec: "埼玉県",
        city: "さいたま市",
        population: "7346836",
        density: "1934.5",
        area: "3797.8",
        homepage: "http://www.pref.saitama.lg.jp/"
    },
    {
        id: "12",
        region: "関東",
        prefec: "千葉県",
        city: "千葉市",
        population: "6287034",
        density: "1219",
        area: "5157.6",
        homepage: "http://www.pref.chiba.lg.jp/"
    },
    {
        id: "13",
        region: "関東",
        prefec: "東京都",
        city: "東京",
        population: "14064696",
        density: "6410.4",
        area: "2194",
        homepage: "http://www.metro.tokyo.jp/"
    },
    {
        id: "14",
        region: "関東",
        prefec: "神奈川県",
        city: "横浜市",
        population: "9240411",
        density: "3824.5",
        area: "2416.1",
        homepage: "http://www.pref.kanagawa.jp/"
    },
    {
        id: "15",
        region: "中部",
        prefec: "新潟県",
        city: "新潟市",
        population: "2202358",
        density: "175",
        area: "12584",
        homepage: "http://www.pref.niigata.lg.jp/"
    },
    {
        id: "16",
        region: "中部",
        prefec: "富山県",
        city: "富山市",
        population: "1035612",
        density: "243.8",
        area: "4247.6",
        homepage: "http://www.pref.toyama.jp/"
    },
    {
        id: "17",
        region: "中部",
        prefec: "石川県",
        city: "金沢市",
        population: "1133294",
        density: "270.7",
        area: "4186.2",
        homepage: "http://www.pref.ishikawa.lg.jp/"
    },
    {
        id: "18",
        region: "中部",
        prefec: "福井県",
        city: "福井市",
        population: "767433",
        density: "183.1",
        area: "4190.5",
        homepage: "http://www.pref.fukui.lg.jp/"
    },
    {
        id: "19",
        region: "中部",
        prefec: "山梨県",
        city: "甲府市",
        population: "810427",
        density: "181.5",
        area: "4465.3",
        homepage: "http://www.pref.yamanashi.jp/"
    },
    {
        id: "20",
        region: "中部",
        prefec: "長野県",
        city: "長野市",
        population: "2049683",
        density: "151.1",
        area: "13561.6",
        homepage: "http://www.pref.nagano.lg.jp/"
    },
    {
        id: "21",
        region: "中部",
        prefec: "岐阜県",
        city: "岐阜市",
        population: "1979781",
        density: "186.4",
        area: "10621.3",
        homepage: "http://www.pref.gifu.lg.jp/"
    },
    {
        id: "22",
        region: "中部",
        prefec: "静岡県",
        city: "静岡市",
        population: "3635220",
        density: "467.4",
        area: "7777.4",
        homepage: "http://www.pref.shizuoka.jp/"
    },
    {
        id: "23",
        region: "中部",
        prefec: "愛知県",
        city: "名古屋市",
        population: "7546192",
        density: "1458.8",
        area: "5173.1",
        homepage: "http://www.pref.aichi.jp/"
    },
    {
        id: "24",
        region: "近畿",
        prefec: "三重県",
        city: "津市",
        population: "1771440",
        density: "306.8",
        area: "5774.5",
        homepage: "http://www.pref.mie.lg.jp/"
    },
    {
        id: "25",
        region: "近畿",
        prefec: "滋賀県",
        city: "大津市",
        population: "1414248",
        density: "352",
        area: "4017.4",
        homepage: "http://www.pref.shiga.lg.jp/"
    },
    {
        id: "26",
        region: "近畿",
        prefec: "京都府",
        city: "京都市",
        population: "2579921",
        density: "559.4",
        area: "4612.2",
        homepage: "http://www.pref.kyoto.jp/"
    },
    {
        id: "27",
        region: "近畿",
        prefec: "大阪府",
        city: "大阪市",
        population: "8842523",
        density: "4641",
        area: "1905.3",
        homepage: "http://www.pref.osaka.lg.jp/"
    },
    {
        id: "28",
        region: "近畿",
        prefec: "兵庫県",
        city: "神戸市",
        population: "5469184",
        density: "651",
        area: "8401",
        homepage: "http://web.pref.hyogo.lg.jp/"
    },
    {
        id: "29",
        region: "近畿",
        prefec: "奈良県",
        city: "奈良市",
        population: "1325437",
        density: "359.1",
        area: "3690.9",
        homepage: "http://www.pref.nara.jp/"
    },
    {
        id: "30",
        region: "近畿",
        prefec: "和歌山県",
        city: "和歌山市",
        population: "923033",
        density: "195.4",
        area: "4724.7",
        homepage: "http://www.pref.wakayama.lg.jp/"
    },
    {
        id: "31",
        region: "中国",
        prefec: "鳥取県",
        city: "鳥取市",
        population: "553847",
        density: "157.9",
        area: "3507.1",
        homepage: "http://www.pref.shimane.lg.jp/"
    },
    {
        id: "32",
        region: "中国",
        prefec: "島根県",
        city: "松江市",
        population: "671602",
        density: "100.1",
        area: "6707.9",
        homepage: "http://www.pref.shimane.lg.jp/"
    },
    {
        id: "33",
        region: "中国",
        prefec: "岡山県",
        city: "岡山市",
        population: "1889607",
        density: "265.6",
        area: "7114.3",
        homepage: "https://www.pref.okayama.jp/"
    },
    {
        id: "34",
        region: "中国",
        prefec: "広島県",
        city: "広島市",
        population: "2801388",
        density: "330.4",
        area: "8479.7",
        homepage: "http://www.pref.hiroshima.lg.jp/"
    },
    {
        id: "35",
        region: "中国",
        prefec: "山口県",
        city: "山口市",
        population: "1342987",
        density: "219.7",
        area: "6112.5",
        homepage: "http://www.pref.yamaguchi.lg.jp/"
    },
    {
        id: "36",
        region: "四国",
        prefec: "徳島県",
        city: "徳島市",
        population: "719704",
        density: "173.6",
        area: "4146.8",
        homepage: "http://www.pref.tokushima.lg.jp/"
    },
    {
        id: "37",
        region: "四国",
        prefec: "香川県",
        city: "高松市",
        population: "951049",
        density: "506.8",
        area: "1876.8",
        homepage: "http://www.pref.kagawa.lg.jp/"
    },
    {
        id: "38",
        region: "四国",
        prefec: "愛媛県",
        city: "松山市",
        population: "1335694",
        density: "235.3",
        area: "5676.2",
        homepage: "http://www.pref.ehime.jp/"
    },
    {
        id: "39",
        region: "四国",
        prefec: "高知県",
        city: "高知市",
        population: "692065",
        density: "97.4",
        area: "7103.6",
        homepage: "http://www.pref.kochi.lg.jp/"
    },
    {
        id: "40",
        region: "九州",
        prefec: "福岡県",
        city: "福岡市",
        population: "5138891",
        density: "1030.6",
        area: "4986.5",
        homepage: "http://www.pref.fukuoka.lg.jp/"
    },
    {
        id: "41",
        region: "九州",
        prefec: "佐賀県",
        city: "佐賀市",
        population: "812013",
        density: "332.7",
        area: "2440.7",
        homepage: "http://www.pref.saga.lg.jp/"
    },
    {
        id: "42",
        region: "九州",
        prefec: "長崎県",
        city: "長崎市",
        population: "1313103",
        density: "317.9",
        area: "4131",
        homepage: "http://www.pref.nagasaki.lg.jp/"
    },
    {
        id: "43",
        region: "九州",
        prefec: "熊本県",
        city: "熊本市",
        population: "1739211",
        density: "234.7",
        area: "7409.5",
        homepage: "http://www.pref.kumamoto.jp/"
    },
    {
        id: "44",
        region: "九州",
        prefec: "大分県",
        city: "大分市",
        population: "1124597",
        density: "177.4",
        area: "6340.8",
        homepage: "http://www.pref.oita.jp/"
    },
    {
        id: "45",
        region: "九州",
        prefec: "宮崎県",
        city: "宮崎市",
        population: "1070213",
        density: "138.4",
        area: "7735.2",
        homepage: "http://www.pref.miyazaki.lg.jp/"
    },
    {
        id: "46",
        region: "九州",
        prefec: "鹿児島県",
        city: "鹿児島市",
        population: "1589206",
        density: "173",
        area: "9187.1",
        homepage: "http://www.pref.kagoshima.jp/"
    },
    {
        id: "47",
        region: "沖縄",
        prefec: "沖縄県",
        city: "那覇市",
        population: "1468410",
        density: "643.3",
        area: "2282.6",
        homepage: "http://www.pref.okinawa.lg.jp/"
    }
]);
};
