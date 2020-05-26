# megantic
🚀 McGill Interstellar Flight Group's website

## Contributing
### Branches
`master` : Where our live site is running. Don't push anything other than a working `dev` branch there.

`dev` : Where we push all our changes for testing before publication.

#### Writing new pages/components etc.
1. Make a new branch from `dev` for your page or component.
2. Code away!
3. Once you're done, make a pull request back into `dev`

#### Guidelines
- Use [CSS Modules](https://www.gatsbyjs.org/tutorial/part-two/#css-modules) for styling whenever possible, one css module per component ideally
- Components used in several pages should have a dedicated component file. Components used in a single page *may* be defined within the page file.
- Images are divided in two categories: content and styling. The former is for images used for actual page content, latter for component styling like icons, logos, background images, etc.

### Setting up your environment
You'll need to set up your development environment as described [here](https://www.gatsbyjs.org/tutorial/part-zero/) and clone this repository.

Once that's done, open the command line at the root of the repo and run:

```shell
  npm install ./
```

Aaaand you're ready to roll!

## Site Structure
Layout

- Home
    - Brief description
        - link to individual project pages
    - Blog post links (with preview)
- Blog
    - Post
- Projects
    - RDE
    - LTP
    - Lightsail
    - Dust ablation
- People
    - Bio
        - Name
        - Photo
        - Involvement
        - Academics
        - Social media links
- Contact
    - Email
- Gallery
    - Sub-galleries by chronolononololonlgic order
- Merch
    - SHOPIFYYYYYYYYYYYYYYYY