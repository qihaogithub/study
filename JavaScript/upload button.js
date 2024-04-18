class CustomComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title');
    const link = this.getAttribute('link');
    const buttonId = this.getAttribute('button-id');
    const inputId = this.getAttribute('input-id');

    // 将模板字符串转换为文档片段，并添加到 shadow DOM 中
    const template = document.createElement('template');
    template.innerHTML = `
    <link rel="stylesheet" href="/css/zylb.css">
        <div class="list">
          <div class="zyname">
            <span>${title}</span>
            <a href="${link}" target="_blank">
              <iconpark-icon name="help"></iconpark-icon>
            </a>
          </div>
          <button class="button_line" id="${buttonId}">
            <iconpark-icon name="upload"></iconpark-icon>
            <span>上传</span>
          </button>
          <input type="file" id="${inputId}" accept="image/*" style="display: none;">
        </div>
      `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-component', CustomComponent);