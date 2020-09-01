---
title: 'Procheta'
date: '2020-01-01'
author: 'Procheta Bhattacharyya'
short: 'it is a sample blog.'
image: 'https://procheta1999.vercel.app/photo.jpg'
linkedin: 'https://www.linkedin.com/in/procheta-bhattacharyya-18890818b/'
github: 'https://github.com/procheta1999'
mail: "mailto:bhattacharyya.procheta1999@gmail.com"
twitter: ''
portfolio: 'https://procheta1999.vercel.app/'
cover: 'https://t4.ftcdn.net/jpg/02/75/11/41/240_F_275114154_XjA5hxmjz6wt0MRMrsCf8EyQEPsHZuxw.jpg'
---

<br>
<center><img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
     alt="Markdown Monster icon"/></center><br>

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.