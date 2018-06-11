webpackJsonp([30198641715044],{312:function(e,a){e.exports={data:{markdownRemark:{html:'<h1 id="creating-your-site"><a href="#creating-your-site" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating your site</h1>\n<p>After cloning starter you now have a skeleton to work from for your specific website. The following discusses the rest of the Docusaurus structure in order for you to prepare your site.</p>\n<h2 id="directory-structure"><a href="#directory-structure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Directory structure</h2>\n<p>Along with previously existing files and directories, your root directory will now contain a structure similar to:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">.</span>\n├── docs\n│   ├── getting-started\n│   │   ├── creating-site.md\n│   │   ├── installation.md\n│   │   ├── introduction.md\n│   │   └── publishing.md\n│   ├── <span class="token punctuation">..</span>.\n│   └── www\n│       ├── src\n│       │   ├── pages\n│       │   │   └── landing.js\n│       │   ├── layouts\n│       │   ├── templates\n│       │   └── globalReferences.js\n│       ├── gatsby-docs-kit.yml\n│       ├── gatsby-docs-kit-temp.json\n│       └── package.json</code></pre>\n      </div>\n<ul>\n<li><code class="language-text">www/src/pages/landing.js</code> - is an example Gatsby page written as a React component,</li>\n<li><code class="language-text">www/src/layouts</code> - if you want to create Gatsby layout then put it here. You will be able to reference it in <code class="language-text">gatsby-docs-kit.yml</code>.</li>\n<li><code class="language-text">www/src/templates</code> - here you place custom templates for rendering Markdown pages. You will be able to reference it in <code class="language-text">gatsby-docs-kit.yml</code>.</li>\n<li><code class="language-text">www/src/globalReferences.js</code> - if you want to use live editing of React components feature, then in that file you should export all necessary variables.</li>\n<li><code class="language-text">www/gatsby-docs-kit.(yml|json)</code> - contains configuration of gatsby-docs-kit.</li>\n<li><code class="language-text">www/static</code> - if you want to serve some other static content, then put it there. During Gatsby build time, it will be copied to <code class="language-text">public</code> directory</li>\n</ul>\n<h2 id="creating-custom-markdown-page"><a href="#creating-custom-markdown-page" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating custom Markdown page</h2>\n<p>To create a new page, you only need to do a few steps:</p>\n<ol>\n<li>\n<p>Add your documentation to markdown file, for example create file <code class="language-text">awesome.md</code> containing:</p>\n<div class="gatsby-highlight" data-language="markdown">\n      <pre class="language-markdown"><code class="language-markdown"><span class="token title important"><span class="token punctuation">#</span> Test title</span>\n\nThis is awesome</code></pre>\n      </div>\n</li>\n<li>\n<p>Reference that file in gatsby-docs-kit config. For instance:</p>\n<div class="gatsby-highlight" data-language="yaml">\n      <pre class="language-yaml"><code class="language-yaml"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Great\n  <span class="token key atrule">dir</span><span class="token punctuation">:</span> ../\n  <span class="token key atrule">file</span><span class="token punctuation">:</span> awesome.md\n  <span class="token key atrule">url</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>url</code></pre>\n      </div>\n<blockquote>\n<p>Note that you have to reference markdown file relatively to <code class="language-text">gatsby-docs-kit.(yml|json)</code> config. If current position of <code class="language-text">gatsby-docs-kit.(yml|json)</code> config is inconvenient for you, then you can change it in <code class="language-text">gatsby-config.js</code>.</p>\n</blockquote>\n</li>\n<li>\n<p>Now go to browser and you should see the <code class="language-text">Greate</code> page.</p>\n</li>\n</ol>'}},pathContext:{relativePath:"GDK>../docs/getting-started/creating-site.md"}}}});
//# sourceMappingURL=path---docs-getting-started-creating-site-a58a696879a0177d0220.js.map