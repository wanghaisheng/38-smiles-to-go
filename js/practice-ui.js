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
  document.querySelector('.action-button')?.addEventListener('click', startPractice);
  
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
  const suitableContainer = document.querySelector('.tips-title')?.parentElement;
  if (suitableContainer) {
    const alreadyHasSuitable = suitableContainer.querySelector('.suitable-text');
    if (!alreadyHasSuitable) {
      suitableContainer.innerHTML += `
        <div class="separator"></div>
        <h3 class="tips-title"><i>🌟</i> 适用场景</h3>
        <p class="suitable-text">${smile.suitable}</p>
      `;
    } else {
      alreadyHasSuitable.textContent = smile.suitable;
    }
  }
  
  // 更新进度信息
  updateProgressInfo(smile.id);
}

// 更新进度信息
function updateProgressInfo(smileId) {
  const progressStatus = smileAnalysis.getMasterCertificateStatus();
  
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.width = `${(progressStatus.progress / progressStatus.required) * 100}%`;
  }
  
  const progressStats = document.querySelector('.progress-stats');
  if (progressStats) {
    progressStats.innerHTML = `
      <span>已完成: ${progressStatus.progress}/${progressStatus.required}种笑容</span>
      <span>总进度: ${Math.floor((progressStatus.progress / progressStatus.required) * 100)}%</span>
    `;
  }
}

// 开始练习
async function startPractice() {
  // 获取当前笑容ID
  const urlParams = new URLSearchParams(window.location.search);
  const smileId = parseInt(urlParams.get('id') || '1');
  
  // 模拟打开相机
  await openCamera();
  
  // 显示相机预览界面
  const cameraOverlay = document.createElement('div');
  cameraOverlay.className = 'camera-overlay';
  cameraOverlay.innerHTML = `
    <div class="camera-preview">
      <div class="camera-feed">
        <video autoplay playsinline></video>
      </div>
      <div class="camera-controls">
        <button class="camera-capture-btn">拍照分析</button>
      </div>
    </div>
  `;
  document.body.appendChild(cameraOverlay);
  
  // 监听拍照按钮
  cameraOverlay.querySelector('.camera-capture-btn')?.addEventListener('click', async () => {
    // 模拟拍照并获取图像数据
    const imageData = await captureImage();
    
    // 分析笑容
    const result = await smileAnalysis.analyzeSmile(smileId, imageData);
    
    // 显示分析结果
    showAnalysisResult(result, cameraOverlay);
  });
}

// 模拟打开相机
async function openCamera() {
  // 实际项目中会调用设备相机API
  console.log('打开相机...');
  
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
function showAnalysisResult(result, cameraOverlay) {
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
  cameraOverlay.querySelector('.camera-preview').innerHTML = resultUI;
  
  // 监听按钮事件
  cameraOverlay.querySelector('.retry-btn')?.addEventListener('click', () => {
    document.body.removeChild(cameraOverlay);
    startPractice();
  });
  
  cameraOverlay.querySelector('.continue-btn')?.addEventListener('click', () => {
    // 返回主界面或进入下一个笑容练习
    document.body.removeChild(cameraOverlay);
    
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = parseInt(urlParams.get('id') || '1');
    const nextId = (currentId % 38) + 1; // 循环到下一个笑容ID
    
    window.location.href = `practice.html?id=${nextId}`;
  });
}

// 打开笔记对话框
function openNoteDialog() {
  // 创建笔记对话框
  const noteDialog = document.createElement('div');
  noteDialog.className = 'note-dialog';
  noteDialog.style.position = 'fixed';
  noteDialog.style.top = '0';
  noteDialog.style.left = '0';
  noteDialog.style.width = '100%';
  noteDialog.style.height = '100%';
  noteDialog.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  noteDialog.style.display = 'flex';
  noteDialog.style.justifyContent = 'center';
  noteDialog.style.alignItems = 'center';
  noteDialog.style.zIndex = '1000';
  
  noteDialog.innerHTML = `
    <div class="note-dialog-content" style="background-color: white; padding: 20px; border-radius: 16px; width: 80%; max-width: 400px;">
      <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 700;">记录练习笔记</h3>
      <textarea placeholder="写下你的练习心得和技巧..." style="width: 100%; height: 150px; padding: 10px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 16px;"></textarea>
      <div class="note-actions" style="display: flex; justify-content: flex-end; gap: 10px;">
        <button class="cancel-btn" style="padding: 8px 16px; border-radius: 8px; border: 1px solid #ddd; background-color: #f5f5f5;">取消</button>
        <button class="save-btn" style="padding: 8px 16px; border-radius: 8px; border: none; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white;">保存</button>
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