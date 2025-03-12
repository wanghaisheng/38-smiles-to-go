/**
 * 笑容练习页面UI交互逻辑
 * 处理笑容练习界面的交互和显示
 */
import smilesConfig from './smiles-config.js';
import smileAnalysis from './smile-analysis.js';

document.addEventListener('DOMContentLoaded', function() {
  // 初始化笑容练习界面
  initPracticeUI();
  
  // 监听开始练习按钮点击
  document.querySelector('.start-btn')?.addEventListener('click', startPractice);
  
  // 监听记录笔记按钮点击
  document.querySelector('.action-button.secondary')?.addEventListener('click', openNoteDialog);
});

// 初始化练习界面
function initPracticeUI() {
  // 从URL获取当前练习的笑容ID
  const urlParams = new URLSearchParams(window.location.search);
  const smileId = parseInt(urlParams.get('id') || '1');
  
  // 获取笑容配置
  const smile = smilesConfig.smiles.find(s => s.id === smileId) || smilesConfig.smiles[0];
  
  // 更新UI
  updatePracticeUI(smile);
}

// 更新练习UI
function updatePracticeUI(smile) {
  // 更新标题和描述
  document.querySelector('.practice-title')?.innerHTML = `<span>${smile.icon}</span> ${smile.name}`;
  document.querySelector('.practice-description')?.textContent = smile.description;
  
  // 更新练习步骤
  const stepsContainer = document.querySelector('.instruction-step')?.parentElement;
  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    smile.steps.forEach((step, index) => {
      stepsContainer.innerHTML += `
        <div class="instruction-step">
          <div class="step-number">${index + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `;
    });
  }
  
  // 更新练习小贴士
  const tipsList = document.querySelector('.tips-list');
  if (tipsList) {
    tipsList.innerHTML = '';
    smile.tips.forEach(tip => {
      tipsList.innerHTML += `<li>${tip}</li>`;
    });
  }
  
  // 更新适用场景
  const suitableContainer = document.querySelector('.tips-list')?.parentElement.parentElement;
  if (suitableContainer) {
    suitableContainer.innerHTML += `
      <div class="separator"></div>
      <h3 class="tips-title"><i>🌟</i> 适用场景</h3>
      <p class="suitable-text">${smile.suitable}</p>
    `;
  }
  
  // 更新进度信息
  updateProgressInfo(smile.id);
}

// 更新进度信息
function updateProgressInfo(smileId) {
  const progressStatus = smileAnalysis.getMasterCertificateStatus();
  
  document.querySelector('.progress-bar')?.style.setProperty('width', `${(progressStatus.progress / progressStatus.required) * 100}%`);
  document.querySelector('.progress-stats')?.innerHTML = `
    <span>已完成: ${progressStatus.progress}/${progressStatus.required}种笑容</span>
    <span>总进度: ${Math.floor((progressStatus.progress / progressStatus.required) * 100)}%</span>
  `;
}

// 开始练习
async function startPractice() {
  // 获取当前笑容ID
  const urlParams = new URLSearchParams(window.location.search);
  const smileId = parseInt(urlParams.get('id') || '1');
  
  // 模拟打开相机
  await openCamera();
  
  // 显示相机预览界面
  document.querySelector('.camera-overlay')?.classList.add('active');
  
  // 监听拍照按钮
  document.querySelector('.camera-capture-btn')?.addEventListener('click', async () => {
    // 模拟拍照并获取图像数据
    const imageData = await captureImage();
    
    // 分析笑容
    const result = await smileAnalysis.analyzeSmile(smileId, imageData);
    
    // 显示分析结果
    showAnalysisResult(result);
  });
}

// 模拟打开相机
async function openCamera() {
  // 实际项目中会调用设备相机API
  console.log('打开相机...');
  
  // 模拟相机界面
  const cameraPreview = document.querySelector('.camera-preview');
  if (cameraPreview) {
    cameraPreview.innerHTML = `
      <div class="camera-feed">
        <video autoplay playsinline></video>
      </div>
      <div class="camera-controls">
        <button class="camera-capture-btn">拍照分析</button>
      </div>
    `;
  }
  
  // 模拟延迟
  return new Promise(resolve => setTimeout(resolve, 500));
}

// 模拟拍照
async function captureImage() {
  // 实际项目中会从视频流中捕获图像
  console.log('拍照中...');
  
  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // 返回模拟的图像数据
  return 'mock-image-data';
}

// 显示分析结果
function showAnalysisResult(result) {
  // 创建结果界面
  const resultUI = `
    <div class="analysis-result">
      <h3>笑容分析结果</h3>
      <div class="score-display">
        <div class="score-circle">
          <span class="score-value">${result.score}</span>
        </div>
        <p class="score-label">分数</p>
      </div>
      <p class="feedback-text">${result.feedback}</p>
      ${result.badgeUnlocked ? `
        <div class="badge-unlocked">
          <h4>恭喜！解锁新徽章</h4>
          <div class="badge-icon">🏆</div>
        </div>
      ` : ''}
      <div class="result-actions">
        <button class="retry-btn">重新尝试</button>
        <button class="continue-btn">继续练习</button>
      </div>
    </div>
  `;
  
  // 更新界面
  document.querySelector('.camera-preview')?.innerHTML = resultUI;
  
  // 监听按钮事件
  document.querySelector('.retry-btn')?.addEventListener('click', startPractice);
  document.querySelector('.continue-btn')?.addEventListener('click', () => {
    // 返回主界面或进入下一个笑容练习
    window.location.href = 'practice.html?id=' + (parseInt(new URLSearchParams(window.location.search).get('id') || '1') + 1);
  });
}

// 打开笔记对话框
function openNoteDialog() {
  // 创建笔记对话框
  const noteDialog = document.createElement('div');
  noteDialog.className = 'note-dialog';
  noteDialog.innerHTML = `
    <div class="note-dialog-content">
      <h3>记录练习笔记</h3>
      <textarea placeholder="写下你的练习心得和技巧..."></textarea>
      <div class="note-actions">
        <button class="cancel-btn">取消</button>
        <button class="save-btn">保存</button>
      </div>
    </div>
  `;
  
  // 添加到页面
  document.body.appendChild(noteDialog);
  
  // 监听按钮事件
  noteDialog.querySelector('.cancel-btn')?.addEventListener('click', () => {
    document.body.removeChild(noteDialog);
  });
  
  noteDialog.querySelector('.save-btn')?.addEventListener('click', () => {
    const noteText = noteDialog.querySelector('textarea')?.value;
    if (noteText) {
      saveNote(noteText);
    }
    document.body.removeChild(noteDialog);
  });
}

// 保存笔记
function saveNote(noteText) {
  const urlParams = new URLSearchParams(window.location.search);
  const smileId = parseInt(urlParams.get('id') || '1');
  
  // 获取现有笔记
  let notes = JSON.parse(localStorage.getItem('smileNotes') || '{}');
  
  // 添加新笔记
  notes[smileId] = noteText;
  
  // 保存笔记
  localStorage.setItem('smileNotes', JSON.stringify(notes));
  
  // 提示保存成功
  alert('笔记保存成功！');
}