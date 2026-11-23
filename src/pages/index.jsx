import React, { useEffect } from 'react';

/**
 * 产品门面首页（英文，路径 /）。
 * 这里只做一个全屏 iframe 壳，加载 static/proto/index.html 里的完整原型页面。
 * 好处：原型是单文件、可独立打开预览，Docusaurus 只负责路由与部署，
 *       两者样式/脚本完全隔离，互不干扰。
 */
export default function Home() {
  useEffect(() => {
    // 原型内点「中 / EN」时会发 postMessage，这里同步浏览器地址栏到 /cn 或 /
    function onMsg(e) {
      if (e.data && e.data.type === 'mm-lang') {
        const target = e.data.lang === 'zh' ? '/cn' : '/';
        if (window.location.pathname !== target) {
          window.history.replaceState(null, '', target);
        }
      }
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <iframe
      className="mm-frame"
      src="/proto/index.html?lang=en"
      title="Maomaoxiang Lab"
    />
  );
}
