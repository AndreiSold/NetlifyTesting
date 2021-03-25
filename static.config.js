import axios from 'axios'
import path from 'path'
import fs from "fs";
import klaw from "klaw";
import matter from "gray-matter";

const cmsPageNames = {
  about: "About",
  homepage: "Homepage"
}

function getParsedCmsPages() {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync("./src/cms-pages")) {
        klaw("./src/cms-pages")
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              // Remove unused key //
              delete dataObj.orig;
              // Push object into items array //
              dataObj.data['pageName'] = item.path.replace(/^.*[\\\/]/, '').split('.')[0];
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const cmsPages = await getParsedCmsPages();

    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: "/homepage",
        getData: () => {
          return ({ cmsObject: cmsPages.find(page => page.data.pageName === cmsPageNames.homepage) });
        }
      },
      {
        path: "/about",
        getData: () => {
          return ({ cmsObject: cmsPages.find(page => page.data.pageName === cmsPageNames.about) });
        }
      }
    ]
  },

  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()
    return meta.muiSheets.collect(App)
  },

  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],

  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
