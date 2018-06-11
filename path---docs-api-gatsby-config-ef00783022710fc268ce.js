webpackJsonp([37353760768834],{310:function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="gatsby-configjs"><a href="#gatsby-configjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gatsby-config.js</h1>\n<p>This is a file where You can configure few thing</p>\n<ol>\n<li>\n<p>Meta and OG tags</p>\n<ul>\n<li>\n<p>find <code class="language-text">siteMetadata</code></p>\n</li>\n<li>\n<p>fill with your data</p>\n<ul>\n<li>title</li>\n<li>description</li>\n<li>image</li>\n<li>url</li>\n<li>type</li>\n<li>siteName</li>\n</ul>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">    siteMetadata<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'Brainhub template\'</span><span class="token punctuation">,</span>\n        description<span class="token punctuation">:</span> <span class="token string">\'Default template for open-source libraries\'</span><span class="token punctuation">,</span>\n        image<span class="token punctuation">:</span> <span class="token string">\'https://cdn-images-1.medium.com/max/1200/1*CLUFZFaXF6NG27NA3d_JkQ.jpeg\'</span><span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://screencloud.dev.brainhub.pl/\'</span><span class="token punctuation">,</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'article\'</span><span class="token punctuation">,</span>\n        siteName<span class="token punctuation">:</span> <span class="token string">\'Brainhub template\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>DON\'T REMOVE ANY FIELD FROM CONFIG, IF YOU DON\'T WONT IT - LEAVE IT EMPTY</p>\n</blockquote>\n</li>\n<li>\n<p><a href="http://ogp.me/">more about tags</a></p>\n</li>\n<li>\n<p>don\'t worry if your chrome extension is not showing preview, for <a href="https://reactjs.org/">react</a> it is also not working</p>\n</li>\n<li>\n<p>check later on <a href="https://opengraphcheck.com/">open graph checker</a></p>\n</li>\n</ul>\n</li>\n<li>\n<p>Add github url</p>\n<ul>\n<li>find <code class="language-text">siteMetadata</code></li>\n<li>edit <code class="language-text">githubUrl</code></li>\n</ul>\n</li>\n<li>\n<p>You can change default path to all your markdown files. It\'s necessary to provide path to all markdowns and assets, to enable hot reloading.</p>\n<ul>\n<li>find <code class="language-text">gatsby-source-filesystem</code> in <code class="language-text">plugins</code></li>\n<li>change <code class="language-text">path</code> in <code class="language-text">options</code></li>\n</ul>\n<blockquote>\n<p>Note that it\'s temporary solution. In future version this option will be removed.</p>\n</blockquote>\n</li>\n<li>\n<p>You can change default path for your <code class="language-text">gatsby-docs-kit.yml</code></p>\n<ul>\n<li>find <code class="language-text">gatsby-transformer-remark</code> in <code class="language-text">plugins</code></li>\n<li>find <code class="language-text">gatsby-docs-kit</code> and change path in <code class="language-text">config</code></li>\n</ul>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">    resolve<span class="token punctuation">:</span> <span class="token string">\'gatsby-transformer-remark\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            resolve<span class="token punctuation">:</span> <span class="token string">\'gatsby-docs-kit\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">            config<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/gatsby-docs-kit.yml`</span></span><span class="token punctuation">,</span>\n</span></code></pre>\n      </div>\n</li>\n<li>\n<p>Change default favicon path</p>\n<ul>\n<li>find <code class="language-text">gatsby-plugin-catch-links</code> in <code class="language-text">plugins</code></li>\n<li>edit <code class="language-text">logo</code> in <code class="language-text">options</code></li>\n</ul>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">    <span class="token string">\'gatsby-plugin-catch-links\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-plugin-favicon`</span></span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">        logo<span class="token punctuation">:</span> <span class="token string">\'./src/static/favicon.png\'</span><span class="token punctuation">,</span>\n</span></code></pre>\n      </div>\n</li>\n</ol>'}},pathContext:{relativePath:"GDK>../docs/api/gatsby-config.md"}}}});
//# sourceMappingURL=path---docs-api-gatsby-config-ef00783022710fc268ce.js.map