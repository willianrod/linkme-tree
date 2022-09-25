<div align="center">
  <img src=".media/logo.svg" width="200px">
  <br/>
  <h4 width="400px">An open-source and self-hosted, privacy focused alternative to linktree, easily configurableand easy to deploy.</h4>
</div>

---

# Description

If you're looking for a personal website, links to your social media, links to personal projects, and a place to put all your links, this is for you, all of this with no cookies and no trackers. Just what matters!!

# Configuration

There are two ways you can customize LinkMe Tree for your needs. One of them is to update the YAML file inside `src/data`, and the second one is to have Gist file with all your information to be deployed.

## Updating `src/data/index.yml`

If you want to have everything in one place, this option is for you. You just need to fork this repository, update the file with all your information and deploy it anywhere you want.

## Using a gist file

If you want to have all information easily reachable and not have to do lots of commits to update your links, this option is for you. Have in mind that for your update to take effect, you'll have to manually trigger re-deploy on Vercel.

First, you will need to create a new gist file [here](https://gist.github.com/) and give it the name you want with `.yml` extension. Then, copy the `src/data/index.yml` contents to your gist and start customizing it with your information. Once you're done, you will need to get the raw gist file URL like this one https://gist.githubusercontent.com/willianrod/f9af9032d4c5d0087d92dea26a755af8/raw/linkme-tree.yml.

With the gist URL, you just need to add an environment variable named `GIST_URL` with your gist URL and you're ready to deploy 🎉.

# Deploy your own

Now that you're ready, you can go ahead and deploy on your own Vercel account.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwillianrod%2Flinkme-tree&env=GIST_URL&envDescription=This%20is%20opitional%20if%20you%20are%20using%20the%20yaml%20file%20inside%20src%2Fdata%2F%20but%20is%20required%20if%20you're%20loading%20a%20yaml%20from%20gist&project-name=linkme-tree&repo-name=linkme-tree)
