export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net"
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed"
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg"
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 }
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000
};

const dummyCards = [
  {
    id: "1",
    title: "Snapchat message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-02-01"),
    userImg: "/assets/images/jason.png",
    username: "jason",
    views: 10,
    visibility: "public",
    duration: 156
  },
  {
    id: "2",
    title: "Sample Video",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-02-02"),
    userImg: "/assets/images/jessica.png",
    username: "jane",
    views: 20,
    visibility: "private",
    duration: 200
  },
  {
    id: "3",
    title: "Cooking Vlog",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-02-03"),
    userImg: "/assets/images/sarah.png",
    username: "sarah",
    views: 45,
    visibility: "public",
    duration: 180
  },
  {
    id: "4",
    title: "Gaming Highlights",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-02-04"),
    userImg: "/assets/images/michael.png",
    username: "mike",
    views: 120,
    visibility: "unlisted",
    duration: 540
  },
  {
    id: "5",
    title: "Tech Review 2025",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-02-05"),
    userImg: "/assets/images/emily.png",
    username: "emily",
    views: 78,
    visibility: "public",
    duration: 300
  },
  {
    id: "6",
    title: "Day in My Life",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-02-06"),
    userImg: "/assets/images/alex.png",
    username: "alex",
    views: 35,
    visibility: "private",
    duration: 220
  },
  {
    id: "7",
    title: "Street Interview",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-02-07"),
    userImg: "/assets/images/lisa.png",
    username: "nina",
    views: 92,
    visibility: "public",
    duration: 410
  },
  {
    id: "8",
    title: "Fitness Routine",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-02-08"),
    userImg: "/assets/images/david.png",
    username: "leo",
    views: 58,
    visibility: "unlisted",
    duration: 360
  },

];


export { dummyCards };      