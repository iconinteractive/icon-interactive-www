---
date: 2020-01-16
title: ICON Interactive Site Relaunch

---
ICON Interactive is a digital agency that's been around for over 20 years so we've seen the crest of various waves of technology. While approaching our site relaunch we wanted to focus on developing a performant site that would showcase our work in a clear, concise manner while also prioritizing performance and the content management experience in the process. We've done just that, so we wanted to share how we did it.

### Make It Fast

We opted to go with a site built around the [JAMstack](https://jamstack.org/), which is a modular & performant approach to building websites. It centers around the idea of server-side rendering the site's pages which are then served as code-split payloads with pre-rendered HTML through a CDN. One can also integrate a mesh of services via APIs & framework plugins. This approach removes the need to directly manage web servers that host the site and makes for a performant & secure user experience.

### Site Framework

ICON enjoys utilizing Vue as our JS framework of choice so we went with [Gridsome](https://gridsome.org/) as our site's framework since it's based on Vue and has a rich ecosystem of plug-ins & documentation. Gridsome is heavily inspired by [Gatsby](https://www.gatsbyjs.org/) which is a React-based site framework anyone new to this space should check out.

Gridsome compiles one's website to code-split payloads with pre-rendered HTML. This differs from a typical site built with Vue or React where the HTML, JS, and CSS are sent as a large bundled javascript file and then parsed on the client's browser. Lots of optimizations are included out of the box - link pre-fetching, image src sets, lazy-loading images, and more. These site generators are the cutting edge of the industry because they dramatically improve site performance & SEO while allowing the developers to use JavaScript frameworks such as React or Vue that they're already familiar with.

Gridsome pulls in data via GraphQL which offers a unified schema and syntax to manage various sources of data. The tooling around GraphQL is fantastic, there's an included query editor to test queries during the development process which also integrates relevant documentation directly into the interface.

### CMS

For the content management system we wanted to prioritize ease of use and create a fault-tolerant system for updating the website. We went with [Forestry](https://forestry.io/) as our CMS since it updates the site by adding the content directly to the github repository as a commit which provides granular logging of each update and allows for version roll-back if needed.

Forestry's templates are easily customizable to the developer through YAML files. They also provide a GUI interface to modulate and manage templates which is intuitive & flexible. All the images are uploaded directly to a linked AWS S3 bucket via the Forestry interface which relieves bloat on the git repository and provides an integrated, seamless experience for the content editor.

Forestry is essentially creating and modifying markdown files for the site to ingest at compile time. Each update that is pushed up will take about 2-3 minutes before it is reflected on the live site because the entire site is being recompiled on each update. The benefits gained in site speed & SEO performance from this compilation process are worth it.

### Deployment

Our site is deployed through [AWS Amplify](https://aws.amazon.com/amplify/console/) which links to our code repository and provides continuous deployment, which means our site gets rebuilt and deployed each time new commits are pushed to the repository or changes are added through the CMS. Amplify also provides deployment for feature branches so we can test updates of a different git branch before they're merged into the main production branch. The compiled site is then served through the AWS CDN which provides a highly performant way to host & serve the site.

### Open Source

The site is being built from an open source [Github](https://github.com/iconinteractive) repository since the Github API has fantastic support for CMS integrations like Forestry. We wanted to open source the site's code to serve as an educational resource for anyone curious to learn more about building websites with the JAMstack.

### Lighthouse Performance Audit

Our previous site was built on Wordpress and suffered from image bloat which impacted the performance. We're incredibly pleased with the massive jump in performance, accessibility, & SEO from utilizing a JAMstack architecture.

Previous ICON site:

![](https://s3.amazonaws.com/forestry.iconinteractive.com/before.png)

New ICON site:

![](https://s3.amazonaws.com/forestry.iconinteractive.com/Screen_Shot_2020-01-15_at_11.36.35_AM222.png)

Thanks for reading! If you're curious to learn more about the JAMstack here's an excellent [whitepaper](https://www.netlify.com/pdf/netlify-whitepaper.pdf) from Netlify.

### Repo:

[https://github.com/iconinteractive/icon-interactive-www](https://github.com/iconinteractive/icon-interactive-www)