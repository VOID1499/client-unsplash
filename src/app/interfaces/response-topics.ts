

export interface Topic {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at: string
  only_submissions_after: any
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: any[]
  total_current_user_submissions: any
  links: TopicLinks
  status: string
  owners: Owner[]
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

export interface TopicLinks {
  self: string
  html: string
  photos: string
}

export interface Owner {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: LinksOwner
  profile_image: ProfileImageOwner
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface LinksOwner {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImageOwner {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email: any
}


//Vista general del topico
export interface CoverPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: CoverPhotoLinks
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  user: User
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface CoverPhotoLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  name: Submission
}

export interface Submission {
  status: string
  approved_on: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: string
  portfolio_url: string
  bio: string
  location: any
  links: LinksCoverPhotoUser
  profile_image: ProfileImageCoverPhoto
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface LinksCoverPhotoUser {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImageCoverPhoto {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email: any
}

export interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: UrlsPreviewPhoto
}

export interface UrlsPreviewPhoto {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
