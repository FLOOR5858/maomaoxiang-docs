import React, { useEffect } from 'react';

/**
 * 产品门面首页（中文，路径 /cn）。
 * 与英文首页同一个原型，仅通过 ?lang=zh 让原型以中文渲染。
 */
export default function Cn() {
  useEffect(() => {
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
      src="/proto/index.html?lang=zh"
      title="毛毛象实验室"
    />
  );
}
