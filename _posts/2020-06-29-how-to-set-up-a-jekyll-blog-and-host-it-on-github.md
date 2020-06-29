---
layout: post
title: "How to set up a jekyll blog and host it on github"
comments: false
description: "How to set up a jekyll blog and host it on github"
keywords: "blog, jekyll, github, open source"
author: martin
---

This is a small guide on how to host your website or blog, created with jekyll static site generator, for free with 
github. If you don't know what jekyll is you can read about it [here](https://jekyllrb.com/).

## Prerequisites
#### Installation and requirements

Jekyll is written i Ruby and is a [Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems) which can be installed on most systems.


* [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.5.0 or above, including all development headers (ruby version can be checked by running `ruby -v`)
* [RubyGems](https://rubygems.org/pages/download) (which you can check by running `gem -v`)
* [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (in case your system doesn’t have them installed, which you can check by running `gcc -v`, `g++ -v` and `make -v` in your system’s command line interface)

If you need a guide for the different operating systems, have a look [here](https://jekyllrb.com/docs/installation/#requirements).


## Instructions

Open the terminal.

1\. Install Jekyll and bundler gems.

```text
~ ❯ gem install jekyll bundler
```

2\. Create a new Jekyll site at ./myblog.

```text
~ ❯ jekyll new website
```

3\. Change into your new directory.

```text
~ ❯ cd website
```

4\. Build the site and make it available on a local server.

```text
~/website ❯ bundle exec jekyll serve
```

5\. Browse to [http://localhost:4000](http://localhost:4000)

If you would like to run on a different port just add the port flag to the command line commands

```text
~/website ❯ bundle exec jekyll serve --port 4001
```

Now browse to [http://localhost:4001](http://localhost:4001)


## Initialize a git repo

Now we have to initialize a git repo to be able to push it to github later.

Open the terminal and go to your project folder.

```text
~ ❯ cd website
```

We initialize a git repo be writing `git init`

```text
~/website ❯ git init
```

## Deployment

If we are done modifying the project we add all changes, commit and push the code to your git repo that is prepared for github-pages. The git repo should be named like `username.github.io`

```text
~/website ❯ git add -A 
~/website ❯ git commit -m 'Initial commit'
~/website ❯ git push origin master
```

After some time, browse to `username.github.io` and you will see your website or blog.


## Custom domain

It is possible to point your github page `http://username.github.io` to your custom domain, `http://www.your-domain.com`. You do that by going to the `settings` link in your github repo.

![Github repo settings](/assets/images/screenshots/settings.png)

Go to the `GitHub Pages` section. There you will see `Custom domain` input field. Now add `www.your-domain.com` to the input field as seen in the picture below.

![Github repo settings - Github Pages section - HTTP](/assets/images/screenshots/settings_githubpage_http.png)

After a while you can access your website/blog via `http://www.your-domain.com`

## HTTPS

It's a good idea to enable `https` to your site as well. It gives a more professional impression if you ask me.
To enable `https` check the `Enforce HTTPS` filed seen in the picture below.

![Github repo settings - Github Pages section - HTTPS](/assets/images/screenshots/settings_githubpage_https.png)

#### Trubleshooting


If you only add `your-domain.com` without subdomain `www` in the `Custom domain` field 
there may be problems accessing your website via `https`. To solve that you have to put subdomain `www` in the `Custom domain` field as well, as seen in the picture above.

