// 天気コードに応じた天気画像選択
import weather01d from "./01d.svg";
import weather02d from "./02d.svg";
import weather03d from "./03d.svg";
import weather04d from "./04d.svg";
import weather09d from "./09d.svg";
import weather10d from "./10d.svg";
import weather11d from "./11d.svg";
import weather13d from "./13d.svg";
import weather50d from "./50d.svg";
import loading from "./loading.gif";

export function getWeatherImage(weatherCode: number) {
  let imageUrl: string;
  let altString: string;

  switch (weatherCode) {
    case 0:
    case 1:
      imageUrl = weather01d;
      altString = "晴れ";
      break;
    case 3:
      imageUrl = weather02d;
      altString = "曇り時々晴れ";
      break;
    case 2:
      imageUrl = weather03d;
      altString = "曇り";
      break;
    case 45:
    case 48:
      imageUrl = weather04d;
      altString = "霧・霜";
      break;
    case 71:
    case 73:
      imageUrl = weather09d;
      altString = "雨又は雪";
      break;
    case 51:
    case 53:
      imageUrl = weather10d;
      altString = "小雨・中程度の雨";
      break;
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
    case 95:
      imageUrl = weather11d;
      altString = "雷雨";
      break;
    case 56:
    case 57:
    case 66:
    case 67:
    case 75:
    case 85:
    case 86:
      imageUrl = weather13d;
      altString = "雪";
      break;
    case 77:
      imageUrl = weather50d;
      altString = "ひょう";
      break;
    default:
      imageUrl = loading;
      altString = "未知の天気コード";
  }
  return { imageUrl, altString };
}
