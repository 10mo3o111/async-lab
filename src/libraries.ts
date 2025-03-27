type Library = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

// 図書館データリスト
export const LIBRARIES: Library[] = [
  {
    id: "ndl",
    name: "国立国会図書館（東京本館）",
    latitude: 35.6824,
    longitude: 139.7587,
  },
  {
    id: "ndl_kansai",
    name: "国立国会図書館 関西館",
    latitude: 34.8196,
    longitude: 135.7803,
  },
  {
    id: "kyoto_u_lib",
    name: "京大附属図書館",
    latitude: 35.0273,
    longitude: 135.7809,
  },
  {
    id: "takeo_lib",
    name: "武雄市図書館",
    latitude: 33.1913,
    longitude: 130.0204,
  },
];
