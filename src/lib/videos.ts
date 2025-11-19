const S3_BUCKET_URL = process.env.NEXT_PUBLIC_S3_BUCKET_URL || 'https://feynman-videos.s3.amazonaws.com';

export const videoUrls = {
  sample1: `${S3_BUCKET_URL}/sample1.mp4`,
  sample2: `${S3_BUCKET_URL}/sample2.mp4`,
  sample3: `${S3_BUCKET_URL}/sample3.mp4`,
  
  concepts: `${S3_BUCKET_URL}/concepts.mp4`,
  visuals: `${S3_BUCKET_URL}/visuals.mp4`,
  domains: `${S3_BUCKET_URL}/domains.mp4`,
  applied: `${S3_BUCKET_URL}/applied.mp4`,
  state: `${S3_BUCKET_URL}/state.mp4`,
};

export const getVideoUrl = (key: keyof typeof videoUrls): string => {
  return videoUrls[key];
};