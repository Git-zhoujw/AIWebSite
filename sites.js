// AI网站数据
const sites = [
  {
    name: 'ChatGPT',
    desc: 'OpenAI推出的强大AI聊天助手，支持多语言对话和内容生成。',
    url: 'https://chat.openai.com/'
  },
  {
    name: 'Midjourney',
    desc: 'AI图像生成平台，输入描述即可生成高质量图片。',
    url: 'https://www.midjourney.com/'
  },
  {
    name: 'Stable Diffusion Web',
    desc: '开源AI图像生成工具，支持多种模型和自定义参数。',
    url: 'https://stablediffusionweb.com/'
  },
  {
    name: 'Notion AI',
    desc: '集成于Notion的AI助手，提升文档和知识管理效率。',
    url: 'https://www.notion.so/product/ai'
  },
  {
    name: 'Bing AI',
    desc: '微软推出的AI搜索与聊天助手，集成于Edge浏览器。',
    url: 'https://www.bing.com/chat'
  },
  {
    name: 'Claude',
    desc: 'Anthropic公司开发的AI助手，注重安全和对话体验。',
    url: 'https://claude.ai/'
  },
  {
    name: 'Poe',
    desc: 'Quora推出的AI聊天平台，聚合多种AI模型。',
    url: 'https://poe.com/'
  },
  {
    name: '文心一言',
    desc: '百度推出的中文大模型AI助手，支持多种任务。',
    url: 'https://yiyan.baidu.com/'
  },
  {
    name: '通义千问',
    desc: '阿里巴巴推出的AI大模型平台，支持多场景应用。',
    url: 'https://tongyi.aliyun.com/'
  },
  {
    name: 'Google Gemini',
    desc: '谷歌推出的AI助手，支持多模态内容生成与理解。',
    url: 'https://gemini.google.com/'
  }
];

// 渲染卡片
function renderSites(filter = '') {
  const container = document.getElementById('sites-container');
  container.innerHTML = '';
  const filtered = sites.filter(site =>
    site.name.toLowerCase().includes(filter.toLowerCase()) ||
    site.desc.toLowerCase().includes(filter.toLowerCase())
  );
  if (filtered.length === 0) {
    container.innerHTML = '<div style="color:#888;text-align:center;width:100%">未找到相关AI网站</div>';
    return;
  }
  filtered.forEach(site => {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
      <div class="site-title">${site.name}</div>
      <div class="site-desc">${site.desc}</div>
      <a class="site-link" href="${site.url}" target="_blank" rel="noopener">访问</a>
    `;
    container.appendChild(card);
  });
}

// 搜索功能
window.onload = function() {
  renderSites();
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function() {
    renderSites(this.value);
  });
}; 