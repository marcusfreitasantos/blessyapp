import { Image } from "react-native";
import DefaultCoverImg from "../../../assets/default_cover_img.jpg";
import BackgroundBlessyImg from "../../../assets/login_bg_img.jpg";
import DefautlAvatarImg from "../../../assets/icon.png";
import BannerImg from "../../../assets/home_banner.jpg";

export const backgroundImgUri = Image.resolveAssetSource(
  Number(BackgroundBlessyImg)
).uri;

export const defaultBannerImg = Image.resolveAssetSource(Number(BannerImg)).uri;

export const defaultCoverImgUri = Image.resolveAssetSource(
  Number(DefaultCoverImg)
).uri;

export const defaultAvatarImgUri = Image.resolveAssetSource(
  Number(DefautlAvatarImg)
).uri;
