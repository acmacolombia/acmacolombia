import slugify from 'limax';

import { SITE, APP_BLOG } from '~/utils/config';

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';
const DEFAULT_LANGUAGE = 'es'; // Default language

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

/** */
export const getCanonical = (path = 'es'): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (language = DEFAULT_LANGUAGE, slug = '', type = 'page'): string => {
  let permalink: string;
  if (language === DEFAULT_LANGUAGE) {
    switch (type) {
      case 'category':
        permalink = createPath(CATEGORY_BASE, trimSlash(slug));
        break;
  
      case 'tag':
        permalink = createPath(TAG_BASE, trimSlash(slug));
        break;
  
      case 'post':
        permalink = createPath(trimSlash(slug));
        break;
  
      case 'page':
      default:
        permalink = createPath(slug);
        break;  }

    }
    else{
      switch (type) {
        case 'category':
          permalink = createPath(language, CATEGORY_BASE, trimSlash(slug));
          break;
    
        case 'tag':
          permalink = createPath(language, TAG_BASE, trimSlash(slug));
          break;
    
        case 'post':
          permalink = createPath(language, trimSlash(slug));
          break;
    
        case 'page':
        default:
          permalink = createPath(language, slug);
          break;
      }

    }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (language = DEFAULT_LANGUAGE): string =>
  language === DEFAULT_LANGUAGE ? BASE_PATHNAME : getPermalink('/', language);

/** */
export const getBlogPermalink = (language = DEFAULT_LANGUAGE): string =>
  language === DEFAULT_LANGUAGE ? BLOG_BASE : getPermalink(language, BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);


// import slugify from 'limax'; // Imported slugify library
// import { SITE, APP_BLOG } from '~/utils/config';
// import { trim } from '~/utils/utils';

// export const trimSlash = (s: string) => trim(trim(s, '/'));
// const createPath = (...params: string[]) => {
//   const paths = params
//     .map((el) => trimSlash(el))
//     .filter((el) => !!el)
//     .join('/');
//   return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
// };

// const BASE_PATHNAME = SITE.base || '/';
// const DEFAULT_LANGUAGE = 'es'; // Default language

// export const cleanSlug = (text = '') =>
//   trimSlash(text)
//     .split('/')
//     .map((slug) => slugify(slug))
//     .join('/');

// export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
// export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
// export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

// export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

// /** */
// export const getCanonical = (path = ''): string | URL => {
//   const url = String(new URL(path, SITE.site));
//   if (SITE.trailingSlash == false && path && url.endsWith('/')) {
//     return url.slice(0, -1);
//   } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
//     return url + '/';
//   }
//   return url;
// };

// /** */
// export const getPermalink = (slug = '', type = 'page', language = DEFAULT_LANGUAGE): string => {
//   let permalink: string;

//   if (language === DEFAULT_LANGUAGE) {
//     // If language is default, don't include it in the permalink
//     permalink = createPath(slug);
//   } else {
//     switch (type) {
//       case 'category':
//         permalink = createPath(language, CATEGORY_BASE, trimSlash(slug));
//         break;

//       case 'tag':
//         permalink = createPath(language, TAG_BASE, trimSlash(slug));
//         break;

//       case 'post':
//         permalink = createPath(language, trimSlash(slug));
//         break;

//       case 'page':
//       default:
//         permalink = createPath(language, slug);
//         break;
//     }
//   }

//   return definitivePermalink(permalink);
// };

// /** */
// export const getHomePermalink = (language = DEFAULT_LANGUAGE): string =>
//   language === DEFAULT_LANGUAGE ? BASE_PATHNAME : getPermalink('/', 'page', language);

// /** */
// export const getBlogPermalink = (language = DEFAULT_LANGUAGE): string =>
//   language === DEFAULT_LANGUAGE ? BLOG_BASE : getPermalink(BLOG_BASE, 'page', language);

// /** */
// export const getAsset = (path: string, language = DEFAULT_LANGUAGE): string =>
//   language === DEFAULT_LANGUAGE ? `${BASE_PATHNAME}${path}` : `/${language}${path}`;

// /** */
// const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
