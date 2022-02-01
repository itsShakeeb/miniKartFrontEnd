//Allowed Image type .png .pjp .jpg .pjpeg .jpeg .jfif
//Allowed Video type .mov .mpeg4 .mp4 .avi .wmv .hevc
/* 
FORMAT  EXTENSION  MIME_TYPE 
.mov     .mov	   video/quicktime
.mpeg4   .mp4      video/mp4
.avi     .avi      video/x-msvideo
.wmv     .wmv      video/x-ms-wmv
*/
const allowed_image_type = ["png", "pjp", "pjpeg", "jpeg"];
const allowed_video_type = [
  "mp4",
  "hevc",
  "quicktime",
  "x-msvideo",
  "x-ms-wmv",
];
const allowed_image_video_type = [
  "mp4",
  "hevc",
  "quicktime",
  "x-msvideo",
  "x-ms-wmv",
  "png",
  "pjp",
  "pjpeg",
  "jpeg",
];

const allowed_audio_type = [
  "mpeg",
  "x-aiff",
  "wav",
  "m4a",
  "x-ms-wma",
  "x-flac",
  "flac",
  "x-m4a",
  "cdda",
];

const validateImageType = (type) => {
  console.log("selected file MIME type", type);
  const is_valid_image_type = (allowed_type) => allowed_type === type;
  const result = allowed_image_type.some(is_valid_image_type);
  return result;
};
export const validateImage = (e) => {
  let file = e.target.files;
  let trueArray = [];
  for (let i = 0; i < file.length; i++) {
    let fileType = file[i].type.split("/")[1];
    let result = validateImageType(String(fileType));
    trueArray.push(Boolean(result));
  }
  const isTrue = (value) => value === true;
  const result = trueArray.every(isTrue);
  return result;
};

const validateVideoType = (type) => {
  console.log("selected file MIME type", type);
  const is_valid_video_type = (allowed_type) => allowed_type === type;
  const result = allowed_video_type.some(is_valid_video_type);
  return result;
};
export const validateVideo = (e) => {
  let file = e.target.files;
  let trueArray = [];
  for (let i = 0; i < file.length; i++) {
    let fileType = file[i].type.split("/")[1];
    let result = validateVideoType(String(fileType));
    trueArray.push(Boolean(result));
  }
  const isTrue = (value) => value === true;
  const result = trueArray.every(isTrue);
  return result;
};

const validateImageVideoType = (type) => {
  console.log("selected file MIME type", type);
  const is_valid_image_type = (allowed_type) => allowed_type === type;
  const result = allowed_image_video_type.some(is_valid_image_type);
  return result;
};
export const validateImageVideo = (e) => {
  let file = e.target.files;
  let trueArray = [];
  for (let i = 0; i < file.length; i++) {
    let fileType = file[i].type.split("/")[1];
    let result = validateImageVideoType(String(fileType));
    trueArray.push(Boolean(result));
  }
  const isTrue = (value) => value === true;
  const result = trueArray.every(isTrue);
  return result;
};

const validateAudioType = (type) => {
  console.log("selected file MIME type", type);
  const is_valid_audio_type = (allowed_type) => allowed_type === type;
  const result = allowed_audio_type.some(is_valid_audio_type);
  return result;
};
export const validateAudio = (e) => {
  let file = e.target.files;
  let trueArray = [];
  for (let i = 0; i < file.length; i++) {
    let fileType = file[i].type.split("/")[1];
    let result = validateAudioType(String(fileType));
    trueArray.push(Boolean(result));
  }
  const isTrue = (value) => value === true;
  const result = trueArray.every(isTrue);
  return result;
};

export const fileSizeInMB = (e) => {
  const fileSize = e.target.files[0].size;
  const FILESIZEINMB = Math.round(fileSize / 1000000);

  return FILESIZEINMB;
};

export const accumulatedFileSizeInMB = (e) => {
  const files = e.target.files;
  let sizeArray = [];
  for (let index = 0; index < files.length; index++) {
    sizeArray.push(files[index].size);
  }

  let fileSize = sizeArray.reduce((acc, res) => {
    return acc + res;
  });

  const FILESIZEINMB = Math.round(fileSize / 1000000);

  return FILESIZEINMB;
};
